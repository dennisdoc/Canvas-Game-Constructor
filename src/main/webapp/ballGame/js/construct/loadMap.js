function loadMap(tituloMap){
	var map;
	$("#loading").show();
	$.ajax({
		url: getRoute()+"api/map/consulta?titulo="+tituloMap,
		async:   false,
		success: function(data){
		$("#loading").hide();
		eval("var mapLoad="+data);
		map=mapLoad;
		currentMap=mapLoad;
		game.load_map(mapLoad);
		console.log("loaded");
		}, error: function(error){
			
		}
	});
	return map;
}

Clarity.prototype.load_map = function (map) {
	
    if (typeof map      === 'undefined'
     || typeof map.data === 'undefined'
     || typeof map.keys === 'undefined') {

        this.error('Error: Invalid map data!');

        return false;
    }
    currentMap=map;
    this.current_map = map;

    this.current_map.background = map.background || 'Transparent';
    this.current_map.gravity = map.gravity || {x: 0, y: 0.3};
    this.tile_size = map.tile_size || 16;

    var _this = this;
    
    this.current_map.width = 0;
    this.current_map.height = 0;

    map.keys.forEach(function (key) {

        map.data.forEach(function (row, y) {
            
            _this.current_map.height = Math.max(_this.current_map.height, y);

            row.forEach(function (tile, x) {
                
                _this.current_map.width = Math.max(_this.current_map.width, x);

                if (tile == key.id)
                    _this.current_map.data[y][x] = key;
            });
        });
    });
    
    this.current_map.width_p = this.current_map.width * this.tile_size;
    this.current_map.height_p = this.current_map.height * this.tile_size;

    this.player.loc.x = map.player.x * this.tile_size || 0;
    this.player.loc.y = map.player.y * this.tile_size || 0;
    this.player.colour = map.player.colour || '#000';
  
    this.key.left  = false;
    this.key.up    = false;
    this.key.right = false;
    
    this.camera = {
        x: 0,
        y: 0
    };
    
    this.player.vel = {
        x: 0,
        y: 0
    };
    
    this.creaturesReset=true;
    
    this.log('Successfully loaded map data.');

    return true;
};