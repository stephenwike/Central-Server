var roads = new Object();
roads.yloc = [48.5,0,48.5,145.5,97,145.5,145.5,97,145.5,242.5,194,242.5,242.5,194,242.5,242.5,194,242.5,339.5,339.5,291,339.5,339.5,291,339.5,339.5,436.5,388,436.5,436.5,388,436.5,436.5,388,436.5,533.5,533.5,485,533.5,533.5,485,533.5,533.5,630.5,582,630.5,630.5,582,630.5,630.5,582,630.5,727.5,727.5,679,727.5,727.5,679,727.5,727.5,776,824.5,824.5,776,824.5,824.5,776,873,921.5,921.5,873,970];
roads.xloc = [364,448,532,196,280,364,532,616,700,28,112,196,364,448,532,700,784,868,28,196,280,364,532,616,700,868,28,112,196,364,448,532,700,784,868,28,196,280,364,532,616,700,868,28,112,196,364,448,532,700,784,868,28,196,280,364,532,616,700,868,112,196,364,448,532,700,784,280,364,532,616,448];
roads.rot = [-60,0,60,-60,0,60,-60,0,60,-60,0,60,-60,0,60,-60,0,60,60,-60,0,60,-60,0,60,-60,-60,0,60,-60,0,60,-60,0,60,60,-60,0,60,-60,0,60,-60,-60,0,60,-60,0,60,-60,0,60,60,-60,0,60,-60,0,60,-60,0,60,-60,0,60,-60,0,0,60,-60,0,0];
roads.canBuild = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
roads.ownedBy = ["blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank"];

function roadPlaced(player){
	player.roads -= 1;
}

function roadclick(){
	var turn = WhoTurn(currentturn);
	var adjacentcities = testforCity(this.alt);
	var adjacentroads = testforRoad(this.alt);
	if(adjacentcities === true || adjacentroads === true){
		if(turn.road1 === true){
			roadPlaced(turn);
			roads.ownedBy[this.alt] = turn.numb;
			roads.canBuild[this.alt] = false;
			var adjacentroads = roadAdjacentToRoad(this.alt);
			for (var i = 0; i < adjacentroads.length; i++){
				roads.canBuild[adjacentroads[i]] = true;
			}
			turn.road1 = false;
		}else if(turn.road2 === true && turncount > totalplayers){
			roadPlaced(turn);
			roads.ownedBy[this.alt] = turn.numb;
			roads.canBuild[this.alt] = false;
			var adjacentroads = roadAdjacentToRoad(this.alt);
			for (var i = 0; i < adjacentroads.length; i++){
				roads.canBuild[adjacentroads[i]] = true;
			}
			turn.road2 = false;
		}else if(turn.roadbuilding > 0){
			roadPlaced(turn);
			roads.ownedBy[this.alt] = turn.numb;
			roads.canBuild[this.alt] = false;
			var adjacentroads = roadAdjacentToRoad(this.alt);
			for (var i = 0; i < adjacentroads.length; i++){
				roads.canBuild[adjacentroads[i]] = true;
			}
			turn.roadbuilding--;
		}else if(turn.roads > 0){
			var testpayment = paymentRoad();
			if(testpayment === true){
				roadPlaced(turn);
				roads.ownedBy[this.alt] = turn.numb;
				roads.canBuild[this.alt] = false;
				var adjacentroads = roadAdjacentToRoad(this.alt);
				for (var i = 0; i < adjacentroads.length; i++){
					roads.canBuild[adjacentroads[i]] = true;
				}
			}
		}else{
			myAlert("You don't have any roads to place");
		}
	}else{
		myAlert("Roads must be adjacent your settlement or road.");
	}
	buildRoads();
	CheckLongestRoad(turn);
	ClearBoards();
	UpdateBoards("only");
}

function buildRoads(){
	var loc = document.getElementById("maincontent");
	if (document.getElementById("roaddiv") !== null){
		document.getElementById("maincontent").removeChild(document.getElementById("roaddiv"));
	}
	var div = document.createElement("DIV");
	div.id = "roaddiv";
	for(var i = 0; i < 72; i++){
		if(roads.ownedBy[i] !== "blank"){
			var img = document.createElement("IMG");
			img.alt = [i];
			img.src = "images/p"+roads.ownedBy[i]+"road.png";
			img.setAttribute("style", "position:absolute;z-index:4;top:\
			"+(roads.yloc[i]-7)+"px;left:"+(roads.xloc[i]-56)+"px;");
			img.style.WebkitTransform = "rotate("+roads.rot[i]+"deg)";
			img.style.msTransform = "rotate("+roads.rot[i]+"deg)";
			img.style.transform = "rotate("+roads.rot[i]+"deg)";
			div.appendChild(img);
		}else if(roads.canBuild[i] === true){
			var img = document.createElement("IMG");
			img.alt = [i];
			img.src = "images/roadblank.png";
			img.setAttribute("style", "position:absolute;z-index:4;top:\
			"+(roads.yloc[i]-7)+"px;left:"+(roads.xloc[i]-56)+"px;");
			img.style.WebkitTransform = "rotate("+roads.rot[i]+"deg)";
			img.style.msTransform = "rotate("+roads.rot[i]+"deg)";
			img.style.transform = "rotate("+roads.rot[i]+"deg)";
			img.addEventListener("click", roadclick);
			img.addEventListener("mouseover", function(){this.src = "images/road.png"});
			img.addEventListener("mouseout", function(){this.src = "images/roadblank.png"});
			div.appendChild(img);
		}
	}
	loc.appendChild(div);
}

function testforCity(alt){
	var settles = settlementAdjacentToRoad(alt);
	for(var i = 0; i < 2; i++){
		if(spaces.isSettledby[settles[i]] === currentturn){
			return true;
		}
	}
	return false;
}

function testforRoad(alt){
	var roadnext = roadAdjacentToRoad(alt);
	for(var i = 0; i < roadnext.length; i++){
		if(roads.ownedBy[roadnext[i]] === currentturn){
			return true;
		}
	}
	return false;
}