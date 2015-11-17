function Map(id){
	return {
			
			titulo:id,
				
		    tile_size:25,

		    keys: [
		        {id: 0, colour: 'Transparent', solid: 0},
		        {id: 1, colour: 'Transparent', solid: 1},
		        {id: 2,colour: 'block',img:'./ballGame/img/ambiente/bloco-small.png',solid: 1,bounce: 0.35},
		        {id: 3,descricao:'water',colour: 'rgba(121, 220, 242, 0.9)',friction: {x: 0.9,y: 0.9},gravity: {x: 0,y: 0.1},jump: 1,fore: 1},
		        {id: 4,colour: 'vine',img:'./ballGame/img/ambiente/vine.png',friction: {x: 1.0,y: 0.7},gravity: {x: 0,y: 0.1},jump: 1,fore: 1},
		        {id: 5,colour: '#E373FA',solid: 1,bounce: 1.1},
		        {id: 6,colour: '#666',solid: 1,bounce: 0},
		        {id: 7,colour: '#73C6FA',solid: 0},
		        {id: 8,colour: 'flag',img:'./ballGame/img/itens/flag.png',solid: 0,script: 'next_level'},
		        {id: 9,colour: 'lava',img:'./ballGame/img/ambiente/lava.jpeg',solid: 0,script: 'death'},
		        {id: 10,colour: 'block-used',img:'./ballGame/img/ambiente/block-useless.png',solid: 1},
		        {id: 11,colour: 'key-coin',img:'./ballGame/img/itens/key.png',solid: 0,script: 'lock'},
		        {id: 12,colour: 'red-coin',img:'./ballGame/img/itens/red.png',solid: 0,script:'unlock'},
		        {id: 13,colour: 'key-coin',img:'./ballGame/img/itens/key.png',solid: 0,script: 'lock'},
		        {id: 14,colour: '#FF6699',solid: 0,script:'lock'},
		        {id: 15,colour: 'red-coin',img:'./ballGame/img/itens/red.png',solid: 0,script:'unlock'},
		        {id: 16,colour: 'picker-1',solid: 1,},
		        {id: 17,colour: 'ghost',img:'./ballGame/img/creatures/ghost.png',creature:{existente:1,moviment:1},script:'death'},
		    ],

		    data: generateMap(1,400,2),
		    
		    gravity: {
		        x: 0,
		        y: 0.3
		    },

		    vel_limit: {
		        x: 2,
		        y: 16
		    },
		    
		    movement_speed: {
		        jump: 6,
		        left: 0.3,
		        right: 0.3
		    },

		    player: {
		        x: 2,
		        y: 29
		    },

		    scripts: {
		        next_level: "alert('Yay! You won! next map');loadMap('"+id+"');",
		        death: "alert('You died!');loadMap('"+id+"');",
		        unlock: unlock("10") + unlock("13")+ changeColour("11", "key-coin"),
		        lock: lock("10","block-used") + changeColour("13", "red-coin")+ changeColour("11", "Transparent")
		    }
	};
}