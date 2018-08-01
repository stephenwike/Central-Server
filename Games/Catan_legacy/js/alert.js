function myAlert(string){
	var loc = document.getElementById("alertboard");
	if (document.getElementById("alert") !== null){
		loc.removeChild(document.getElementById("alert"));
	}
	var div = document.createElement("DIV");
	div.id = "alert";
	div.setAttribute('style', "text-align:center;");
	var p = document.createElement("P");
	var node = document.createTextNode(string);
	p.appendChild(node);
	div.appendChild(p);
	loc.appendChild(div);
}