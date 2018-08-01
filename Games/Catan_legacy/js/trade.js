var bank = new Object();
bank.tradetype = 'none';
bank.trading = [];
bank.tradeWith = [];

	//Function for Bank trade
function MakeTradeBtn(){
	var loc = document.getElementById("maincontent");
	var img = document.createElement("IMG");
	img.src = "images/trade.png";
	img.setAttribute("style", "position:absolute;z-index:5;top:0px;right:-35px;");
	img.addEventListener("click", function(){
		if(document.getElementById("tradewindow") === null){
			Trade();
		}
	});
	loc.appendChild(img);
}

//Make Main Trade Window
function Trade(){
	resetBank();
	var div = document.createElement("DIV");
	div.id = "tradewindow";
	div.setAttribute("style", "position:absolute; z-index:25; top:50%; left:50%;");
	var div1 = document.createElement("DIV");
	div1.setAttribute("style", "position:relative; z-index:25; background-color:rgba(0,0,0,0.5); width:400px; height:200px; left:-50%; top:-50px; padding:10px;");
	
	//Create Button Images
	if(currentturn !== 1){
		var img1 = document.createElement("IMG");
		img1.src = "images/btnplayer1.png";
		img1.addEventListener('click', function(){
			document.body.removeChild(document.getElementById("tradewindow"));
			bank.tradeWith = [player1, 'Player 1'];
			allTrade('What do you want from Player 1?');	
		});
		img1.setAttribute("style", "position:relative;background-color:#0F0;width:200px;height:100px;");
		div1.appendChild(img1);
	}
	if(currentturn !== 2){
		var img2 = document.createElement("IMG");
		img2.src = "images/btnplayer2.png";
		img2.addEventListener('click', function(){
			document.body.removeChild(document.getElementById("tradewindow"));
			bank.tradeWith = [player2, 'Player 2'];
			allTrade('What do you want from Player 2?');	
		});
		img2.setAttribute("style", "position:relative;background-color:#00F;width:200px;height:100px;");
		div1.appendChild(img2);
	}
		if(currentturn !== 3){
		var img3 = document.createElement("IMG");
		img3.src = "images/btnplayer3.png";
		img3.addEventListener('click', function(){
			document.body.removeChild(document.getElementById("tradewindow"));
			bank.tradeWith = [player3, 'Player 3'];
			allTrade('What do you want from Player 3?');	
		});
		img3.setAttribute("style", "position:relative;background-color:#F0F;width:200px;height:100px;");
		div1.appendChild(img3);
	}
	if(currentturn !== 4){
		var img4 = document.createElement("IMG");
		img4.src = "images/btnplayer4.png";
		img4.addEventListener('click', function(){
			document.body.removeChild(document.getElementById("tradewindow"));
			bank.tradeWith = [player4, 'Player 4'];
			allTrade('What do you want from Player 4?');	
		});
		img4.setAttribute("style", "position:relative;background-color:#F0F;width:200px;height:100px;");
		div1.appendChild(img4);
	}
	
	var img5 = document.createElement("IMG");
	img5.src = "images/btnbank.png";
	img5.addEventListener('click', function(){
		document.body.removeChild(document.getElementById("tradewindow"));
		bank.tradeWith = 'bank';
		allTrade('Bank Trade');	
	});
	img5.setAttribute("style", "position:relative;background-color:#FF0;width:200px;height:100px;");
	div1.appendChild(img5);
	
	//Make a Close Button
	var closebtn = document.createElement("IMG");
	closebtn.src = "images/xbtn.png";
	closebtn.setAttribute("style", "position:absolute;z-index:26;background-color:rgba(0,0,0,0.5);top:-50px;right:0;width:20px;height:20px;padding:10px;");
	closebtn.addEventListener('click', function(){
		document.body.removeChild(document.getElementById("tradewindow"));
		//document.body.removeChild(document.getElementById("playerhand"));	
	});
	
	div1.appendChild(closebtn);
	div.appendChild(div1);
	document.body.appendChild(div);
}

