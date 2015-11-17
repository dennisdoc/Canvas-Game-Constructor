var click=function click(e,map,mouseLeft) {
	if(map==undefined){
		map=currentMap;
	}
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
    	if(mouseLeft!=undefined){
    		eval("map.data["+ty+"]["+tx+"]=mouseLeft;");
    	}else{
    		map.data[ty][tx]={id: 99,colour: 'block-used',solid: 1};
    	}
    }
};

var mouseOver=function mouseOver(e,mouseLeftTile){
	var x;
	var y;
	if(e.offsetX!==undefined){
		 x = e.offsetX;
		 y = e.offsetY;
     } else {
	   	  x = e.layerX - e.currentTarget.offsetLeft;
	   	  y = e.layerY - e.currentTarget.offsetTop;
     }
	if(mouseLeftTile!=undefined){
		drawTileImage(x, y, tilesize, mouseLeftTile,null);
	}else{
		drawTileImage(x, y, tilesize, {id: 99,colour: 'block-used',solid: 1},null);
	}
}