var cards = new Object();
cards.restype = ["brick","lumber","sheep","wheat","ore"];
cards.resquantity = [19,19,19,19,19];
cards.totaldraw = [0,0,0,0,0];
cards.devtype = ["knight","knight","knight","knight","knight","knight","knight","knight","knight","knight","knight","knight","knight","knight","chapel","library","market","palace","university","yearofplenty","yearofplenty","roadbuilding","roadbuilding","monopoly","monopoly"];

//This is a function that puts Resource Cards into users hands
function DrawResCards(num){
	for(var i = 0; i < 19; i++){
		if(tile.number[i] === dietotal && robber.isPlaced !== tile.types[i]){
			var terrain = []
			terrain = terrainAdjacentToSettlement(i)
			for(var j = 0; j < 6; j++){
				if(spaces.isSettledby[terrain[j]] !== "empty"){
					var playerhand = WhoTurn(spaces.isSettledby[terrain[j]]);
					var playcard = findResCard(tile.types[i]);
					playerhand.hand.push(playcard);
					var res = cards.restype.indexOf(playcard);	//<-------Resource Card Tracking///////////
					cards.resquantity[res] -= 1;				//<-------Resource Card Tracking///////////
					if(spaces.hasCity[terrain[j]] === true){
						playerhand.hand.push(playcard);
						cards.resquantity[res] -= 1;			//<-------Resource Card Tracking///////////
					}
					playerhand.hand.sort();
				}
			}
		}else if(robber.isPlaced === tile.types[i]){
			
		}
	}
	//alert(cards.resquantity);
	//WRITE A FUNCTION THE WILL LIMIT THE RESOURCE CARDS AVAILABLE
}

//This is a function the determines which resource to return to user's hand.
function findResCard(str){
	if(str.substr(0,2) == "fo"){
		return "lumber";
	}else if(str.substr(0,2) == "hi"){
		return "brick";
	}else if(str.substr(0,2) == "pa"){
		return "sheep";
	}else if(str.substr(0,2) == "fi"){
		return "wheat";
	}else if(str.substr(0,2) == "mo"){
		return "ore";
	}
}

function DrawDevCard(player){
	var rand = Math.floor(Math.random()*cards.devtype.length);
	player.devcards.push(cards.devtype[rand]);
	cards.devtype.splice(rand,1);
}

function PlaceDevCards(){
	var loc = document.getElementById("maincontent");
	if (document.getElementById("devcards") !== null){
		document.getElementById("maincontent").removeChild(document.getElementById("devcards"));
	}
	var div = document.createElement("DIV");
	div.id = "devcards";
	for(var i = 0; i < cards.devtype.length; i++){
		var img = document.createElement("IMG");
		img.src = "images/buydevcard.png";
		img.setAttribute("style", "position:absolute;z-index:5;top:"+-2*[i]+"px;left:-35px;");
		img.addEventListener("click", buyDevCard);
		div.appendChild(img);
	}
	loc.appendChild(div);
}

function buyDevCard(){
	//ADD AN IF STATEMENT TO TEST FOR AND COLLECT RESOURCE CARDS
		var testpayment = paymentDevCard();
		if (testpayment === true){
			var rand = Math.floor(Math.random()*cards.devtype.length);
			var player = WhoTurn(currentturn);
			player.devcards.push(cards.devtype[rand]);
			cards.devtype.splice(rand,1);
			player.devcards.sort();
			ClearBoards();
			UpdateBoards("only");
			PlaceDevCards();
		}
}