//Make Trade Window ////////////////////////////////////////////////////////////////////
function allTrade(type){
	var turn = WhoTurn(currentturn);
	var loc = document.getElementById("maincontent");
	var div = document.createElement("DIV");
	div.id = "alltrade"
	div.setAttribute("style", "position:absolute; z-index:25; left:50%; top:50%;");
	var div1 = document.createElement("DIV");
	div1.setAttribute("style", "position:relative; z-index:25; background-color:rgba(0,0,0,0.5); left:-50%; top:-50px; padding:10px;");
	
	//Create Trade Label
	var par = document.createElement("P");
	var node = document.createTextNode("Proposed Trade");
	par.setAttribute('style', 'color:#FFF;');
	
	//Create Buttons
	var lumber = document.createElement("IMG");
	var brick = document.createElement("IMG");
	var sheep = document.createElement("IMG");
	var wheat = document.createElement("IMG");
	var ore = document.createElement("IMG");
	
	lumber.src = "images/cardlumber.png";
	lumber.setAttribute("style", "position:relative;width:100px;height:150px;padding:10px;");
	lumber.addEventListener('click', function(){
		removeSelection('lumber',lumber,brick,sheep,wheat,ore);
	});
		
	brick.src = "images/cardbrick.png";
	brick.setAttribute("style", "position:relative;width:100px;height:150px;padding:10px;");
	brick.addEventListener('click', function(){
		removeSelection('brick',brick,lumber,sheep,wheat,ore);
	});
		
	sheep.src = "images/cardsheep.png";
	sheep.setAttribute("style", "position:relative;width:100px;height:150px;padding:10px;");
	sheep.addEventListener('click', function(){
		removeSelection('sheep',sheep,lumber,brick,wheat,ore);
	});
		
	wheat.src = "images/cardwheat.png";
	wheat.setAttribute("style", "position:relative;width:100px;height:150px;padding:10px;");
	wheat.addEventListener('click', function(){
		removeSelection('wheat',wheat,lumber,brick,sheep,ore);
	});
		
	ore.src = "images/cardore.png";
	ore.setAttribute("style", "position:relative;width:100px;height:150px;padding:10px;");
	ore.addEventListener('click', function(){
		removeSelection('ore',ore,brick,lumber,sheep,wheat);
	});
	
	//Create Hand Label
	var parhand = document.createElement("P");
	var nodehand = document.createTextNode("Your Hand");
	parhand.setAttribute('style', 'color:#FFF;');
	
	//Make Close Button
	var closebtn = document.createElement("IMG");
	closebtn.src = "images/xbtn.png";
	closebtn.setAttribute("style", "position:absolute;z-index:26;background-color:rgba(0,0,0,0.5);top:-50px;right:0;width:20px;height:20px;padding:10px;");
	closebtn.addEventListener('click', function(){
		document.body.removeChild(document.getElementById("alltrade"));	
	});
	
	//Make Trade Button
	var tradebtn = document.createElement("IMG");
	tradebtn.src = "images/btntrade.png";
	tradebtn.setAttribute("style", "position:absolute;z-index:26;background-color:rgba(0,0,0,0.5);bottom:0;left:-50%;width:100px;height:30px;padding:10px;");
	tradebtn.addEventListener('click', function(){
		myAlert("Verifying trade conditions...");
		verifyTrade(turn);
		//document.body.removeChild(document.getElementById("alltrade"));
	});
	
	par.appendChild(node);
	div1.appendChild(par);
	div.appendChild(div1);
	
	div1.appendChild(lumber);
	div1.appendChild(brick);
	div1.appendChild(sheep);
	div1.appendChild(wheat);
	div1.appendChild(ore);
	div.appendChild(div1);
	div1.appendChild(closebtn);
	div.appendChild(tradebtn);
	
	parhand.appendChild(nodehand);
	div1.appendChild(parhand);
	div.appendChild(div1);
	
	document.body.appendChild(div);
	myHand(turn.hand,'none',false);
}

