var map99;
var load=false;
/* mapa 1*/
var map = {
	
	titulo:"map1",
		
    tile_size:20,

    /*
    
    Key vairables:
    
    id       [required] - an integer that corresponds with a tile in the data array.
    colour   [required] - any javascript compatible colour variable.
    solid    [optional] - whether the tile is solid or not, defaults to false.
    bounce   [optional] - how much velocity is preserved upon hitting the tile, 0.5 is half.
    jump     [optional] - whether the player can jump while over the tile, defaults to false.
    friction [optional] - friction of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
    gravity  [optional] - gravity of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
    fore     [optional] - whether the tile is drawn in front of the player, defaults to false.
    script   [optional] - refers to a script in the scripts section, executed if it is touched.
    
    */

    keys: [
        {id: 0, colour: 'Transparent', solid: 0},
        {id: 1, colour: 'Transparent', solid: 0},
        {id: 2,colour: 'block',img:'./ballGame/img/ambiente/bloco-small.png',solid: 1,bounce: 0.35},
        {id: 3,colour: 'rgba(121, 220, 242, 0.9)',friction: {x: 0.9,y: 0.9},gravity: {x: 0,y: 0.1},jump: 1,fore: 1},
        {id: 4,colour: 'vine',img:'./ballGame/img/ambiente/vine.png',friction: {x: 1.0,y: 0.7},gravity: {x: 0,y: 0.1},jump: 1,fore: 1},
        {id: 5,colour: '#E373FA',solid: 1,bounce: 1.1},
        {id: 6,colour: '#666',solid: 1,bounce: 0},
        {id: 7,colour: '#73C6FA',solid: 0,script: 'change_colour'},
        {id: 8,colour: 'flag',img:'./ballGame/img/itens/flag.png',solid: 0,script: 'next_level'},
        {id: 9,colour: 'lava',img:'./ballGame/img/ambiente/lava.jpeg',solid: 0,script: 'death'},
        {id: 10,colour: 'block-used',img:'./ballGame/img/ambiente/block-useless.png',solid: 1},
        {id: 11,colour: 'key-coin',img:'./ballGame/img/itens/key.png',solid: 0,solid: 0,script: 'lock'},
        {id: 12,colour: 'Transparent',solid: 0,script: 'S'},
        {id: 13,colour: 'red-coin',img:'./ballGame/img/itens/red.png',solid: 0,script:'unlock'},
        {id: 14,colour: 'key-coin',img:'./ballGame/img/itens/key.png',solid: 0,script: 'lock'},
        {id: 15,colour: '#FF6699',solid: 0,script:'lock'},
        {id: 16,colour: 'red-coin',img:'./ballGame/img/itens/red.png',solid: 0,script:'unlock'},
        {id: 17,colour: 'picker-1',solid: 1,},
        {id: 18,colour: '#FF6699',solid: 1,}
    ],

    /* An array representing the map tiles. Each number corresponds to a key */
    data: [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 1, 1, 1, 1, 1,12, 1, 1, 1, 1, 1, 2],
        [2, 1,13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 2, 8, 1, 1, 1, 1, 1, 2],
        [2, 1,10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1,10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1,10,10, 1, 1, 1,10, 1, 1, 1, 1, 2],
        [2, 1,10,10,10,13, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1,10,10, 1, 1, 1,10, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 6, 6, 6, 6, 2],
        [2, 1, 1, 1, 1,10,10,13, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1,10,10, 1, 1, 1,10, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1,10,10, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1,10,10, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,10, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 7, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1,10,10, 2, 0, 0, 0, 0, 0, 0, 0, 0,18, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 4, 2, 2, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1,10,10,10, 2, 0, 0, 0, 0, 0, 0, 0, 0,17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1,13,10,10, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0,17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2, 2, 2],
        [2, 1, 1, 1, 1, 1, 1,10,10, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0,17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2,11, 1, 1, 1,13,10,10, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2, 1, 1, 1, 1,10,10, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2, 1, 1, 1,10,10, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2, 1,10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2, 1,10,10, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2,13, 1,10,10, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2, 1, 1, 1,10,10, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],/*1 piso*/
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2],
        [2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2],
        [2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2],
        [2, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 8, 1, 1, 1, 2],
        [2,13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2],
        [2,10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 9, 9, 9, 2,10,10,10,10,10,10, 1, 1, 1, 1, 1, 1, 1,13, 2, 2, 2, 2, 4, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
        [2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 2, 2, 2, 2, 2, 2, 6, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2,14, 2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 5, 2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,10,10,10,10,10, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,10,10, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,10,10, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2, 5, 5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,10,10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,10,10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,10,10, 1, 1, 1, 1, 1,15, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,10,10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1,10,10,10,10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1,10,10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2],
        [2, 1, 1, 1, 1, 1, 1, 1,10,10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2],
        [2, 1, 1, 1, 1, 1, 1,10,10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,15, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2],
        [2, 1, 1, 1, 1, 1,10,10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
        [2, 1, 1, 1, 1,10,10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
        [2,14, 1, 1, 1,16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    ],

    /* Default gravity of the map */
    
    gravity: {
        x: 0,
        y: 0.3
    },
    
    /* Velocity limits */

    vel_limit: {
        x: 2,
        y: 16
    },

    /* Movement speed when the key is pressed */
    
    movement_speed: {
        jump: 6,
        left: 0.3,
        right: 0.3
    },
    
    /* The coordinates at which the player spawns and the colour of the player */

    player: {
        x: 2,
        y: 2
    },
    
    /* scripts refered to by the "script" variable in the tile keys */

    scripts: {
        /* you can just use "this" instead of your engine variable ("game"), but Codepen doesn't like it */
        change_colour: "game.player.colour = '#'+(Math.random()*0xFFFFFF<<0).toString(16);",
        
        /* you could load a new map variable here */
        next_level: "alert('Yay! You won! next map');loadMap('map1');",
        death: "alert('You died!');game.load_map(map);",
        unlock: unlock("10") + unlock("13")+ changeColour("11", "key-coin"),
        S:"alert('ShortCut');game.load_map(map4);",
        lock: lock("10","block-used") + changeColour("13", "red-coin")+ changeColour("11", "Transparent")
}};

var map2 = {
	titulo:'map2',
    tile_size:25,

    /*
    
    Key vairables:
    
    id       [required] - an integer that corresponds with a tile in the data array.
    colour   [required] - any javascript compatible colour variable.
    solid    [optional] - whether the tile is solid or not, defaults to false.
    bounce   [optional] - how much velocity is preserved upon hitting the tile, 0.5 is half.
    jump     [optional] - whether the player can jump while over the tile, defaults to false.
    friction [optional] - friction of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
    gravity  [optional] - gravity of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
    fore     [optional] - whether the tile is drawn in front of the player, defaults to false.
    script   [optional] - refers to a script in the scripts section, executed if it is touched.
    
    */
    
    keys: [
        {id: 0, colour: '#333', solid: 0},
        {id: 1, colour: 'Transparent', solid: 0},
        {id: 2,colour: 'Transparent',solid: 1},
        {id: 3,colour: 'grass',solid:1},
        {id: 4,colour: 'vine',friction: {x: 1.0,y: 0.7},gravity: {x: 0,y: 0.1},jump: 1,fore: 1},
        {id: 5,colour: '#E373FA',solid: 1,bounce: 1.1},
        {id: 6,colour: 'block',solid: 1},
        {id: 7,colour: 'transparent',solid: 0,script: 'change_colour'},
        {id: 8,colour: 'flag',solid: 0,script: 'next_level'},
        {id: 9,colour: 'lava',solid: 0,script: 'death'},
        {id: 10,colour: 'block-used',solid: 1},
        {id: 11,colour: 'key-coin',solid: 0,script: 'unlock'},
        {id: 12,colour: '#555',solid: 1,bounce: 5.2},
        {id: 13,colour: 'red-coin',solid: 0,script:'lock'},
        {id: 14,colour: 'rgba(121, 220, 242, 0.4)',friction: {x: 1.5,y: 1.5},gravity: {x: 0,y: 1},jump: 2,fore: 2},
        {id: 15,colour: 'ghost',creature:{existente:1,moviment:1},script:'death'},
        {id: 16,colour: 'ghost',creature:{existente:1,moviment:1},script:'death'},
        {id: 17,colour: 'ghost',creature:{existente:1,moviment:1},script:'death'},
        {id: 18,colour: 'ghost',creature:{existente:1,moviment:1},script:'death'},
        {id: 19,colour: 'ghost',creature:{existente:1,moviment:1},script:'death'}
    ],

    /* An array representing the map tiles. Each number corresponds to a key */
    data: [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 2, 2, 2, 2, 2, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,18],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 6],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,19],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,11, 6, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 6, 6, 9, 6, 6, 4, 1, 1, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 6, 6, 6, 6, 6, 6, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 6, 6, 6, 6, 6, 4, 1, 1, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 6, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 6, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 6, 1, 1, 1, 1, 6, 1, 6, 1, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1,16, 1, 6, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 6, 6, 1, 1, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 6, 1, 6, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 1, 1],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1,11, 6, 1, 1, 4, 1, 1,15, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 6, 6, 1, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 1, 1],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 6, 6, 6, 6, 6, 6, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 1, 1],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1,10, 1, 1, 4, 1, 1, 1, 1, 1, 1, 6, 6, 9, 9, 9, 6, 6, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 6, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 1, 1],
        [2,13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1,10, 1, 1, 4, 1, 1, 1, 1, 1, 6, 6, 6, 9, 9, 9, 6, 6, 6, 1, 1, 1, 1, 4, 1, 1, 1, 1, 6, 6, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 6, 6, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1],
        floor(3,999)
    ],
    
    /* Numero de bixos */
    mapCreaturesCount : 4,
    
    /* Default gravity of the map */
    
    gravity: {
        x: 0,
        y: 0.3
    },
    
    /* Velocity limits */

    vel_limit: {
        x: 2,
        y: 16
    },

    /* Movement speed when the key is pressed */
    
    movement_speed: {
        jump: 6,
        left: 0.3,
        right: 0.3
    },
    
    /* The coordinates at which the player spawns and the colour of the player */

    player: {
        x: 1,
        y: 29,
        colour: '#FF9900'
    },
    
    /* scripts refered to by the "script" variable in the tile keys */

    scripts: {
        /* you can just use "this" instead of your engine variable ("game"), but Codepen doesn't like it */
        change_colour: "game.player.colour = '#'+(Math.random()*0xFFFFFF<<0).toString(16);",
        /* you could load a new map variable here */
        next_level: "alert('Yay! You won! Reloading map.');game.load_map(map3);",
        death: death("map2"),
        unlock: unlock("10"),
        lock: lock("10","block-used")
        }
};
var map3 = {

    tile_size:12,

    /*
    
    Key vairables:
    
    id       [required] - an integer that corresponds with a tile in the data array.
    colour   [required] - any javascript compatible colour variable.
    solid    [optional] - whether the tile is solid or not, defaults to false.
    bounce   [optional] - how much velocity is preserved upon hitting the tile, 0.5 is half.
    jump     [optional] - whether the player can jump while over the tile, defaults to false.
    friction [optional] - friction of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
    gravity  [optional] - gravity of the tile, must have X and Y values (e.g {x:0.5, y:0., 1, 15}).
    fore     [optional] - whether the tile is drawn in front of the player, defaults to false.
    script   [optional] - refers to a script in the scripts section, executed if it is touched.
    
    */
    
    keys: [
        {id: 0, colour: '#333', solid: 0},
        {id: 1, colour: 'Transparent', solid: 0},
        {id: 2,colour: 'block',solid: 1,bounce: 0.35},
        {id: 3,colour: 'rgba(121, 220, 242, 0.4)',friction: {x: 0.9,y: 0.9},gravity: {x: 0,y: 0.1},jump: 1,fore: 1},
        {id: 4,colour: '#777',jump: 1},
        {id: 5,colour: '#E373FA',solid: 1,bounce: 1.1},
        {id: 6,colour: '#666',solid: 1,bounce: 0},
        {id: 7,colour: '#73C6FA',solid: 0,script: 'change_colour'},
        {id: 8,colour: '#FADF73',solid: 0,script: 'next_level'},
        {id: 9,colour: '#C93232',solid: 0,script: 'death'},
        {id: 10,colour: '#555',solid: 1},
        {id: 11,colour: '#0FF',solid: 0,script: 'unlock'},
        {id: 12,colour: '#555',solid: 1,bounce: 5.2},
        {id: 13,colour: '#555',solid: 0,script:'lock'},
        {id: 14,colour: 'block-used',solid: 1,vel_limit:{x: 20,y: 16}}
    ],

    /* An array representing the map tiles. Each number corresponds to a key */
    data: [
        [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [ 2, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [ 2, 7, 11, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 2],
        
        [ 2, 1, 11, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 2],
        [ 2, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14, 1, 1, 1, 14, 1, 1, 1, 1, 14, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [ 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14, 1, 1, 1, 1, 1, 2],
        [ 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14, 1, 1, 1, 1, 1, 1, 1, 1, 14, 1, 1, 1, 1, 1, 1, 1, 14, 1, 1, 1, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [ 2,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1,14 ,1 ,1 ,1 ,14 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,14 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,14 ,1 ,1 ,1 ,1 ,1 ,1 , 1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [ 2,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2]
    ],
  
    	
    /* Default gravity of the map */
    
    gravity: {
        x: 0,
        y: 0.3
    },
    
    /* Velocity limits */

    vel_limit: {
        x: 2,
        y: 16
    },

    /* Movement speed when the key is pressed */
    
    movement_speed: {
        jump: 6,
        left: 0.3,
        right: 0.3
    },
    
    /* The coordinates at which the player spawns and the colour of the player */

    player: {
        x: 2,
        y: 2,
        colour: '#FF9900'
    },
    
    /* scripts refered to by the "script" variable in the tile keys */

    scripts: {
        /* you can just use "this" instead of your engine variable ("game"), but Codepen doesn't like it */
        change_colour: "game.player.colour = '#'+(Math.random()*0xFFFFFF<<0).toString(16);",
        /* you could load a new map variable here */
        next_level: "alert('Yay! You won! Reloading map.');game.load_map(map4);",
        death: death("map3"),
        unlock: "game.current_map.keys[10].solid = 0;game.current_map.keys[10].colour = '#888';"
    }
};
var map4 = {
    
    tile_size: 12,

    /*
    
    Key vairables:
    
    id       [required] - an integer that corresponds with a tile in the data array.
    colour   [required] - any javascript compatible colour variable.
    solid    [optional] - whether the tile is solid or not, defaults to false.
    bounce   [optional] - how much velocity is preserved upon hitting the tile, 0.5 is half.
    jump     [optional] - whether the player can jump while over the tile, defaults to false.
    friction [optional] - friction of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
    gravity  [optional] - gravity of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
    fore     [optional] - whether the tile is drawn in front of the player, defaults to false.
    script   [optional] - refers to a script in the scripts section, executed if it is touched.
    
    */
    
    keys: [
        {id: 0, colour: '#333', solid: 0},
        {id: 1, colour: '#888', solid: 0},
        {id: 2,colour: '#555',solid: 1,bounce: 0.35},
        {id: 3,colour: 'rgba(121, 220, 242, 0.4)',friction: {x: 0.9,y: 0.9},gravity: {x: 0,y: 0.01},jump: 1,fore: 1},
        {id: 4,colour: '#777',jump: 1},
        {id: 5,colour: '#E373FA',solid: 1,bounce: 1.1},
        {id: 6,colour: '#666',solid: 1,bounce: 0},
        {id: 7,colour: '#73C6FA',solid: 0,gravity: {x: 0,y:0.1},script: 'change_colour'},
        {id: 8,colour: '#FADF73',solid: 0,script: 'next_level'},
        {id: 9,colour: '#C93232',solid: 0,script: 'death'},
        {id: 10,colour: '#555',solid: 1},
        {id: 11,colour: '#0FF',solid: 0,script: 'unlock'},
        {id: 12,colour: '#E373FA',solid: 1,bounce: 5.2},
        {id: 13,colour: '#555',solid: 0,script:'lock'},
        {id: 14,colour: '#FFFFFF',solid: 0,vel_limit:{x: 20,y: 16},gravity:{x:0,y:5}
        
}
    ],

    /* An array representing the map tiles. Each number corresponds to a key */
    data: [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2],
        [2, 8, 3, 3, 3, 8, 3, 3, 3, 3, 2],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1,14, 2],
        [2, 7, 7, 7, 7,12, 7, 7, 7, 7, 2],
        [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
        [2, 7, 7,12, 7, 1, 7, 7, 7, 7, 2],
        [2, 3, 1, 3, 3, 3, 3, 3, 3, 3, 2],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2],
        [2,12, 3, 1, 3,12, 3, 3,12, 3, 2,0,0,0,0,1,1,1],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2,0,0,0,1,0,0,0,1],
        [2, 3, 3,12, 3, 3, 3, 3, 3, 3, 2,0,0,1,1,1,1,1,1,1],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2,0,0,1,0,0,0,0,0,1,0],
        [2,12, 3, 3, 3, 3,12, 3, 3, 3, 2,0,1,1,0,0,0,0,0,1,1,0],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2],
        [2, 3, 3,12, 3, 3, 3,12, 3, 3, 2,0,0,1,1,1,1,1,1,1,0],
        [2, 7, 7, 7, 7,12, 7, 7, 7, 7, 2,0,0,1,1,1,1,1,1,1,0],
        [2, 1, 1, 1, 1,12, 1, 1, 1, 1, 2,0,0,1,1,0,0,0,0,0,0],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2,0,0,1,1,0,0,0,0,0,0],
        [2, 3, 3, 3, 3,12, 3, 3, 3, 3, 2,0,0,1,1,0,0,0,0,0,0],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2,0,0,1,1,1,1,1,1,1,0],
        [2, 1, 1,12, 1, 1, 1, 1, 1, 1, 2,0,0,1,1,1,1,1,1,1,0],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2],
        [2,12, 3, 3, 3, 3, 3, 3, 3, 3, 2,0,0,0,1,1,0,0,0,0,0],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2,0,0,0,1,1,0,0,0,0,0],
        [2, 3, 3,12, 3, 3, 3, 3, 3, 3, 2,0,0,0,1,1,0,0,0,0,0],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2,0,0,0,1,1,1,1,1,0,0],
        [2, 3, 3,12, 3,12, 3, 3,12, 3, 2,0,0,0,1,1,0,0,1,0,0],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2,0,0,0,1,1,0,0,1,0,0],
        [2,12, 3,12, 3, 3, 3, 3, 3, 3, 2,0,0,0,1,1,0,0,1,0,0],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2],
        [2,12, 3, 3, 3, 3,12, 3, 3, 3, 2,0,0,1,1,1,1,1,1,0,0],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2,0,0,1,1,1,1,1,1,0,0],
        [2, 3,12,12, 3, 3, 3,12, 3, 3, 2,0,0,1,1,0,0,0,0,0,0],
        [2, 7, 7, 7, 7,12, 7, 7, 7, 7, 2,0,0,1,1,0,0,0,0,0,0],
        [2, 1, 1, 1,14,12, 1, 1, 1, 1, 2,0,0,1,1,1,1,1,1,0,0],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2,0,0,1,1,1,1,1,1,0,0],
        [2, 3,12, 3,12, 3, 3, 3, 3, 3, 2,0,0,1,1,0,0,0,0,0,0],
        [2, 3,12, 3,12, 3, 3, 3, 3, 3, 2,0,0,1,1,0,0,0,0,0,0],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2,0,0,1,1,1,1,1,1,0,0],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,0,0,1,1,1,1,1,1,0,0],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2],
        [2, 3,12, 3, 3, 3, 3, 3, 3, 3, 2],
        [2, 1, 7, 7, 7, 7, 7, 7, 7, 7, 2],
        [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
        [2, 7,12, 7, 7, 7, 7, 7, 7, 7, 2],
        [2, 3, 3, 3, 3,12, 3, 3,12, 3, 2],
        [2, 7, 7,12, 7, 7, 7, 7, 7, 7, 2],
        [2, 3,12, 3, 3, 3, 3, 3, 3, 3, 2],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2],
        [2,12, 3, 3, 3, 3,12, 3, 3, 3, 2],
        [2,12, 7, 7, 7, 7, 7, 7, 7, 7, 2],
        [2, 3,12,12, 3, 3, 3,12, 3, 3, 2],
        [2, 7, 7, 7, 7,12, 7, 7, 7, 7, 2],
        [2, 1, 1, 1, 1,12, 1, 1, 1, 1, 2],
        [2, 7,12, 7, 7, 7,12, 7, 7, 7, 2],
        [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
        [2, 7, 7, 7, 7, 7, 7, 7, 1, 7, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1,14, 2],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2],
        [2, 3, 3, 3, 3, 3, 3, 3, 3,12, 2],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2],
        [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2],
        [2, 3, 3, 3, 3,12, 3, 3,12, 3, 2],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2],
        [2, 3, 3, 3, 3, 3, 3, 3, 3,12, 2],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2],
        [2,12, 3, 3, 3, 3,12, 3, 3, 3, 2],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2],
        [2, 3, 3,12, 3, 3, 3,12,12, 3, 2],
        [2, 7, 7, 7, 7,12, 7, 7, 7, 7, 2],
        [2, 1, 1, 1, 1,12, 1, 1, 1, 1, 2],
        [2, 7, 7, 7, 7, 7, 7, 7, 7,12, 2],
        [2, 3,12, 3, 3, 3, 3, 3, 3, 3, 2],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2],
        [2, 1, 1, 1, 1, 1, 1,14,12,14, 2],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2],
        [2, 3,12, 3, 3, 3, 3, 3, 3, 3, 2],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2],
        [2, 3, 3,12, 3, 3, 3, 3, 3,12, 2],
        [2, 7, 7, 7, 7, 7, 7, 9, 7, 7, 2],
        [2, 3, 3, 3, 3,12, 3, 3,12, 3, 2],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2],
        [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2],
        [2,12, 3, 3, 3, 3, 7, 3, 3,12, 2],
        [2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2],
        [2, 3, 3,12, 3, 3, 3,12, 3, 3, 2],
        [2, 7, 7, 7, 7,12, 7, 7, 7, 7, 2],
        [2, 9, 9, 1, 1,12, 1, 1, 1, 1, 2],
        [2,12,12,12,12,12,12,12,12,12, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    ],

    /* Default gravity of the map */
    
    gravity: {
        x: 0,
        y: 0.1
    },
    
    /* Velocity limits */

    vel_limit: {
        x: 2,
        y: 16
    },

    /* Movement speed when the key is pressed */
    
    movement_speed: {
        jump: 6,
        left: 0.3,
        right: 0.3
    },
    
    /* The coordinates at which the player spawns and the colour of the player */

    player: {
     
        x: 8,
        y: 50,
        colour: '#FF9900'
    },
    
    /* scripts refered to by the "script" variable in the tile keys */

    scripts: {
        /* you can just use "this" instead of your engine variable ("game"), but Codepen doesn't like it */
        change_colour: 'game.player.colour = "#"+(Math.random()*0xFFFFFF<<0).toString(16);',
        /* you could load a new map variable here */
        
        next_level: 'game.load_map(map5);',
        death: 'alert("You died!");game.load_map(map4);',
        unlock: 'game.current_map.keys[10].solid = 0;game.current_map.keys[10].colour = "#888";'
    }
};
var map5 = {
		
	titulo:"map5",	
    tile_size:25,
    
    /*
    
    Key vairables:
    
    id       [required] - an integer that corresponds with a tile in the data array.
    colour   [required] - any javascript compatible colour variable.
    solid    [optional] - whether the tile is solid or not, defaults to false.
    bounce   [optional] - how much velocity is preserved upon hitting the tile, 0.5 is half.
    jump     [optional] - whether the player can jump while over the tile, defaults to false.
    friction [optional] - friction of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
    gravity  [optional] - gravity of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
    fore     [optional] - whether the tile is drawn in front of the player, defaults to false.
    script   [optional] - refers to a script in the scripts section, executed if it is touched.
    
    */
    
    keys: [
        {id: 0, colour: 'grass', solid: 0},
        {id: 1, colour: 'Transparent', solid: 0},
        {id: 2,colour: 'block',solid: 1,bounce: 0.35},
        {id: 3,colour: 'rgba(121, 220, 242, 0.4)',friction: {x: 0.9,y: 0.9},gravity: {x: 0,y: 0.01},jump: 1,fore: 1},
        {id: 4,colour: '#777',jump: 1},
        {id: 5,colour: '#E373FA',solid: 1,bounce: 1.1},
        {id: 6,colour: '#666',solid: 1,bounce: 0},
        {id: 7,colour: '#73C6FA',solid: 0,gravity: {x: 0,y:0.1}},
        {id: 8,colour: 'flag',solid: 0,script: 'next_level'},
        {id: 9,colour: '#C93232',solid: 0,script: 'death'},
        {id: 10,colour: '#555',solid: 1},
        {id: 11,colour: 'key-coin',solid: 0,script: 'unlock'},
        {id: 12,colour: '#E373FA',solid: 1,bounce: 5.2},
        {id: 13,colour: 'red-coin',solid: 0,script:'lock'},
        {id: 14,colour: '#73C6FA',solid: 0,vel_limit:{x: 40,y: 30},gravity:{x:0,y:10}},
        {id: 15,colour: 'blue', solid: 0,script:'transform'},
        {id: 16,colour: 'yellow', solid: 0,script:'reset'}
    ],

    /* An array representing the map tiles. Each number corresponds to a key */
    data: [
    	[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 2],
    	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1,10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,11, 1,13,10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 2, 5, 2, 2, 1, 2,10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 5, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1,10, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 9, 2, 1, 1, 1, 1, 1, 1, 1, 2],	
	[2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 2, 5, 2, 9, 5, 9, 9, 9, 2, 5,15,16, 1, 1, 1, 8, 2],
	[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ],
    
    /* Default gravity of the map */
    
    gravity: {
        x: 0,
        y: 0.3
    },
    
    /* Velocity limits */

    vel_limit: {
        x: 2,
        y: 16
    },

    /* Movement speed when the key is pressed */
    
    movement_speed: {
        jump: 4,
        left: 0.3,
        right: 0.3
    },
    
    /* The coordinates at which the player spawns and the colour of the player */

    player: {
     
        x: 5,
        y: 5,
        colour: '#FF9900'
    },
    
    /* scripts refered to by the "script" variable in the tile keys */

    scripts: {
        lock: lock('10', 'block-used'),
        next_level: 'game.load_map(map6);',
        death: "alert('You died!');game.load_map(map);",
        unlock: unlock('10'),
        transform:transform(),
        reset:resetTransform()
    }
};
var map6 = {

    tile_size:17,

    /*
    
    Key vairables:
    
    id       [required] - an integer that corresponds with a tile in the data array.
    colour   [required] - any javascript compatible colour variable.
    solid    [optional] - whether the tile is solid or not, defaults to false.
    bounce   [optional] - how much velocity is preserved upon hitting the tile, 0.5 is half.
    jump     [optional] - whether the player can jump while over the tile, defaults to false.
    friction [optional] - friction of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
    gravity  [optional] - gravity of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
    fore     [optional] - whether the tile is drawn in front of the player, defaults to false.
    script   [optional] - refers to a script in the scripts section, executed if it is touched.
    
    */
    
    keys: [
        {id: 0, colour: '#333', solid: 0},
        {id: 1, colour: '#888', solid: 0},
        {id: 2,colour: '#555',solid: 1,bounce: 0.35},
        {id: 3,colour: 'rgba(121, 220, 242, 0.4)',friction: {x: 0.9,y: 0.9},gravity: {x: 0,y: 0.01},jump: 1,fore: 1},
        {id: 4,colour: '#777',jump: 1},
        {id: 5,colour: '#E373FA',solid: 1,bounce: 1.1},
        {id: 6,colour: '#666',solid: 1,bounce: 0},
        {id: 7,colour: '#73C6FA',solid: 0,gravity: {x: 0,y:0.1},script: 'change_colour'},
        {id: 8,colour: '#FADF73',solid: 0,script: 'next_level'},
        {id: 9,colour: '#C93232',solid: 0,script: 'death'},
        {id: 10,colour: '#555',solid: 1},
        {id: 11,colour: '#0FF',solid: 0,script: 'unlock'},
        {id: 12,colour: '#E373FA',solid: 1,bounce: 5.2},
        {id: 13,colour: '#555',solid: 0,script:'lock'},
        {id: 14,colour: '#73C6FA',solid: 0,vel_limit:{x: 40,y: 30},gravity:{x:0,y:10}}
    ],

    /* An array representing the map tiles. Each number corresponds to a key */
    data: [
        [2, 2, 2, 0, 0, 0, 0, 0, 0, 0],
        [2,14, 2, 0, 0, 1, 1, 1, 1, 1],
        [2, 3, 2, 0, 0, 1, 0, 0, 0, 0],
        [2, 3, 2, 0, 0, 1, 0, 0, 0, 0],
        [2, 3, 2, 0, 0, 1, 1, 1, 1, 1],
        [2, 1, 2, 0, 0, 1, 0, 0, 0, 0],
        [2, 3, 2, 0, 0, 1, 0, 0, 0, 0],
        [2, 3, 2, 0, 0, 1, 0, 0, 0, 0],
        [2, 3, 2, 0, 0, 1, 0, 0, 0, 0],
        [2,14, 2],
        [2, 3, 2, 0, 0, 1, 1, 0, 0, 0],
        [2, 3, 2, 0, 0, 1, 1, 0, 0, 0],
        [2, 3, 2, 0, 0, 0, 0, 0, 0, 0],
        [2, 3, 2, 0, 0, 1, 1, 0, 0, 0],
        [2, 3, 2, 0, 0, 1, 1, 0, 0, 0],
        [2, 3, 2, 0, 0, 1, 1, 0, 0, 0],
        [2, 3, 2, 0, 0, 1, 1, 0, 0, 0],
        [2, 3, 2, 0, 0, 1, 1, 0, 0, 0],
        [2,14, 2, 0, 0, 1, 1, 0, 0, 0],
        [2, 3, 2],
        [2, 3, 2, 0, 0, 0, 0, 0, 0, 0],
        [2, 3, 2, 0, 0, 0, 0, 0, 0, 0],
        [2, 1, 2, 1, 0, 0, 0, 0, 0, 1],
        [2, 3, 2, 1, 1, 0, 0, 0, 1, 1],
        [2, 3, 2, 1, 1, 0, 0, 0, 1, 1],
        [2,14, 2, 1, 0, 1, 0, 1, 0, 1],
        [2, 3, 2, 1, 0, 1, 0, 1, 0, 1],
        [2, 3, 2, 1, 0, 0, 1, 0, 0, 1],
        [2, 3, 2, 1, 0, 0, 0, 0, 0, 1],
        [2, 8, 2],
        [2, 2, 2],
    ],

    /* Default gravity of the map */
    
    gravity: {
        x: 0,
        y: 0.1
    },
    
    /* Velocity limits */

    vel_limit: {
        x: 2,
        y: 16
    },

    /* Movement speed when the key is pressed */
    
    movement_speed: {
        jump: 6,
        left: 0.3,
        right: 0.3
    },
    
    /* The coordinates at which the player spawns and the colour of the player */

    player: {
     
        x: 1,
        y: 1,
        colour: '#FF9900'
    },
    
    /* scripts refered to by the "script" variable in the tile keys */

    scripts: {
        
        next_level: 'game.load_map(map6);',
        death: 'alert("You died!");game.load_map(map);',
        unlock: 'game.current_map.keys[10].solid = 0;game.current_map.keys[10].colour = "#888";'
    }
};

