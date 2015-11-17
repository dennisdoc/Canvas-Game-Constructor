var drawTileImage=function drawTileImage(x,y,tile_size,tile,context){
	 if(context==null){
		context = canvas.getContext('2d');
	 }
	 if(tile.colour=='grass'){
	    	drawSprite("grass.png", x, y,tile_size);
	    }else if(tile.colour=='block-used'){
	    	drawSprite("block-useless.png", x, y,tile_size);
	    }else if(tile.colour=='block'){
	    	drawSprite("bloco-small.png", x, y,tile_size);
	    }else if(tile.colour=='lava'){
	    	drawSprite("lava.jpeg", x, y,tile_size);
	    }else if(tile.colour=='red-coin'){
	    	drawSprite("red.png", x, y,tile_size);
	    }else if(tile.colour=='key-coin'){
	    	drawSprite("key.png", x, y,tile_size);
	    }else if(tile.colour=='vine'){
	    	drawSprite("vine.png", x, y,tile_size);
	    }else if(tile.colour=='flag'){
	    	drawSprite("flag.png", x, y,tile_size);
	    }else if(tile.colour=='turtle'){
	    	drawSprite("turtle.png",x, y,tile_size);
	    }else if(tile.colour=='ghost'){
	    	drawSprite("ghost.png", x, y,tile_size);
	    }else{
	    	return false;
	    }
	 return true;
}