var ismyCards = false;
function myHand(cards,card,closeable,player){
	if(closeable !== false && closeable !== 'discard'){
		var div = document.createElement("DIV");
		div.id = "playerhand";
		div.setAttribute("style", "position:absolute; z-index:25; left:50%; top:50%;");
		var div1 = document.createElement("DIV");
		div1.setAttribute("style", "position:relative; z-index:25; background-color:rgba(0,0,0,0.5); left:-50%; top:-50px; padding:10px;");
		
		//Create Button
		for(var i = 0; i < cards.length; i++){
			var img = document.createElement("IMG");
			img.src = "images/"+card+cards[i]+".png";
			img.id = cards[i];
			img.setAttribute("style", "position:relative;width:100px;height:150px;margin:10px");
			div1.appendChild(img);
			checkIsMyCards(player);
			if(card === 'dev' && ismyCards === true){
				img.addEventListener('click', function(){
					var oldimg = document.getElementById(this.id).src;
					cardid = this.id;
					oldimg = oldimg.replace(".png", "");
					//Remove Hand
					document.body.removeChild(document.getElementById("playerhand"));
					
					//Display selected card
					var div = document.createElement("DIV");
					div.id = "selectedcard";
					div.setAttribute("style", "position:absolute; z-index:25; left:50%; top:50%;");
					var div1 = document.createElement("DIV");
					div1.setAttribute("style", "position:relative; z-index:25; background-color:rgba(0,0,0,0.5); left:-50%; top:-50px; padding:10px;");
					var img = document.createElement("IMG");
					img.src = oldimg + "full.png";
					img.setAttribute("style", "position:relative;margin:10px");
					
					//Create Use Button
					var usebtn = document.createElement("IMG");
					usebtn.src = "images/usecard.png";
					usebtn.setAttribute("style", "position:relative; z-index:30; left:-30%; top:-350px; padding:10px;");
					usebtn.addEventListener('mouseover', function(){
						usebtn.src = "images/usecardhov.png";
					});
					usebtn.addEventListener('mouseout', function(){
						usebtn.src = "images/usecard.png";
					});
					usebtn.addEventListener('click', function(){
						document.body.removeChild(document.getElementById("selectedcard"));
						useDevCard(cardid);
					});
					
					//Create Close Button
					var closebtn = document.createElement("IMG");
					closebtn.src = "images/xbtn.png";
					closebtn.setAttribute("style", "position:absolute;z-index:26;background-color:rgba(0,0,0,0.5);top:-50px;right:0;width:20px;height:20px;padding:10px;");
					closebtn.addEventListener('click', function(){
						document.body.removeChild(document.getElementById("selectedcard"));
					});
						//Bring back hand
					
					div.appendChild(div1);
					div1.appendChild(img);
					div1.appendChild(closebtn);
					div.appendChild(usebtn);
					document.body.appendChild(div);
				});
			}
		}
		
		//Make Close Button
		var closebtn = document.createElement("IMG");
		closebtn.src = "images/xbtn.png";
		closebtn.setAttribute("style", "position:absolute;z-index:26;background-color:rgba(0,0,0,0.5);top:-50px;right:0;width:20px;height:20px;padding:10px;");
		closebtn.addEventListener('click', function(){
			document.body.removeChild(document.getElementById("playerhand"));
		});
		
		div.appendChild(div1);
		div1.appendChild(closebtn);
		document.body.appendChild(div);
	
	}else if(closeable === 'discard'){
		var div = document.createElement("DIV");
		div.id = "discardhand";
		div.setAttribute("style", "position:absolute; z-index:25; left:50%; top:50%;");
		var div1 = document.createElement("DIV");
		div1.setAttribute("style", "position:relative; z-index:25; background-color:rgba(0,0,0,0.5); left:-50%; top:-50px; padding:10px;");
		
		//Create Discard Label
			var pardisc = document.createElement("P");
			var nodedisc = document.createTextNode(card);
			pardisc.setAttribute('style', 'color:#FFF;');
			pardisc.appendChild(nodedisc);
			div1.appendChild(pardisc);
	
		//Create Button
		for(var i = 0; i < cards.length; i++){
			var img = document.createElement("IMG");
			img.src = "images/card"+cards[i]+".png";
			img.alt = [i];
			img.setAttribute("style", "position:relative;width:100px;height:150px;margin:10px");
			img.addEventListener('click', toggleDiscard);
			div1.appendChild(img);
		}
		
		//Make Discard Button
		var discardbtn = document.createElement("IMG");
		discardbtn.src = "images/btndiscard.png";
		discardbtn.setAttribute("style", "position:absolute;z-index:26;background-color:rgba(0,0,0,0.5);bottom:0;right:50%;width:100px;height:30px;padding:10px;");
		discardbtn.addEventListener('click', function(){
			var checkhand = bank.trading.slice();
			checkhand.cleanup();
			if(robber.howmany === checkhand.length){
				for(var i = 0; i < checkhand.length; i++){
					var thiscard = cards.indexOf(checkhand[i]);
					cards.splice(thiscard,1);	
				}
				bank.trading = [];
				ClearBoards();
				UpdateBoards('only');
				checkHands();
				document.body.removeChild(document.getElementById("discardhand"));
			}else if(robber.howmany > checkhand.length){
				myAlert("You must get rid of more cards");	
			}else{
				myAlert("You are trying to get rid of too many cards");	
			}
		});
		
		div.appendChild(discardbtn);
		div.appendChild(div1);
		document.body.appendChild(div);
		
	}else{
		var div = document.createElement("DIV");
		div.setAttribute("style", "position:relative; z-index:25; background-color:rgba(0,0,0,0.5); left:-50%; top:-50px; padding:10px;");
		
		//Create Button
		for(var i = 0; i < cards.length; i++){
			var img = document.createElement("IMG");
			img.src = "images/card"+cards[i]+".png";
			img.alt = [i];
			img.setAttribute("style", "position:relative;width:100px;height:150px;margin:10px");
			img.addEventListener('click', toggleSelection);
			div.appendChild(img);
		}

		document.getElementById("alltrade").appendChild(div);
	}
}

function checkIsMyCards(elem){
	var turn = WhoTurn(currentturn);
	if(turn.name === elem){
		ismyCards = true;
	}else{
		ismyCards = false;	
	}
}