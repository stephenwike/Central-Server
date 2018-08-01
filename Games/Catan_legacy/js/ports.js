var port = new Object()
port.yloc = ["41","216","561","851","1026","851","561","216","41"];
port.xloc = ["616","916","916","749","448","151","-19","-19","280"];
port.type = ["ore","wheat","lumber","brick","sheep","general","general","general","general"];

var porttemp = [];
for(var i = 0; i < port.type.length;){
	var rand = Math.floor(Math.random()*port.type.length);
	porttemp.push(port.type[rand]);
	port.type.splice(rand,1);
}

port.type = porttemp;

function SetPorts(){
	var loc = document.getElementById("maincontent");
	for(var i = 0; i < port.type.length; i++){
		var img = document.createElement("IMG");
		img.src = "images/port"+port.type[i]+".png";
		img.setAttribute("style", "position:absolute;z-index:4;top:" + (port.yloc[i]-56) + "px; left:" + (port.xloc[i]-56) + "px;");
	loc.appendChild(img);
	}
}

function IsOnPort(cityspace,turn){
	if(cityspace === '4' || cityspace === '5'){
		turn.portbenefit.push(port.type[0]);
		myAlert("Player " + currentturn + " now owns a/an " + port.type[0] + " maritime trade port.");
	}else if(cityspace === '11' || cityspace === '17'){
		turn.portbenefit.push(port.type[1]);
		myAlert("Player " + currentturn + " now owns a/an " + port.type[1] + " maritime trade port.");
	}else if(cityspace === '29' || cityspace === '35'){
		turn.portbenefit.push(port.type[2]);
		myAlert("Player " + currentturn + " now owns a/an " + port.type[2] + " maritime trade port.");
	}else if(cityspace === '46' || cityspace === '51'){
		turn.portbenefit.push(port.type[3]);
		myAlert("Player " + currentturn + " now owns a/an " + port.type[3] + " maritime trade port.");
	}else if(cityspace === '52' || cityspace === '53'){
		turn.portbenefit.push(port.type[4]);
		myAlert("Player " + currentturn + " now owns a/an " + port.type[4] + " maritime trade port.");
	}else if(cityspace === '43' || cityspace === '48'){
		turn.portbenefit.push(port.type[5]);
		myAlert("Player " + currentturn + " now owns a/an " + port.type[5] + " maritime trade port.");
	}else if(cityspace === '24' || cityspace === '30'){
		turn.portbenefit.push(port.type[6]);
		myAlert("Player " + currentturn + " now owns a/an " + port.type[6] + " maritime trade port.");
	}else if(cityspace === '6' || cityspace === '12'){
		turn.portbenefit.push(port.type[7]);
		myAlert("Player " + currentturn + " now owns a/an " + port.type[7] + " maritime trade port.");
	}else if(cityspace === '2' || cityspace === '3'){
		turn.portbenefit.push(port.type[8]);
		myAlert("Player " + currentturn + " now owns a/an " + port.type[8] + " maritime trade port.");
	}
}