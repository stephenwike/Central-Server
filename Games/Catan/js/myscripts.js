//Function to Start Game and Load Graphics////////////////////////////////////
var turncount = 1;

function StartGame(){
	GetInput();
	PlaceShores();
	PlaceTiles();
	PlaceDevCards();
	MakeTradeBtn()
	SetCitySpaces();
	buildRoads();
	SetPorts();
	SetRobber();
	SetPlayerBoards();
	WhoStarts();
	UpdateBoards();
}

//Game Setup Turns
function Turn(){
	if(robber.isActive === false){
		TurnUpdate();
		document.getElementById("maincontent").removeChild(document.getElementById("turn"));
		ClearBoards();
		UpdateBoards();
	}else{
		myAlert("You must place the robber first.");	
	}
}

function TurnUpdate(){
	if(turncount < totalplayers){
		myAlert("Place 1st settlement and attach 1 road.");
	}else if(turncount < 2*totalplayers){
		myAlert("Place 2nd settlement, attach road, and collect resource cards.");
	}else if(turncount >= 2*totalplayers){
		ResetDevCardUse();
		RollDice();
		if(dietotal === 7){
			robber.isActive = true;
			checkHands();
			myAlert("7 was rolled, move the robber!");
		}
		DrawResCards(dietotal);
	}
	turncount++;
}

//Condensing Functions
Array.prototype.cleanup = function(value) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == value) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};