var tile = new Object();
tile.yloc = ["291","194","97","485","388","291","194","679","582","485","388","291","776","679","582","485","873","776","679"];
tile.xloc = ["112","280","448","112","280","448","616","112","280","448","616","784","280","448","616","784","448","616","784"];
tile.types = ["desert","forest1","forest2","forest3","forest4","mountain1","mountain2","mountain3","pasture1","pasture2","pasture3","pasture4","field1","field2","field3","field4","hill1","hill2","hill3"];
tile.number = [2,3,3,4,4,5,5,6,6,8,8,9,9,10,10,11,11,12];
tile.robber = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

//Functions to Randomize tile types, numbers
var tiletemp = [];
for(var i = 0; i < tile.types.length;){
	var rand = Math.floor(Math.random()*tile.types.length);
	tiletemp.push(tile.types[rand]);
	tile.types.splice(rand,1);
}

var numbtemp = [];
for(var i = 0; i < tile.number.length;){
	var rand = Math.floor(Math.random()*tile.number.length);
	numbtemp.push(tile.number[rand]);
	tile.number.splice(rand,1);
}

tile.types = tiletemp;
tile.number = numbtemp;

//Function the places the initial game tiles///////////////
function PlaceTiles(){
	document.getElementById("maincontent").removeChild(document.getElementById("inputplayers"));
	var loc = document.getElementById("maincontent");
	for(var i = 0; i < 19; i++){
		var img = document.createElement("IMG");
		img.src = "images/" + tile.types[i] + ".png";
		img.setAttribute("style", "position:absolute;z-index:2;top:"+(tile.yloc[i]-97)+"px;left:"+(tile.xloc[i]-112)+"px;");
		img.alt = tile.types[i];
		loc.appendChild(img);
	}
	//Places the number tiles///////////////////////
	for(var j = 0; j < 19; j++){
		var img = document.createElement("IMG");
		img.id = "num" + [j];
		if(tile.types[j] !== "desert"){
			img.src = "images/" + tile.number[j] + ".png";
		}else{
			tile.number.splice(j,0,'none');
			img.src = "images/none.png";
		}
			img.setAttribute("style", "position:absolute;z-index:3;top:"+(tile.yloc[j]-35)+"px;left:"+(tile.xloc[j]-35)+"px;");
			img.alt = tile.types[j];
			img.addEventListener('click', ActivateRobber);
			img.addEventListener('mouseover', ShowRobber);
			img.addEventListener('mouseout', HideRobber);
			loc.appendChild(img);
	}
}

//Function that places shores graphic
function PlaceShores(){
	var loc = document.getElementById("maincontent");
	var img = document.createElement("IMG");
	img.src = "images/shores.png";
	img.setAttribute('style', 'position:relative; z-index:1; top: -72px; left: -69px;');
	loc.appendChild(img);
}