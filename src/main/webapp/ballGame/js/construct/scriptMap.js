function death(keyMap){
	this.creaturesReset==true
	return "alert('You died!');game.load_map("+keyMap+");";
}

function generateMap(wallId,size,floor){
	var map=Array();
	for (var y = 0; y < 30; y++) {
		var repeat=Array();
		repeat.push(wallId);
		for (var x = 0; x < size-2; x++) {
			repeat.push(0);
		}
		repeat.push(wallId);
		map.push(repeat);
		repeat=null;
	}
	var repeat=Array();
	for (var x = 0; x < size; x++) {
		repeat.push(floor);
	}
	map.push(repeat);
	return map;
}

function repeatKey(keyMap,n){
	var repeat='';
	for (var x = 0; x < n-1; x++) {
		repeat=repeat.concat(keyMap+', ');
	}
	repeat=repeat.concat(keyMap);
	return eval(repeat);
}

function floor(keyMap,n){
	var repeat=[];
	for (var x = 0; x < n; x++) {
		repeat.push(keyMap)
	}
	return repeat;
}

function nextLevel(map){
	Clarity.prototype.load_map(map);
}

function resetTransform(){
	return "ctx.setTransform(1, 0, 0, 1, 0, 0);";
}

function transform(){
	return "ctx.rotate( (Math.PI / 180) * 1);ctx.rotate( (Math.PI / 180) * 1);";
}

function changeColour(keyMap,color){
	return "currentMap.keys['"+keyMap+"'].colour = '"+color+"';";
}

function unlock(keyMap){
	return "currentMap.keys['"+keyMap+"'].solid = 0;currentMap.keys['"+keyMap+"'].colour = 'Transparent';";
}

function lock(keyMap,color){
	return "currentMap.keys['"+keyMap+"'].solid = 1;currentMap.keys['"+keyMap+"'].colour = '"+color+"';";
}