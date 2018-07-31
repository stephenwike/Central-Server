var links = [];
var currentlist = [];
var adjacentroads = [];
var elim = [];
function CheckLongestRoad(player){
	//Find all road locations owned by this player
	var playerroads = [];
	var instance = 0;
	var nextnum;
	while(roads.ownedBy.indexOf(player.numb, instance) !== -1){
		nextnum = roads.ownedBy.indexOf(player.numb, instance);
		playerroads.push(nextnum);
		instance = nextnum + 1;
	}
	//myAlert(playerroads);

	//Find all adjacent links for each road////////////////////
	var adjacent = [];
	//links = [];	
	for(var i = 0; i < playerroads.length; i++){
		adjacent = roadAdjacentToRoad(playerroads[i]);
		currentlist.push(playerroads[i]);
		//alert("First: " + currentlist);
		FindNext(player,adjacent);
	}
}
	
//Function to find next adjacent road
function FindNext(player,adjacent,elim){
	//alert("Adjacent: " + adjacent);
	adjacentroads = [];
	for(var j = 0; j < adjacent.length; j++){
		if(roads.ownedBy[adjacent[j]] === player.numb && currentlist.indexOf(adjacent[j]) === -1){
			//alert(elim);
			adjacentroads.push(adjacent[j]);
			//for(var k = 0; k < elim.length; k++){
			//	if(adjacentroads.indexOf(elim[k]) === -1){
			//		alert("Remove " + elim[k] + " from adjacentroads");
			//	}
			//}
		}
	}
	//alert("Adjacent Roads: " + adjacentroads + " Length: " + adjacentroads.length);
	if(adjacentroads.length !== 0){
		for(var j = 0; j < adjacentroads.length; j++){
			currentlist.push(adjacentroads[j]);
			//eliminate other links
			//alert('z');
			//elim = adjacentroads.slice();
			//alert('a');
			//var spot = elim.indexOf(adjacentroads[j]);
			//alert("Spot: " + spot);
			//if(
			//elim.splice(spot,1);
			//alert("Eliminate this options: " + elimlinks);
			//alert("Inbed: " + currentlist);
			var newadjacent = roadAdjacentToRoad(adjacentroads[j]);
			FindNext(player,newadjacent);
		}
	}else{
		//alert("End: " + currentlist);
		currentlist = [];
	}
	//alert("Longest Road: " + num);
	//myAlert("Last Entered has adjacent road: " + adjacentroads);
}

//Function to track the longest link
function LongestLink(templinks){
	if(templinks > links){
		links = templinks;
	}
}

function CheckLargestArmy(player){
	var playerarr = [player1,player2,player3,player4];
	var getrid = playerarr.indexOf(player);
	playerarr.splice(getrid,1);
	if(player.knights > playerarr[0].knights && player.knights > playerarr[1].knights && player.knights > playerarr[2].knights && player.knights >= 3){
		for(var i = 0; i < playerarr.length; i++){
			if(playerarr[i].largestarmy === true){
				playerarr[i].largestarmy = false;
				playerarr[i].victorypoints -= 2;
			}
		}
		//alert(player1.victorypoints + player2.victorypoints + player3.victorypoints + player4.victorypoints);
		myAlert("You have the largest army!")
		player.largestarmy = true;
		player.victorypoints += 2;
		ClearBoards();
		UpdateBoards("only");
	}
}