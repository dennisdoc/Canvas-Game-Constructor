function initCacheImages(){
	this.cacheImages = {
	    	block : null,
	    	blockUsed : null,
	    	grass : null,
	    	lava : null,
	    	redCoin: null,
	    	keyCoin : null,
	    	vine : null,
	    	flag : null,
	    	turtle : null
	    };
	this.playerImages = {
		    jumpRight: null,
		    jumpLeft : null,
		    still : null,
		    walkRight : null,
		    walkRightFoot : null,
		    walkLeft : null,
		    walkLeftFoot : null	    
	};
	this.backgroundImage=null;
}

function getTurtle(){
	if(this.cacheImages==null){
		initCacheImages();
	}
	if(this.cacheImages.grass==null){
		var img = new Image();
		img.src = "./ballGame/img/ambiente/turtle.jpeg";
		this.cacheImages.turtle= img;
	}
	return this.cacheImages.turtle;
}

function getBackground(){
	if(this.cacheImages==null){
		initCacheImages();
	}
	if(this.backgroundImage==null){
		var img = new Image();
		img.src = "./ballGame/img/ambiente/mario-background.jpeg";
		this.backgroundImage= img;
	}
	return this.backgroundImage;
}

function getFlag(){
	if(this.cacheImages==null){
		initCacheImages();
	}
	if(this.cacheImages.flag==null){
		var img = new Image();
		img.src = "./ballGame/img/itens/flag.png";
		this.cacheImages.flag= document.getElementById("flag");
	}
	return this.cacheImages.flag;
}

function getGrass(){
	if(this.cacheImages==null){
		initCacheImages();
	}
	if(this.cacheImages.grass==null){
		var img = new Image();
		img.src = "./ballGame/img/ambiente/grass.png";
		this.cacheImages.grass= document.getElementById("grass");
	}
	return this.cacheImages.grass;
}

function getVine(){
	if(this.cacheImages==null){
		initCacheImages();
	}
	if(this.cacheImages.vine==null){
		this.cacheImages.vine= document.getElementById("vine");
	}
	return this.cacheImages.vine;
}

function getKeyCoin(){
	if(this.cacheImages==null){
		initCacheImages();
	}
	if(this.cacheImages.keyCoin==null){
		this.cacheImages.keyCoin= document.getElementById("key-coin");
	}
	return this.cacheImages.keyCoin;
}

function getRedCoin(){
	if(this.cacheImages==null){
		initCacheImages();
	}
	if(this.cacheImages.redCoin==null){
		this.cacheImages.redCoin= document.getElementById("red-coin");
	}
	return this.cacheImages.redCoin;
}

function getBlock(){
	if(this.cacheImages==null){
		initCacheImages();
	}
	if(this.cacheImages.block==null){
		this.cacheImages.block= document.getElementById("block");
		if(this.cacheImages.block==null){
			this.cacheImages.block= new Image();
		}
	}
	return this.cacheImages.block;
}

function getLava(){
	if(this.cacheImages==null){
		initCacheImages();
	}
	if(this.cacheImages.lava==null){
		this.cacheImages.lava= document.getElementById("lava");
	}
	return this.cacheImages.lava;
}

function getBlockUsed(){
	if(this.cacheImages==null){
		initCacheImages();
	}
	if(this.cacheImages.blockUsed==null){
		this.cacheImages.blockUsed= document.getElementById("block-used");
	}
	return this.cacheImages.blockUsed;
}

function getGhost(){
	if(this.cacheImages==null){
		initCacheImages();
	}
	if(this.cacheImages.ghost==null){
		this.cacheImages.ghost= document.getElementById("ghost");
	}
	return this.cacheImages.ghost;
}