/* Clarity engine */

var Clarity = function () {

    this.alert_errors   = false;
    this.log_info       = true;
    this.tile_size      = 16;
    this.limit_viewport = false;
    this.jump_switch    = 0;
    
    this.viewport = {
        x: 200,
        y: 200
    };
    
    this.camera = {
        x: 0,
        y: 0
    };
    
    this.key = {
        left: false,
        right: false,
        up: false,
        down:false
    };
    
    this.mouse={
    	left:false,
    	right:false
    };
    
    this.player= {
    	
    	
        loc: {
            x: 0,
            y: 0
        },
        
        vel: {
            x: 0,
            y: 0
        },
        
        can_jump: true,
        foot: {
        	change:false,
        	time:1
        }
    };

    window.onkeydown = this.keydown.bind(this);
    window.onkeyup   = this.keyup.bind(this);
};



Clarity.prototype.error = function (message) {

    if (this.alert_errors) alert(message);
    if (this.log_info) console.log(message);
};

Clarity.prototype.log = function (message) {

    if (this.log_info) console.log(message);
};

Clarity.prototype.set_viewport = function (x, y) {

    this.viewport.x = x;
    this.viewport.y = y;
};

Clarity.prototype.keydown = function (e) {

    var _this = this;

    switch (e.keyCode) {
    case 37:
        _this.key.left = true;
        break;
    case 38:
        _this.key.up = true;
        break;
    case 87:
        _this.key.up = true;
        break;
    case 39:
        _this.key.right = true;
        break;
    case 68:
        _this.key.right = true;
        break;
    case 40:
    	this.key.down = true;
    	break;
    case 83:
    	this.key.down = true;
    	break;
    case 65:
    	this.mouse.left=true;
    	break;
    case 0 :
    	this.mouse.left=true;
    	break;
    }
};