//Make Remove Selection function////////////////////////////////////
function removeSelection(banktype,changetype,type1,type2,type3,type4){
	bank.tradetype = banktype;
	changetype.removeAttribute("style");
	changetype.setAttribute("style", "position:relative;background-color:#0F0; width:100px;height:150px;padding:10px;");
	type1.removeAttribute("style");
	type1.setAttribute("style", "position:relative; width:100px;height:150px;padding:10px;");
	type2.removeAttribute("style");
	type2.setAttribute("style", "position:relative; width:100px;height:150px;padding:10px;");
	type3.removeAttribute("style");
	type3.setAttribute("style", "position:relative; width:100px;height:150px;padding:10px;");
	type4.removeAttribute("style");
	type4.setAttribute("style", "position:relative; width:100px;height:150px;padding:10px;");
	myAlert(bank.tradetype);
}

//Make Toggle Selection Function /////////////////////////////////////
function toggleSelection(){
	var turn = WhoTurn(currentturn);
	if(bank.trading[this.alt] == null){
		bank.trading[this.alt] = turn.hand[this.alt];
		this.removeAttribute("style");
	this.setAttribute("style", "position:relative; width:100px;height:150px;padding:10px;background-color: #0F0;");
	}else{
		bank.trading[this.alt] = null;
		this.removeAttribute("style");
	this.setAttribute("style", "position:relative; width:100px;height:150px;padding:10px;");		
	}
}

//Fucntion that toggles cards to discard/////////////////////////////
function toggleDiscard(){
	var turn = robber.playerDiscard;
	if(bank.trading[this.alt] == null){
		bank.trading[this.alt] = turn.hand[this.alt];
		this.removeAttribute("style");
	this.setAttribute("style", "position:relative; width:100px;height:150px;padding:10px;background-color: #0F0;");
	}else{
		bank.trading[this.alt] = null;
		this.removeAttribute("style");
	this.setAttribute("style", "position:relative; width:100px;height:150px;padding:10px;");		
	}
	myAlert(bank.trading);
}

function verifyTrade(turn){
	bank.trading.cleanup(undefined);
	if(bank.trading[0] !== undefined && bank.trading[0] !== null && bank.tradetype !== 'none'){
		alert(bank.trading);
		document.body.removeChild(document.getElementById("alltrade"));
		var tempArr = turn.hand.slice();
		if(bank.tradeWith === 'bank'){
			if(turn.portbenefit.indexOf('lumber') !== -1 && bank.trading[0] === 'lumber'){
				var card1 = bank.trading[0];
				var card2 = bank.trading[1];
				if(card1 === card2){
					bankTrade(turn,2);
					myAlert("You're trading 2 lumber to the bank!");
				}
			}else if(turn.portbenefit.indexOf('brick') !== -1 && bank.trading[0] === 'brick'){
				var card1 = bank.trading[0];
				var card2 = bank.trading[1];
				if(card1 === card2){
					bankTrade(turn,2);
					myAlert("You're trading 2 brick to the bank!");
				}
			}else if(turn.portbenefit.indexOf('sheep') !== -1 && bank.trading[0] === 'sheep'){
				var card1 = bank.trading[0];
				var card2 = bank.trading[1];
				if(card1 === card2){
					bankTrade(turn,2);
					myAlert("You're trading 2 sheep to the bank!");
				}
			}else if(turn.portbenefit.indexOf('wheat') !== -1 && bank.trading[0] === 'wheat'){
				var card1 = bank.trading[0];
				var card2 = bank.trading[1];
				if(card1 === card2){
					bankTrade(turn,2);
					myAlert("You're trading 2 wheat to the bank!");
				}
			}else if(turn.portbenefit.indexOf('ore') !== -1 && bank.trading[0] === 'ore'){
				var card1 = bank.trading[0];
				var card2 = bank.trading[1];
				if(card1 === card2){
					bankTrade(turn,2);
					myAlert("You're trading 2 ore to the bank!");
				}
			}else if(turn.portbenefit.indexOf('general') !== -1){
				var card1 = bank.trading[0];
				var card2 = bank.trading[1];
				var card2 = bank.trading[2];
				if(card1 === card2 && card2 === card3){
					bankTrade(turn,3);
					myAlert("You're trading three " + bank.trading[0] + " the bank!");
				}
			}else{
				var card1 = bank.trading[0];
				var card2 = bank.trading[1];
				var card3 = bank.trading[2];
				var card4 = bank.trading[3];
				if(card1 === card2 && card2 === card3 && card3 === card4){
					bankTrade(turn,4);
					myAlert("You're trading three " + bank.trading[0] + " the bank!");
				}
			}
		}else{
			askPlayerforTrade(bank.tradeWith);
		}
	}else{
		myAlert("You must make a valid trade.");	
	}
}

