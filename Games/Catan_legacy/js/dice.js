var dietotal;

function RollDice(){
	var die1 = Math.ceil(Math.random()*6);
	var die2 = Math.ceil(Math.random()*6);
	dietotal = 0;
	dietotal += die1;
	dietotal += die2;
	myAlert("Roll is: " + dietotal);
	return die1 + die2;
}