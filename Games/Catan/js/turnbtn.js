function TurnBtn(){
		loc = document.getElementById("maincontent");
		
		//Finds Which Player Button to Render
		var playerx;
		var playery;
		if(turnArr[0] === 1){
			playery = "top";
			playerx = "left";
		}else if(turnArr[0] === 2){
			playery = "top";
			playerx = "right";
		}else if(turnArr[0] === 3){
			playery = "bottom";
			playerx = "left";
		}else if(turnArr[0] === 4){
			playery = "bottom";
			playerx = "right";
		}else{
			alert();	
		}
		//Renders Player Button
		var img = document.createElement("IMG");
		img.src = "images/p"+turnArr[0]+"end.png";
		img.id = "turn";
		img.setAttribute("style", "position:fixed;z-index:10;"+playery+":180px;"+playerx+":30px;");
		img.addEventListener("click", Turn);
		loc.appendChild(img);
		
		//Changes Player Turn
		currentturn = turnArr[0];
		var isturn = turnArr.shift();
		if (turnArr.length === totalplayers - 1){
			turnArr.push(isturn);	
		}
}