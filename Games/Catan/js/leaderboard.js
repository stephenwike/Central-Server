//Function to update player leaderboards////////////////////////
function UpdateBoards(text){
	//Update player 1//////////
		//VP
		var loc = document.getElementById("maincontent");
		var stardiv1 = document.createElement("DIV");
		stardiv1.id = "stardiv1";
		for(var i = 0; i < 5; i++){
			var img = document.createElement("IMG");
			if(i != player1.victorypoints && i < player1.victorypoints){
				img.src = "images/staron.png";
				img.setAttribute("style", "position:fixed;z-index:10;top:5px;left:"+(220+25*(i))+"px");
			}else{
				img.src = "images/staroff.png";
				img.setAttribute("style", "position:fixed;z-index:10;top:5px;left:"+(220+25*(i))+"px");	
			}
		stardiv1.appendChild(img);
		}
		for(var i = 5; i < 10; i++){
			var img = document.createElement("IMG");
			if(i != player1.victorypoints && i < player1.victorypoints){
				img.src = "images/staron.png";
				img.setAttribute("style", "position:fixed;z-index:10;top:25px;left:"+(220+25*(i-5))+"px;");
			}else{
				img.src = "images/staroff.png";
				img.setAttribute("style", "position:fixed;z-index:10;top:25px;left:"+(220+25*(i-5))+"px");	
			}
		stardiv1.appendChild(img);	
		}
		loc.appendChild(stardiv1);
		//SUPPLIES
		var div1 = document.createElement("DIV");
		div1.id = "p1supplies";
		var rtext = document.createElement("TEXT");
		var rtextnode = document.createTextNode(player1.roads);
		rtext.setAttribute("style", "position:fixed;z-index:10;top:55px;left:60px;");
		rtext.appendChild(rtextnode);
		div1.appendChild(rtext);
		var stext = document.createElement("TEXT");
		var stextnode = document.createTextNode(player1.settlements);
		stext.setAttribute("style", "position:fixed;z-index:10;top:90px;left:60px;");
		stext.appendChild(stextnode);
		div1.appendChild(stext);
		var ctext = document.createElement("TEXT");
		var ctextnode = document.createTextNode(player1.cities);
		ctext.setAttribute("style", "position:fixed;z-index:10;top:125px;left:60px;");
		ctext.appendChild(ctextnode);
		div1.appendChild(ctext);
		loc.appendChild(div1);
		//CARDS
		var divc1 = document.createElement("DIV");
		divc1.id = "p1cards";
		for(var i = 0; i < player1.hand.length; i++){
			var img = document.createElement("IMG");
			img.src = "images/rescard.png";
			img.addEventListener("click", function(){myHand(player1.hand,'card');});
			img.setAttribute("style", "position:fixed;z-index:10;top:62px;left:"+(6*i+110)+"px;");
			divc1.appendChild(img);
		}
		for(var i = 0; i < player1.devcards.length; i++){
			var img = document.createElement("IMG");
			img.src = "images/devcard.png";
			img.addEventListener("click", function(){myHand(player1.devcards,'dev',true,"player1");});
			img.setAttribute("style", "position:fixed;z-index:10;top:62px;left:"+(6*i+260)+"px;");
			divc1.appendChild(img);
		}
		loc.appendChild(divc1);
		
		//Update player 2//////////
		//VP
		var stardiv2 = document.createElement("DIV");
		stardiv2.id = "stardiv2";
		for(var i = 0; i < 5; i++){
			var img = document.createElement("IMG");
			if(i != player2.victorypoints && i < player2.victorypoints){
				img.src = "images/staron.png";
				img.setAttribute("style", "position:fixed;z-index:10;top:5px;right:"+(220+25*(i))+"px");
			}else{
				img.src = "images/staroff.png";
				img.setAttribute("style", "position:fixed;z-index:10;top:5px;right:"+(220+25*(i))+"px");	
			}
		stardiv2.appendChild(img);
		}
		for(var i = 5; i < 10; i++){
			var img = document.createElement("IMG");
			if(i != player2.victorypoints && i < player2.victorypoints){
				img.src = "images/staron.png";
				img.setAttribute("style", "position:fixed;z-index:10;top:25px;right:"+(220+25*(i-5))+"px;");
			}else{
				img.src = "images/staroff.png";
				img.setAttribute("style", "position:fixed;z-index:10;top:25px;right:"+(220+25*(i-5))+"px");	
			}
		stardiv2.appendChild(img);
		}
		loc.appendChild(stardiv2);
		//SUPPLIES
		var div2 = document.createElement("DIV");
		div2.id = "p2supplies";
		var rtext = document.createElement("TEXT");
		var rtextnode = document.createTextNode(player2.roads);
		rtext.setAttribute("style", "position:fixed;z-index:10;top:55px;right:60px;");
		rtext.appendChild(rtextnode);
		div2.appendChild(rtext);
		var stext = document.createElement("TEXT");
		var stextnode = document.createTextNode(player2.settlements);
		stext.setAttribute("style", "position:fixed;z-index:10;top:90px;right:60px;");
		stext.appendChild(stextnode);
		div2.appendChild(stext);
		var ctext = document.createElement("TEXT");
		var ctextnode = document.createTextNode(player2.cities);
		ctext.setAttribute("style", "position:fixed;z-index:10;top:125px;right:60px;");
		ctext.appendChild(ctextnode);
		div2.appendChild(ctext);
		loc.appendChild(div2);
		//CARDS
		var divc2 = document.createElement("DIV");
		divc2.id = "p2cards";
		for(var i = 0; i < player2.hand.length; i++){
			var img = document.createElement("IMG");
			img.src = "images/rescard.png";
			img.addEventListener("click", function(){myHand(player2.hand,'card');});
			img.setAttribute("style", "position:fixed;z-index:10;top:62px;right:"+(6*i+260)+"px;");
			divc2.appendChild(img);
		}
		for(var i = 0; i < player2.devcards.length; i++){
			var img = document.createElement("IMG");
			img.src = "images/devcard.png";
			img.addEventListener("click", function(){myHand(player2.devcards,'dev',true,"player2");});
			img.setAttribute("style", "position:fixed;z-index:10;top:62px;right:"+(6*i+110)+"px;");
			divc2.appendChild(img);
		}
		loc.appendChild(divc2);
		
		//Update player 3//////////
		//VP
		if(player3.isON === true){
			var stardiv3 = document.createElement("DIV");
			stardiv3.id = "stardiv3";
			var loc = document.getElementById("maincontent");
			for(var i = 0; i < 5; i++){
				var img = document.createElement("IMG");
				if(i != player3.victorypoints && i < player3.victorypoints){
					img.src = "images/staron.png";
					img.setAttribute("style", "position:fixed;z-index:10;bottom:5px;left:"+(220+25*(i))+"px");
				}else{
					img.src = "images/staroff.png";
					img.setAttribute("style", "position:fixed;z-index:10;bottom:5px;left:"+(220+25*(i))+"px");	
				}
			stardiv3.appendChild(img);
			}
			for(var i = 5; i < 10; i++){
				var img = document.createElement("IMG");
				if(i != player3.victorypoints && i < player3.victorypoints){
					img.src = "images/staron.png";
					img.setAttribute("style", "position:fixed;z-index:10;bottom:25px;left:"+(220+25*(i-5))+"px;");
				}else{
					img.src = "images/staroff.png";
					img.setAttribute("style", "position:fixed;z-index:10;bottom:25px;left:"+(220+25*(i-5))+"px");	
				}
			stardiv3.appendChild(img);	
			}
			loc.appendChild(stardiv3);
			//SUPPLIES
			var div3 = document.createElement("DIV");
			div3.id = "p3supplies";
			var rtext = document.createElement("TEXT");
			var rtextnode = document.createTextNode(player3.roads);
			rtext.setAttribute("style", "position:fixed;z-index:10;bottom:125px;left:60px;");
			rtext.appendChild(rtextnode);
			div3.appendChild(rtext);
			var stext = document.createElement("TEXT");
			var stextnode = document.createTextNode(player3.settlements);
			stext.setAttribute("style", "position:fixed;z-index:10;bottom:90px;left:60px;");
			stext.appendChild(stextnode);
			div3.appendChild(stext);
			var ctext = document.createElement("TEXT");
			var ctextnode = document.createTextNode(player3.cities);
			ctext.setAttribute("style", "position:fixed;z-index:10;bottom:55px;left:60px;");
			ctext.appendChild(ctextnode);
			div3.appendChild(ctext);
			loc.appendChild(div3);
			//CARDS
			var divc3 = document.createElement("DIV");
			divc3.id = "p3cards";
			for(var i = 0; i < player3.hand.length; i++){
				var img = document.createElement("IMG");
				img.src = "images/rescard.png";
				img.addEventListener("click", function(){myHand(player3.hand,'card');});
				img.setAttribute("style", "position:fixed;z-index:10;bottom:62px;left:"+(6*i+110)+"px;");
				divc3.appendChild(img);
			}
			for(var i = 0; i < player3.devcards.length; i++){
				var img = document.createElement("IMG");
				img.src = "images/devcard.png";
				img.addEventListener("click", function(){myHand(player3.devcards,'dev',true,"player3");});
				img.setAttribute("style", "position:fixed;z-index:10;bottom:62px;left:"+(6*i+260)+"px;");
				divc3.appendChild(img);
			}
			loc.appendChild(divc3);
		}
		
		//Update player 4//////////
		//VP
		if(player4.isON === true){
			var stardiv4 = document.createElement("DIV");
			stardiv4.id = "stardiv4";
			for(var i = 0; i < 5; i++){
				var img = document.createElement("IMG");
				if(i != player4.victorypoints && i < player4.victorypoints){
					img.src = "images/staron.png";
					img.setAttribute("style", "position:fixed;z-index:10;bottom:5px;right:"+(220+25*(i))+"px");
				}else{
					img.src = "images/staroff.png";
					img.setAttribute("style", "position:fixed;z-index:10;bottom:5px;right:"+(220+25*(i))+"px");	
				}
			stardiv4.appendChild(img);
			}
			for(var i = 5; i < 10; i++){
				var img = document.createElement("IMG");
				if(i != player4.victorypoints && i < player4.victorypoints){
					img.src = "images/staron.png";
					img.setAttribute("style", "position:fixed;z-index:10;bottom:25px;right:"+(220+25*(i-5))+"px;");
				}else{
					img.src = "images/staroff.png";
					img.setAttribute("style", "position:fixed;z-index:10;bottom:25px;right:"+(220+25*(i-5))+"px");	
				}
			stardiv4.appendChild(img);	
			}
			loc.appendChild(stardiv4);
			//SUPPLIES
			var div4 = document.createElement("DIV");
			div4.id = "p4supplies";
			div4.setAttribute("style", "position:fixed;bottom:0;right:0;");
			var rtext = document.createElement("TEXT");
			var rtextnode = document.createTextNode(player4.roads);
			rtext.setAttribute("style", "position:fixed;z-index:10;bottom:125px;right:60px;");
			rtext.appendChild(rtextnode);
			div4.appendChild(rtext);
			var stext = document.createElement("TEXT");
			var stextnode = document.createTextNode(player4.settlements);
			stext.setAttribute("style", "position:fixed;z-index:10;bottom:90px;right:60px;");
			stext.appendChild(stextnode);
			div4.appendChild(stext);
			var ctext = document.createElement("TEXT");
			var ctextnode = document.createTextNode(player4.cities);
			ctext.setAttribute("style", "position:fixed;z-index:10;bottom:55px;right:60px;");
			ctext.appendChild(ctextnode);
			div4.appendChild(ctext);
			loc.appendChild(div4);
			//CARDS
			var divc4 = document.createElement("DIV");
			divc4.id = "p4cards";
			for(var i = 0; i < player4.hand.length; i++){
				var img = document.createElement("IMG");
				img.src = "images/rescard.png";
				img.addEventListener("click", function(){myHand(player4.hand,'card');});
				img.setAttribute("style", "position:fixed;z-index:10;bottom:62px;right:"+(6*i+260)+"px;");
				divc4.appendChild(img);
			}
			for(var i = 0; i < player4.devcards.length; i++){
				var img = document.createElement("IMG");
				img.src = "images/devcard.png";
				img.addEventListener("click", function(){myHand(player4.devcards,'dev',true,"player4");});
				img.setAttribute("style", "position:fixed;z-index:10;bottom:62px;right:"+(6*i+110)+"px;");
				divc4.appendChild(img);
			}
			loc.appendChild(divc4);
		}
	if(text !== "only"){
		TurnBtn();
	}
}

//Function to Clear Leader Board to prepare for update///////
function ClearBoards(){	
	document.getElementById("maincontent").removeChild(document.getElementById("p1cards"));
	document.getElementById("maincontent").removeChild(document.getElementById("p1supplies"));
	document.getElementById("maincontent").removeChild(document.getElementById("stardiv1"));
	document.getElementById("maincontent").removeChild(document.getElementById("p2cards"));
	document.getElementById("maincontent").removeChild(document.getElementById("p2supplies"));
	document.getElementById("maincontent").removeChild(document.getElementById("stardiv2"));
	if(totalplayers > 2){
		document.getElementById("maincontent").removeChild(document.getElementById("p3cards"));
		document.getElementById("maincontent").removeChild(document.getElementById("p3supplies"));
		document.getElementById("maincontent").removeChild(document.getElementById("stardiv3"));
	}
	if(totalplayers > 3){
		document.getElementById("maincontent").removeChild(document.getElementById("p4cards"));
		document.getElementById("maincontent").removeChild(document.getElementById("p4supplies"));
		document.getElementById("maincontent").removeChild(document.getElementById("stardiv4"));
	}
}