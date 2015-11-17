//var canvasApp=angular.module("canvasApp",['ngResource']);
layout.controller("canvasControl",["$scope","$resource","$http","$modal", function($scope, $resource, $http,$modal) {
	  $scope.initCanvas=initClarityGame($scope);
	  $scope.audio = document.getElementById("audio");
	  $scope.playing=false;
	  $scope.items;
	  $scope.sq = '#7bbf60';
	  $scope.t1 = '#bf5e66';
	  $scope.t2 = '#6064bf';
	  $scope.st = '#172f21';
	  $scope.color2;
	  $scope.selectMouseLeft;
	  $scope.selectMouseRight;
	  $scope.d = 220;
	  $scope.stw = 15;
	  $scope.mapSelected;
	  $scope.mapatitulo='';
	  $scope.clicked=false;
	  $scope.isCollapsed = true;
	  
	  $scope.updateMaps=function updateMaps(){
		  $.ajax({
				url: getRoute()+"api/map/consulta/all",
				success: function(data){
				$scope.maps=JSON.parse(data);
				}, error: function(error){
					console.log(error);
				}
		  });
	  }
	  $scope.updateMaps();
	  $scope.updateKeys=function(keys){
		  $scope.items=keys;
		  $scope.mapColors=Array();
		  for (var x = 0; x < $scope.items.length; x++) {
			  var exist=false;
			  for (var y = 0; y < $scope.mapColors.length; y++) {
				  if($scope.items[x].colour==$scope.mapColors[y]){
					  exist=true;
				  }
			  }
			  if(exist==false){
				  $scope.mapColors.push($scope.items[x].colour);
			  }
		  }
		  $scope.$apply;
	  }
	  
	  $scope.newMap=function(mapatitulo){
		  $scope.map=Map(mapatitulo);
		  _resource.create({titulo:$scope.map.titulo},angular.toJson($scope.map.toSource()));  
	  }
	 
	  $scope.$watchCollection ("[sq, t1, t2, stw, st,selectMouseLeft,selectMouseRight,color2]", function( newValue, oldValue ) {
	    window.st = $scope.st;
	    window.stw = $scope.stw;
	    window.selectMouseLeft=$scope.selectMouseLeft;
	    window.selectMouseRight=$scope.selectMouseRight;
	    window.color2=$scope.color2;
	  });
	  $scope.$watchCollection ("[map]", function( newValue, oldValue ) {
		  	if($scope.map!=undefined && currentMap.titulo!=$scope.map.titulo){
		  		game.load_map($scope.map);
			    $scope.items=$scope.map.keys;
			    currentMap=$scope.map;
		  	}
	  });
	  $scope.$watchCollection ("[maps,items]", function( newValue, oldValue ) {

	  });
	  $scope.$watchCollection ("[mapSelected]", function( newValue, oldValue ) {
		  if($scope.mapSelected==undefined){
			  $.when(loadMap('map2')).done(function(){
				  $scope.map=currentMap;
				  $scope.loop=Loop($scope);
				  $scope.updateKeys(currentMap.keys);
			  });
//			  $scope.initCanvas=initClarityGame($scope);
//			  $scope.map=map;
//			  $scope.loop=Loop($scope);
		  }else{
			  $.when(loadMap($scope.mapSelected)).done(function(){
				  $scope.map=currentMap;
			  });
		  }
	  });
	  window.st = $scope.st;
	  window.stw = $scope.stw; 
	  window.map=$scope.map;
	  
	  var _resource = $resource(getRoute()+"api/map/atributos", {}, {
		  create: {method: "POST"}
	  });
	  
	  $scope.saveMap = function() {
		  $("#loading").show();
	    _resource.create({titulo:currentMap.titulo},angular.toJson(currentMap.toSource())).then(function() {
	    	$("#loading").hide();
	    });
	  };
	  $scope.setMouseLeft = function(item){
		  $scope.selectMouseLeft=item;
	  }
	  $scope.setMouseRight = function(item){
		  $scope.selectMouseRight=item;
	  }
	  $scope.setMapSelected=function(map){
		  $scope.mapSelected=map;
	  }
	  $scope.pause=function(){
		  $scope.audio.pause();
		  $scope.playing=false;
	  }
	  $scope.play=function(){
		  $scope.audio.play();
		  $scope.playing=true;
	  }
	  $scope.canvasClick = function(event) {
		  if($scope.clicked==true){
			  click(event,$scope.map,$scope.selectMouseLeft);
		  }else{
			  mouseOver(event, $scope.selectMouseLeft);
		  }
	  }
	  $scope.setClicked=function(eventClick){
		  $scope.clicked=eventClick;
	  }
	  $scope.rightClick = function(event) {
		  rightClick(event,$scope.map,$scope.selectMouseRight);
		  $scope.clicked=false;
	  }

}]);

layout.directive('ngRightClick', function($parse) {
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function(e) {
            scope.$apply(function() {
            	e.preventDefault();
                fn(scope, {$event:e});
            });
        });
        return false;
    };
});

layout.factory('Entry', function($resource) {
	  return $resource('/rest/api/save', { id: '@_id' }, {
	    update: {
	      method: 'PUT'
	    }
	  });
});