Clarity.prototype.keyup = function (e) {

    var _this = this;

    switch (e.keyCode) {
    case 37:
        _this.key.left = false;
        break;
    case 38:
        _this.key.up = false;
        break;
    case 87:
        _this.key.up = false;
        break;
    case 39:
        _this.key.right = false;
        break;
    case 68:
        _this.key.right = false;
        break;
    case 40:
    	this.key.down = false;
    	break;
    case 83:
    	this.key.down = false;
    	break;
    case 65:
    	this.mouse.left=false;
    	break;
    case 0 :
    	this.mouse.left=false;
    	break;
    }
};

var camerax;
var cameray;
var currentMap;
var tilesize;
var playerSprite;
var tileSprite;

Clarity.prototype.update = function () {

    this.update_player();
};

Clarity.prototype.draw = function (context) {

    this.draw_map(context, false);
    this.draw_player(context);
    this.draw_creature(context,false);
};

/* Setup of the engine */

window.requestAnimFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(callback) {
    return window.setTimeout(callback, 1000 / 60);
  };

var canvas = null;
var game = new Clarity();
function initClarityGame(scope){
	canvas=document.getElementById('canvas'),
    ctx = canvas.getContext('2d');
	if(window.innerWidth >= 1032){
		canvas.width = 700;
	}else{
		canvas.width = window.innerWidth-10;
	}
	if(window.innerHeight >= 774){
		canvas.height=350;
	}else{
		canvas.height = window.innerHeight-155;
	}
    game.set_viewport(canvas.width, canvas.height);

    /* Limit the viewport to the confines of the map */
    game.limit_viewport = true;
    
    playerSprite= new initSheetClass();
    tileSprite= new initSheetClass();
    $("#loading").show();
    $.ajax({
        url: './ballGame/img/map/mapJson.json',
        type: 'get',
        async: false,
        success: function(json) {
        	tileSprite.parseAtlasDefinition(json);
        	tileSprite.load("./ballGame/img/map/map.png");
        }
    });
    $.ajax({
        url: './ballGame/img/player/json/playerJson.json',
        type: 'get',
        async: false,
        success: function(json) {
        	playerSprite.parseAtlasDefinition(json);
        	playerSprite.load("./ballGame/img/player/playerImage.png");
        	$("#loading").hide();
        }
    });

	
}
var request;
var Loop = function(scope) {

  try{
	  var back=ctx.createPattern(getBackground(),"repeat");
	  ctx.fillStyle = back;
  }catch (e) {
	  
  }
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  game.scope=scope;

  game.update();
  game.draw(ctx);
  
  request=window.requestAnimFrame(Loop);
};
