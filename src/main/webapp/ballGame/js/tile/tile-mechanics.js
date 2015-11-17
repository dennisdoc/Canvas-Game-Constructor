Clarity.prototype.get_tile = function (x, y) {

    return (this.current_map.data[y] && this.current_map.data[y][x]) ? this.current_map.data[y][x] : 0;
};
Clarity.prototype.draw_tile = function (x, y, tile, context) {
	
    if (!tile || !tile.colour) return;
    
    if(tile.creature!== undefined){
    	var viewx=(this.camera.x / 2);
    	var viewy=(this.camera.y / 2)
		if(tile.creature.existente>=1  && x>=viewx && y>=viewy){
			
			var offset = Math.round((this.tile_size / 2) - 1);
			
			if(!tile.creature.time || (this.creaturesReset!== undefined && this.creaturesReset==true)){
				if(tile.creature.time<=100){
					tile.creature.time=tile.creature.time+1;
				}else{
					tile.creature.time=1;
				}
				tile.creature.locomocao=tile.creature.moviment;	
				if(!this.creaturesCount){
					this.creaturesCount=1;
				}else{
					this.creaturesCount=this.creaturesCount+1;
				}
				if(this.creaturesCount!=this.mapCreaturesCount && tile.creature.time >=100){
					this.creaturesReset=false;
				}else{
					this.creaturesReset=true;
				}
			}
			if(tile.creature.time >=20 && this.creaturesReset==false){
				x=x-tile.creature.locomocao;
				tile.creature.locomocao=tile.creature.locomocao+tile.creature.moviment;
			}else{
				tile.creature.time=tile.creature.time+1;
			}
			
			if(this.last_tile != tile.id && tile.script) {
				var playerX=Math.round(this.player.loc.x);
				var playerY=Math.round(this.player.loc.y);
				var mediaSize=this.tile_size/2;
				
				if(playerX>=(Math.round(x-mediaSize)) && playerX<=(Math.round(x+mediaSize)) && playerY>=(Math.round(y-mediaSize)) && playerY<=(Math.round(y+mediaSize))){
					eval(this.current_map.scripts[tile.script]);
				}
		    }
		}else if(x<=viewx || y<=viewy){
			x=x-tile.creature.locomocao;
		}
    }
    if(tile.id==2 && window.color2!=undefined){
    	tile.colour=window.color2;
    }
    if(this.leftButtonClicked!= undefined && this.leftButtonClicked){
    	tile.colour='Transparent';
    }
    try {
    	if(drawTileImage(x,y,this.tile_size,tile,context)){
    		
    	}else{
    	context.fillStyle = tile.colour;
    	if(tile.colour=='picker-1' || 
    			(this.mouseClick!=undefined && x<(this.mouseClick.x-this.tile_size/2) && x>(this.mouseClick.x+this.tile_size/2)
    					&& y<(this.mouseClick.y-this.tile_size/2) && y>(this.mouseClick.y+this.tile_size/2))){
    		context.fillStyle = window.st;
    	}
    	if((this.mouseClick!=undefined && this.mouseClick.x<(x-this.tile_size/2) && this.mouseClick.x>(x+this.tile_size/2)
    					&& this.mouseClick.y<(y-this.tile_size/2) && this.mouseClick.y>(y+this.tile_size/2))){
    		context.fillStyle = window.st;
    	}
	    context.fillRect(
	        x,
	        y,
	        this.tile_size,
	        this.tile_size
	    );
    }
    }catch (e) {
        if (e.name == "NS_ERROR_NOT_AVAILABLE") {
            
        }
    }
};