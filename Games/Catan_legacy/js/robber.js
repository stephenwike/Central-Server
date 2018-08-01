var robber = new Object();
robber.isActive = false;
robber.isPlaced = "desert";
robber.playerDiscard;
robber.playernumber;
robber.howmany;
robber.stolen;
robber.noSteal = 0;

//Function that 
function SetRobber(){
	var loc = document.getElementById("maincontent");
	if (document.getElementById("robberdiv") !== null){
		document.getElementById("maincontent").removeChild(document.getElementById("robberdiv"));
	}
	var div = document.createElement("DIV");
	div.id = "robberdiv";
	for(var i = 0; i < 19; i++){
		if(i === tile.desertloc){
			var img = document.createElement("IMG");
			img.src = "images/robber.png";
			img.setAttribute("style", "position:absolute; z-index:3; top:"+(tile.yloc[i]-98)+"px; left:"+(tile.xloc[i]-113)+"px;");
			div.appendChild(img);
		}else if(tile.types[i] === robber.isPlaced){
			var img = document.createElement("IMG");
			img.src = "images/robber.png";
			img.setAttribute("style", "position:absolute; z-index:3; top:"+(tile.yloc[i]-98)+"px; left:"+(tile.xloc[i]-113)+"px;");
			div.appendChild(img);
		}
	}
	loc.appendChild(div);
}

function ActivateRobber(){
	var moveto = (this.alt);
	if(robber.isActive === true && moveto !== robber.isPlaced){
		robber.isPlaced = moveto;
		myAlert("Robber moved to: " + robber.isPlaced);
		SetRobber();
		var hover = this.id;
		var here = hover.substr(3,2);
		stealCard(here);
		robber.isActive = false;
	}
}

var oldsrc;
function ShowRobber(){
	oldsrc = this.src;
	if(robber.isActive === true){
		this.src = "images/robber.png";
		var hover = this.id;
		var here = hover.substr(3,2);
		//if (here == tile.desertloc){
		//	var here = 18;	
		//}
		var elem = document.getElementById(this.id);
		elem.removeAttribute("style");
		elem.setAttribute("style", "position:absolute;z-index:2;top:"+(tile.yloc[parseInt(here)]-97)+"px;left:"+(tile.xloc[parseInt(here)]-112)+"px;");
	}
}

function HideRobber(){
	this.src = oldsrc;
	var hover = this.id;
	var makes = hover.substr(3,2);
	this.removeAttribute("style");
	this.setAttribute("style", "position:absolute;z-index:3;top:"+(tile.yloc[parseInt(makes)]-35)+"px;left:"+(tile.xloc[parseInt(makes)]-35)+"px;");
}

var p1isChecked = false;
var p2isChecked = false;
var p3isChecked = false;
var p4isChecked = false;
function checkHands(){
	if(player1.hand.length > 7 && p1isChecked === false){
		robber.playerDiscard = player1;
		robber.howmany = Math.floor(player1.hand.length/2);
		p1isChecked = true;
		discard(player1.hand,"Player 1 has too many cards and must discard " + robber.howmany + " cards.");
	}else if(player2.hand.length > 7 && p2isChecked === false){
		robber.playerDiscard = player2;
		robber.howmany = Math.floor(player2.hand.length/2);
		p2isChecked = true;
		discard(player2.hand,"Player 2 has too many cards and must discard " + robber.howmany + " cards.");
	}else if(player3.hand.length > 7 && p3isChecked === false){
		robber.playerDiscard = player3;
		robber.howmany = Math.floor(player3.hand.length/2);
		p3isChecked = true;
		discard(player3.hand,"Player 3 has too many cards and must discard " + robber.howmany + " cards.");
	}else if(player4.hand.length > 7 && p4isChecked === false){
		robber.playerDiscard = player4;
		robber.howmany = Math.floor(player4.hand.length/2);
		p4isChecked = true;
		discard(player4.hand,"Player 4 has too many cards and must discard " + robber.howmany + " cards.");
	}else{
		p1isChecked = false;
		p2isChecked = false;
		p3isChecked = false;
		p4isChecked = false;
	}
}

function discard(player,text){
	myHand(player,text,'discard');
}

