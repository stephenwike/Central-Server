function useDevCard(type){
	var turn = WhoTurn(currentturn);
	if(type === "knight" && turn.devplayed === false){
		myAlert("Place the Robber.");
		robber.isActive = true;
		p1isChecked = true;
		p1isChecked = true;
		p1isChecked = true;
		p1isChecked = true;
		//turn.devplayed = true;
		turn.knights += 1;
		CheckLargestArmy(turn);
	}else if(type === "yearofplenty" && turn.devplayed === false){
		myAlert("Claim two resource cards.");
		callBank();
		turn.devplayed = true;
	}else if(type === "roadbuilding" && turn.devplayed === false){
		myAlert("Build two more roads.");
		turn.roadbuilding += 2;
		turn.devplayed = true;
	}else if(type === "monopoly" && turn.devplayed === false){
		myAlert("Claim chosen resource from everyone.");
		takeAllCards();
		turn.devplayed = true;
	}else if(type === "chapel" || type === "library" || type === "market" || type === "palace" || type === "university"){
		myAlert("Gain 1 Victory Point");
		turn.victorypoints += 1;
		ClearBoards();
		UpdateBoards("only");
	}else{
		myAlert("You can't use this card now.");
	}
}

//Year Of Plenty Function
yoparray = [];
function callBank(){
		var div = document.createElement("DIV");
		div.id = "yearofplentybank";
		div.setAttribute("style", "position:absolute; z-index:25; left:50%; top:50%;");
		var div1 = document.createElement("DIV");
		div1.setAttribute("style", "position:relative; z-index:25; background-color:rgba(0,0,0,0.5); left:-50%; top:-50px; padding:10px;");
		var cardgrab;
		if(yoparray.length === 0){
			cardgrab = "first";
		}else{
			cardgrab = "second";	
		}
		var p = document.createElement("P");
		var node = document.createTextNode("Select the " + cardgrab + " card");
		p.setAttribute('style', 'color:#FFF;');
		p.appendChild(node);
		div1.appendChild(p);
		
		cardsarray = ["brick","lumber","ore","sheep","wheat"];
		for(var i = 0; i < cardsarray.length; i++){
			var img = document.createElement("IMG");
			img.src = "images/card" + cardsarray[i] + ".png";
			img.id = cardsarray[i];
			img.setAttribute("style", "position:relative;width:100px;height:150px;margin:10px");
			img.addEventListener('click', function(){
				yoparray.push(this.id);
				document.body.removeChild(document.getElementById("yearofplentybank"));
				if(yoparray.length < 2){
					callBank();
				}else{
					revealYOP();	
				}
			});
			div1.appendChild(img);
		}
		
		div.appendChild(div1);
		document.body.appendChild(div);
}

//Reveal Year Of Plenty Cards Function
function revealYOP(){
		var div = document.createElement("DIV");
		div.id = "showYOPcards";
		div.setAttribute("style", "position:absolute; z-index:25; left:50%; top:50%;");
		var div1 = document.createElement("DIV");
		div1.setAttribute("style", "position:relative; z-index:25; background-color:rgba(0,0,0,0.5); left:-50%; top:-50px; padding:10px;");
		
		var p = document.createElement("P");
		var node = document.createTextNode("These cards?");
		p.setAttribute('style', 'color:#FFF;');
		p.appendChild(node);
		div1.appendChild(p);
		
		for(var i = 0; i < yoparray.length; i++){
			var img = document.createElement("IMG");
			img.src = "images/card" + yoparray[i] + ".png";
			img.id = yoparray[i];
			img.setAttribute("style", "position:relative;width:100px;height:150px;margin:10px");
			div1.appendChild(img);
		}

		//Yes button
		var yesimg = document.createElement("IMG");
		yesimg.src = "images/btnyes.png";
		yesimg.setAttribute("style", "position:absolute;z-index:26;background-color:rgba(0,0,0,0.5);bottom:0;left:-50%;width:66px;height:30px;padding:10px;");
		yesimg.addEventListener('click', function(){
			document.body.removeChild(document.getElementById("showYOPcards"));
			var turn = WhoTurn(currentturn);
			for(var i = 0; i < 2; i++){
				turn.hand.push(yoparray[i]);
			}
			UpdateBoards('only');
			yoparray = [];
		});
		
		//No button
		var noimg = document.createElement("IMG");
		noimg.src = "images/btnno.png";
		noimg.setAttribute("style", "position:absolute;z-index:26;background-color:rgba(0,0,0,0.5);bottom:0;right:50%;width:66px;height:30px;padding:10px;");
		noimg.addEventListener('click', function(){
			document.body.removeChild(document.getElementById("showYOPcards"));
			yoparray = [];
		});
		
		div.appendChild(div1);
		div.appendChild(yesimg);
		div.appendChild(noimg);
		document.body.appendChild(div);
}

//Monopoly Card Function
function takeAllCards(){
		var div = document.createElement("DIV");
		div.id = "monopolize";
		div.setAttribute("style", "position:absolute; z-index:25; left:50%; top:50%;");
		var div1 = document.createElement("DIV");
		div1.setAttribute("style", "position:relative; z-index:25; background-color:rgba(0,0,0,0.5); left:-50%; top:-50px; padding:10px;");
		
		var p = document.createElement("P");
		var node = document.createTextNode("Which card would you like to monopolize?");
		p.setAttribute('style', 'color:#FFF;');
		p.appendChild(node);
		div1.appendChild(p);
		
		cardsarray = ["brick","lumber","ore","sheep","wheat"];
		for(var i = 0; i < cardsarray.length; i++){
			var img = document.createElement("IMG");
			img.src = "images/card" + cardsarray[i] + ".png";
			img.id = cardsarray[i];
			img.setAttribute("style", "position:relative;width:100px;height:150px;margin:10px");
			img.addEventListener('click', function(){
				document.body.removeChild(document.getElementById("monopolize"));
				takenCards(this.id);
			});
			div1.appendChild(img);
		}
		
		div.appendChild(div1);
		document.body.appendChild(div);
}

var cardcount = 0;
var monopolycards = [];
function takenCards(card){
	var turn = WhoTurn(currentturn);
	if(player1.hand.indexOf(card) !== -1 && turn.name !== 'player1'){
		var cardloc = player1.hand.indexOf(card);
		player1.hand.splice(cardloc,1);
		cardcount++;
		takenCards(card);
	}else if(player2.hand.indexOf(card) !== -1 && turn.name !== 'player2'){
		var cardloc = player2.hand.indexOf(card);
		player2.hand.splice(cardloc,1);
		cardcount++;
		takenCards(card);
	}else if(player3.hand.indexOf(card) !== -1 && turn.name !== 'player3'){
		var cardloc = player3.hand.indexOf(card);
		player3.hand.splice(cardloc,1);
		cardcount++;
		takenCards(card);
	}else if(player4.hand.indexOf(card) !== -1 && turn.name !== 'player4'){
		var cardloc = player4.hand.indexOf(card);
		player4.hand.splice(cardloc,1);
		cardcount++;
		takenCards(card);
	}else{
		myAlert("You will recieve " + cardcount + " " + card + ".");
		for(var i = 0; i < cardcount; i++){
			turn.hand.push(card);
			monopolycards.push(card);	
		}
		ClearBoards();
		UpdateBoards('only');
		myHand(monopolycards,'card');
		cardcount = 0;
	}
}

//Allows Development Cards to be used again at the start of the next turn.
function ResetDevCardUse(){
	player1.devplayed = false;
	player2.devplayed = false;
	player3.devplayed = false;
	player4.devplayed = false;
}