function bankTrade(turn,cardlength){
	for(var i = 0; i < bank.trading.length; i++){
		if(i < cardlength){
		var j = turn.hand.indexOf(bank.trading[i]);
		turn.hand.splice(j,1);
		}
	}
	turn.hand.push(bank.tradetype);
	resetBank();
	ClearBoards();
	UpdateBoards('only');
}

function askPlayerforTrade(player){
	var div = document.createElement("DIV");
	div.id = "alltrade"
	div.setAttribute("style", "position:absolute; z-index:25; left:50%; top:50%;");
	var div1 = document.createElement("DIV");
	div1.setAttribute("style", "position:relative; z-index:25; background-color:rgba(0,0,0,0.5); left:-50%; top:-50px; padding:10px;");
	
	//Create Trade Label
	var parwant = document.createElement("P");
	var nodewant = document.createTextNode("Player " + currentturn + " wants:");
	parwant.setAttribute('style', 'color:#FFF;');
	parwant.appendChild(nodewant);
	div1.appendChild(parwant);
	
	//Create Desired Card
	var imgwant = document.createElement("IMG");
		imgwant.src = "images/card" + bank.tradetype + ".png";
		imgwant.setAttribute("style", "position:relative;width:100px;height:150px;padding:10px;");
		div1.appendChild(imgwant);
	
	//Create Trade Label
	var par = document.createElement("P");
	var node = document.createTextNode("Player " + currentturn + " suggests trading:");
	par.setAttribute('style', 'color:#FFF;');
	par.appendChild(node);
	div1.appendChild(par);
	
	//Create Proposed Trade
	for(var i = 0; i < bank.trading.length; i++){
		var img = document.createElement("IMG");
		img.src = "images/card" + bank.trading[i] + ".png";
		img.setAttribute("style", "position:relative;width:100px;height:150px;padding:10px;");
		div1.appendChild(img);
	}
	
	//Create Hand Label
	var parhand = document.createElement("P");
	var nodehand = document.createTextNode(player[1] + " Hand");
	parhand.setAttribute('style', 'color:#FFF;');
	parhand.appendChild(nodehand);
	div1.appendChild(parhand);
	
	//Make Decline Button
	var declinebtn = document.createElement("IMG");
	declinebtn.src = "images/btndecline.png";
	declinebtn.setAttribute("style", "position:absolute;z-index:26;background-color:rgba(0,0,0,0.5);bottom:0;right:50%;width:100px;height:30px;padding:10px;");
	declinebtn.addEventListener('click', function(){
		document.body.removeChild(document.getElementById("alltrade"));
	});
	
	//Make Accept Button
	var acceptbtn = document.createElement("IMG");
	acceptbtn.src = "images/btnaccept.png";
	acceptbtn.setAttribute("style", "position:absolute;z-index:26;background-color:rgba(0,0,0,0.5);bottom:0;left:-50%;width:100px;height:30px;padding:10px;");
	acceptbtn.addEventListener('click', function(){
		document.body.removeChild(document.getElementById("alltrade"));	
		playerTrade(player[0]);
	});
	
	div.appendChild(declinebtn);
	div.appendChild(acceptbtn);
	div.appendChild(div1);
	
	document.body.appendChild(div);
	myHand(player[0].hand,'none',false);
}

function playerTrade(traded){
	var trader = WhoTurn(currentturn);
	for(var i = 0; i < bank.trading.length; i++){
		myAlert(bank.trading[i]);
		var j = trader.hand.indexOf(bank.trading[i]);
		traded.hand.push(trader.hand[j]);
		trader.hand.splice(j,1);
	}
	var k = traded.hand.indexOf(bank.tradetype);
	trader.hand.push(traded.hand[k]);
	traded.hand.splice(k,1);
	resetBank();
	ClearBoards();
	UpdateBoards('only');
}

function resetBank(){
	bank.tradetype = 'none';
	bank.trading = [];
	bank.tradeWith = [];
}