function stealCard(here){
	var adj = terrainAdjacentToSettlement(here);
	var div = document.createElement("DIV");
	div.id = "stealwindow";
	div.setAttribute("style", "position:absolute; z-index:25; top:50%; left:50%;");
	var div1 = document.createElement("DIV");
	div1.setAttribute("style", "position:relative; z-index:25; background-color:rgba(0,0,0,0.5); width:400px; height:200px; left:-50%; top:-50px; padding:10px;");
	
	//Create Button Images
	for(var i = 0; i < adj.length; i++){
		var spot = parseInt(adj[i]);
		var pushthis = spaces.isSettledby[spot];
		adj[i] = pushthis;
	}
		if(currentturn !== 1 && adj.indexOf(1) !== -1){
			var img1 = document.createElement("IMG");
			img1.src = "images/btnplayer1.png";
			img1.addEventListener('click', function(){
				document.body.removeChild(document.getElementById("stealwindow"));
				Steal(player1,'Steal a card from Player 1');	
			});
			img1.setAttribute("style", "position:relative;background-color:#0F0;width:200px;height:100px;");
			div1.appendChild(img1);
		}else{
			robber.noSteal +=1
		}
		if(currentturn !== 2 && adj.indexOf(2) !== -1){
			var img2 = document.createElement("IMG");
			img2.src = "images/btnplayer2.png";
			img2.addEventListener('click', function(){
				document.body.removeChild(document.getElementById("stealwindow"));
				Steal(player2,'Steal a card from Player 2');	
			});
			img2.setAttribute("style", "position:relative;background-color:#00F;width:200px;height:100px;");
			div1.appendChild(img2);
		}else{
			robber.noSteal +=1
		}
			if(currentturn !== 3 && adj.indexOf(3) !== -1){
			var img3 = document.createElement("IMG");
			img3.src = "images/btnplayer3.png";
			img3.addEventListener('click', function(){
				document.body.removeChild(document.getElementById("stealwindow"));
				Steal(player3,'Steal a card from Player 3');	
			});
			img3.setAttribute("style", "position:relative;background-color:#F0F;width:200px;height:100px;");
			div1.appendChild(img3);
		}else{
			robber.noSteal +=1
		}
		if(currentturn !== 4 && adj.indexOf(4) !== -1){
			var img4 = document.createElement("IMG");
			img4.src = "images/btnplayer4.png";
			img4.addEventListener('click', function(){
				document.body.removeChild(document.getElementById("stealwindow"));
				Steal(player4,'Steal a card from Player 4');	
			});
			img4.setAttribute("style", "position:relative;background-color:#F0F;width:200px;height:100px;");
			div1.appendChild(img4);
		}else{
			robber.noSteal +=1
		}
		
		div.appendChild(div1);
		document.body.appendChild(div);
		if(robber.noSteal === 4){
			document.body.removeChild(document.getElementById("stealwindow"));
			myAlert("There are no adjacent settlements or cities to steal from");
		}
		robber.noSteal = 0;
}

function Steal(player,text){
	
	//shuffle players hand
	var shuffled = [];
	for(var i = 0; i < player.hand.length;){
		var rand = Math.floor(Math.random()*player.hand.length);
		shuffled.push(player.hand[rand]);
		player.hand.splice(rand,1);
	}
	player.hand = shuffled.slice();
	
	//Render Elements
	//var loc = document.getElementById("maincontent");
	var div = document.createElement("DIV");
	div.id = "steal";
	div.setAttribute("style", "position:absolute; z-index:25; left:50%; top:50%;");
	var div1 = document.createElement("DIV");
	div1.setAttribute("style", "position:relative; z-index:25; background-color:rgba(0,0,0,0.5); left:-50%; top:-50px; padding:10px;");
	
	//Create Buttons
	var turn = WhoTurn(currentturn);
	for(var i = 0; i < player.hand.length; i++){
		var img = document.createElement("IMG");
		img.src = "images/card"+player.hand[i]+".png";
		img.id = [i];
		img.setAttribute("style", "position:relative;width:100px;height:150px;margin:10px");
		img.addEventListener('click', function(){
			var takethiscard = this.id;
			robber.stolen = player.hand[this.id];
			turn.hand.push(player.hand[takethiscard]);
			player.hand.splice(takethiscard,1);
			document.body.removeChild(document.getElementById("steal"));
			showStolen();
		});
		div1.appendChild(img);
	}
		
	div.appendChild(div1);
	document.body.appendChild(div);
}

function showStolen(){
	myAlert("You stole 1 " + robber.stolen + ".");
	var div = document.createElement("DIV");
	div.setAttribute("style", "position:absolute; z-index:25; left:50%; top:50%;");
	div.id = "goods";
	var div1 = document.createElement("DIV");
	div1.setAttribute("style", "position:relative; z-index:25; background-color:rgba(0,0,0,0.5); left:-50%; top:-50px; padding:10px;");
		
		//Create Button
	var img = document.createElement("IMG");
	img.src = "images/card"+robber.stolen+".png";
	img.setAttribute("style", "position:relative;width:100px;height:150px;margin:10px");
	div1.appendChild(img);
		
	//Make Close Button
	var closebtn = document.createElement("IMG");
	closebtn.src = "images/xbtn.png";
	closebtn.setAttribute("style", "position:absolute;z-index:26;background-color:rgba(0,0,0,0.5);top:-50px;right:0;width:20px;height:20px;padding:10px;");
	closebtn.addEventListener('click', function(){
		document.body.removeChild(document.getElementById("goods"));
	});
		
	div.appendChild(div1);
	div1.appendChild(closebtn);
	document.body.appendChild(div);
	ClearBoards();
	UpdateBoards('only');
	robber.stolen = null;
}