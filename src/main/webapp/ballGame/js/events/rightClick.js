var rightClick=function rightClick(e,map,mouseRight) {
	if(this.mouseClick==undefined){
		this.mouseClick={
			x:0,
			y:0
		};
	}
	this.leftButtonClicked=true;
	
	if(e.offsetX!==undefined){
		 this.mouseClick.x = e.offsetX;
		 this.mouseClick.y = e.offsetY;
      } else { // Firefox compatibility
    	  this.mouseClick.x = e.layerX - e.currentTarget.offsetLeft;
    	  this.mouseClick.y = e.layerY - e.currentTarget.offsetTop;
      }
    
    var offset = Math.round((this.tile_size / 2) - 1);
    var tx=Math.round((this.mouseClick.x+camerax)/tilesize);
    var ty=Math.round((this.mouseClick.y+cameray)/tilesize); 
    if(map.data[ty][tx]!=undefined){
    	if(mouseRight!=undefined){
    		eval("currentMap.data["+ty+"]["+tx+"]=mouseRight;");
    	}else{
    		map.data[ty][tx]={id: 99,colour: 'Transparent',solid: 0};
    	}
    }
};