//Making a player object with initial properties//////////////
var turnArr = [];
var currentturn;
var players;
var comps;
var totalplayers;

function player(numb){
	this.numb = numb;
	this.name = "player" + numb;
	this.inON = false;
	this.isHuman = false;
	this.hand = [];
	this.devcards = [];
	this.devplayed = true;
	this.knights = 0;
	this.victorypoints = 0;
	this.settlements = 5;
	this.cities = 4;
	this.roads = 20;
	this.settlement1 = true;
	this.settlement2 = true;
	this.road1 = true;
	this.road2 = true;
	this.roadbuilding = 0;
	this.portbenefit = [];
	this.largestarmy = false;
	this.longestroad = false;
}
var player1 = new player(1);
var player2 = new player(2);
var player3 = new player(3);
var player4 = new player(4);

//AREA FOR PLAYER CHEATS////////////////////////////////////
//player2.devcards.push("yearofplenty","knight");//FAKE CODE REMOVE WHEN DONE!!!!!!!!!!!!
//player1.devcards.push("knight");
//player3.devcards.push("roadbuilding","yearofplenty","knight");
//player4.devcards.push("monopoly","chapel");
//player1.hand.push("brick","brick","brick","lumber","lumber","lumber");
//player2.hand.push("brick","brick","brick","lumber","lumber","lumber");
//player3.hand.push("brick","brick","brick","lumber","lumber","lumber");
//player4.hand.push("brick","brick","brick","lumber","lumber","lumber");

//Function to get user input/////////////////////////////////
function GetInput(){
	players = document.getElementById("howmanyplayers").value;
	comps = document.getElementById("howmanycomputers").value;
	totalplayers = parseInt(players) + parseInt(comps);
}

//Function to set the players////////////////////////////////
function SetPlayerBoards(){
	//Initialize player boards
	var loc = document.getElementById("maincontent");
	for (var i = 1; i <= totalplayers; i++){
		var img = document.createElement("IMG");
		img.src = "images/p" + i + "tag.png";
		if(i === 1){
			img.setAttribute("style", "position:fixed;z-index:10;top:0;left:0;");
			img.addEventListener("click", function(){return Trade('domestictrade.html');});
			player1.isON = true;
		}else if(i === 2){
			img.setAttribute("style", "position:fixed;z-index:10;top:0;right:0;");
			img.addEventListener("click", function(){return Trade('domestictrade.html');});
			player2.isON = true;
		}else if(i === 3){
			img.setAttribute("style", "position:fixed;z-index:10;bottom:0;left:0;");
			img.addEventListener("click", function(){return Trade('domestictrade.html');});
			player3.isON = true;
		}else if(i === 4){
			img.setAttribute("style", "position:fixed;z-index:10;bottom:0;right:0;");
			img.addEventListener("click", function(){return Trade('domestictrade.html');});
			player4.isON = true;
		}else{
			myAlert("Critical Game Error: players.js - SetPlayerBoards()");	
		}
		loc.appendChild(img);
	}
}

//Find out whos turn is first////////////////////////////////REWRITE THIS!!!!
function WhoStarts(){
	var roll = Math.ceil(Math.random()*totalplayers);
	if(totalplayers === 4){
		if(roll === 1){
			myAlert("Player 1 goes first. Place 1st settlement and attach 1 road.");
			turnArr = [1,2,3,4,4,3,2,1,1,2,3,4];
		}else if(roll == 2){
			myAlert("Player 2 goes first. Place 1st settlement and attach 1 road.");
			turnArr = [2,3,4,1,1,4,3,2,2,3,4,1];
		}else if(roll == 3){
			myAlert("Player 3 goes first. Place 1st settlement and attach 1 road.");
			turnArr = [3,4,1,2,2,1,4,3,3,4,1,2];
		}else{
			myAlert("Player 4 goes first. Place 1st settlement and attach 1 road.");
			turnArr = [4,1,2,3,3,2,1,4,4,1,2,3];
		}
	}
	if(totalplayers === 3){
		if(roll === 1){
			myAlert("Player 1 goes first. Place 1st settlement and attach 1 road.");
			turnArr = [1,2,3,3,2,1,1,2,3];
		}else if(roll == 2){
			myAlert("Player 2 goes first. Place 1st settlement and attach 1 road.");
			turnArr = [2,3,1,1,3,2,2,3,1];
		}else{
			myAlert("Player 3 goes first. Place 1st settlement and attach 1 road.");
			turnArr = [3,1,2,2,1,3,3,1,2];
		}
	}
	if(totalplayers === 2){
		if(roll === 1){
			myAlert("Player 1 goes first. Place 1st settlement and attach 1 road.");
			turnArr = [1,2,2,1,1,2];
		}else{
			myAlert("Player 2 goes first. Place 1st settlement and attach 1 road.");
			turnArr = [2,1,1,2,2,1];
		}
	}
}

function WhoTurn(num){
	if (num === 1){
		return 	player1;
	}else if (num === 2){
		return 	player2;
	}else if (num === 3){
		return 	player3;
	}else{
		return player4;	
	}
}

