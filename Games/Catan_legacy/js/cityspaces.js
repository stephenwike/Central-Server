var spaces = new Object();
spaces.yloc = ["-25","-25","72","72","72","72","169","169","169","169","169","169","266","266","266","266","266","266","363","363","363","363","363","363","460","460","460","460","460","460","557","557","557","557","557","557","654","654","654","654","654","654","751","751","751","751","751","751","848","848","848","848","945","945"];
spaces.xloc = ["365","477","197","309","533","645","29","141","365","477","701","813","-27","197","309","533","645","869","29","141","365","477","701","813","-27","197","309","533","645","869","29","141","365","477","701","813","-27","197","309","533","645","869","29","141","365","477","701","813","197","309","533","645","365","477"];
spaces.isActive = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
spaces.isSettledby = ["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"];
spaces.hasCity = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

function settlementPlaced(player){
	player.settlements -= 1;
	player.victorypoints += 1;
}

function cityPlaced(player){
	player.cities -= 1;
	player.settlements += 1;
	player.victorypoints += 1;
}

function clicked(){
	var turn = WhoTurn(currentturn);
	if(turn.settlement1 === true){
		settlementPlaced(turn);
		IsOnPort(this.alt,turn);
		spaces.isActive[this.alt] = true;
		var adjacentspaces = settlementAdjacentToSettlement(this.alt);
		for (var i = 0; i < adjacentspaces.length; i++){
			spaces.isActive[adjacentspaces[i]] = true;
		}
		var adjacentroads = roadAdjacentToSettlement(this.alt);
		for (var i = 0; i < adjacentroads.length; i++){
			roads.canBuild[adjacentroads[i]] = true;
		}
		spaces.isSettledby[this.alt] = turn.numb;
		turn.settlement1 = false;	
	}else if(turn.settlement2 === true && turncount > totalplayers){
		var adjacenttile = settlementAdjacentToTerrain(this.alt);
		for(var i = 0; i < adjacenttile.length; i++){
			var playcard = findResCard(tile.types[adjacenttile[i]]);
			if(playcard != null){
				turn.hand.push(playcard);
				var res = cards.restype.indexOf(playcard);	//<-------Resource Card Tracking///////////
				cards.resquantity[res] -= 1;				//<-------Resource Card Tracking///////////
				turn.hand.sort();
			}
		}
		settlementPlaced(turn);
		IsOnPort(this.alt,turn);
		spaces.isActive[this.alt] = true;
		var adjacentspaces = settlementAdjacentToSettlement(this.alt);
		for (var i = 0; i < adjacentspaces.length; i++){
			spaces.isActive[adjacentspaces[i]] = true;
		}
		var adjacentroads = roadAdjacentToSettlement(this.alt);
		for (var i = 0; i < adjacentroads.length; i++){
			roads.canBuild[adjacentroads[i]] = true;
		}
		spaces.isSettledby[this.alt] = turn.numb;
		turn.settlement2 = false;
	}else if(turn.settlements > 0){
		var testpayment = paymentSettlement();
		if(testpayment === true){
			var adjacentspace = roadAdjacentToSettlement(this.alt);
			var throwalert;
			IsOnPort(this.alt,turn);
			for (var i = 0; i < adjacentspace.length; i++){
				if(roads.ownedBy[adjacentspace[i]] == turn.numb){
					settlementPlaced(turn);
					spaces.isActive[this.alt] = true;
					var adjacentspaces = settlementAdjacentToSettlement(this.alt);
					for (var i = 0; i < adjacentspaces.length; i++){
						spaces.isActive[adjacentspaces[i]] = true;
					}
					var adjacentroads = roadAdjacentToSettlement(this.alt);
					for (var i = 0; i < adjacentroads.length; i++){
						roads.canBuild[adjacentroads[i]] = true;
					}
					spaces.isSettledby[this.alt] = turn.numb;
					throwalert = "no";
				}
			}
			if(throwalert !== "no"){
				myAlert("You must build off of one of your roads.");
			}
		}
	}else{
		myAlert("You don't have any settlements to place");
	}
	SetCitySpaces();
	buildRoads();
	ClearBoards();
	UpdateBoards("only");
}

function secondclicked(){
	var turn = WhoTurn(currentturn);
		if(turn.cities > 0){
			var testpayment = paymentCity();
			if(testpayment === true){
				if(spaces.isSettledby[this.alt] === currentturn){
					cityPlaced(turn);
					spaces.hasCity[this.alt] = true;
					SetCitySpaces();
					ClearBoards();
					UpdateBoards("only");
				}else{
					myAlert("This isn't your settlement.");
				}
			}
		}else{
			myAlert("You don't have any cities to place.");
		}
}

function mousecome(){
	this.src="images/smallhex.png";
}

function mousego(){
	this.src="images/empty.png";	
}

function SetCitySpaces(){
	var loc = document.getElementById("maincontent");
	if (document.getElementById("spaces") !== null){
		document.getElementById("maincontent").removeChild(document.getElementById("spaces"));
	}
	var div = document.createElement("DIV");
	div.id = "spaces";
	for(var i = 0; i < 54; i++){
		if(spaces.isSettledby[i] != "empty"){
			var img = document.createElement("IMG");
			if(spaces.hasCity[i] === true){
				img.src="images/p"+spaces.isSettledby[i]+"city.png";
			}else{
				img.src="images/p"+spaces.isSettledby[i]+"settlement.png";
				img.addEventListener("click", secondclicked);
			}
			img.setAttribute("style", "position:absolute;z-index:5;top:"+(spaces.yloc[i]-5)+"px;left:"+(spaces.xloc[i])+"px;");
			img.alt = [i];
			div.appendChild(img);
			loc.appendChild(div);
		}else if(spaces.isActive[i] === true){
			continue;
		}else{
			var img = document.createElement("IMG");
			img.src = "images/"+spaces.isSettledby[i]+".png";
			img.setAttribute("style", "position:absolute;z-index:5;top:"+(spaces.yloc[i]-5)+"px;left:"+(spaces.xloc[i])+"px;");
			img.alt = [i];
			img.addEventListener("click", clicked);			
			img.addEventListener("mouseover", mousecome);
			img.addEventListener("mouseout", mousego);
			div.appendChild(img);
			loc.appendChild(div);
		}
	}	
}

