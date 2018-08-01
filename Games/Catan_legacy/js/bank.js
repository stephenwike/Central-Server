function paymentRoad(){
	var turn = WhoTurn(currentturn);
	turn.hand.sort();
	var card1 = turn.hand.indexOf("brick");
	var card2 = turn.hand.indexOf("lumber");
	if(card1 !== -1 && card2 !== -1){
		turn.hand.splice(card2,1);
		turn.hand.splice(card1,1);
		return true;
	}else{
		myAlert("Roads require 1 brick and 1 lumber.");
		return false;
	}
}

function paymentSettlement(){
	var turn = WhoTurn(currentturn);
	turn.hand.sort();
	var card1 = turn.hand.indexOf("brick");
	var card2 = turn.hand.indexOf("lumber");
	var card3 = turn.hand.indexOf("sheep");
	var card4 = turn.hand.indexOf("wheat");
	if(card1 !== -1 && card2 !== -1 && card3 !== -1 && card4 !== -1){
		turn.hand.splice(card4,1);
		turn.hand.splice(card3,1);
		turn.hand.splice(card2,1);
		turn.hand.splice(card1,1);
		return true;
	}else{
		myAlert("Settlements require 1 brick, 1 lumber, 1 sheep, and 1 wheat.");
		return false;
	}	
}

function paymentCity(){
	var turn = WhoTurn(currentturn);
	turn.hand.sort();
	var card1 = turn.hand.indexOf("ore");
	var card2 = turn.hand.indexOf("ore", card1 + 1);
	var card3 = turn.hand.indexOf("ore", card2 + 1);
	var card4 = turn.hand.indexOf("wheat");
	var card5 = turn.hand.indexOf("wheat", card4 + 1);
	if(card1 !== -1 && card2 !== -1 && card3 !== -1 && card4 !== -1 && card5 !== -1){
		turn.hand.splice(card5,1);
		turn.hand.splice(card4,1);
		turn.hand.splice(card3,1);
		turn.hand.splice(card2,1);
		turn.hand.splice(card1,1);
		return true;
	}else{
		myAlert("Cities require 3 ore and 2 wheat.");
		return false;
	}
}

function paymentDevCard(){
	var turn = WhoTurn(currentturn);
	turn.hand.sort();
	var card1 = turn.hand.indexOf("ore");
	var card2 = turn.hand.indexOf("sheep");
	var card3 = turn.hand.indexOf("wheat");
	if(card1 !== -1 && card2 !== -1 && card3 !== -1){
		turn.hand.splice(card3,1);
		turn.hand.splice(card2,1);
		turn.hand.splice(card1,1);
		return true;
	}else{
		myAlert("Development Cards require 1 sheep, 1 wheat, and 1 ore.");
		return false;	
	}
}