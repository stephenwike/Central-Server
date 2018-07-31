var express = require('express');
var path = require('path');
var shell = require('shelljs');
var gc_app = express(); // GAME CENTRAL APP
var gc_app_port = 9090;
var gc_server = require('http').Server(gc_app);
var gc_io = require('socket.io')(gc_server);

const ROOT = "/var/www/";
const GAME = "GameCentral/";

// Middleware
//gc_app.use(express.static(path.join(ROOT, GAME, 'HOME')));

gc_app.get('/', (req, res) => {
  console.log("Connected");
  res.send("Welcome to socket");
  //res.sendFile(path.join(ROOT, GAME, 'HOME/index.html'));
});

gc_io.on('connection', (socket) => {	

  console.log("CONNECTION IO"); 
  console.log("ID: " + socket.id);
  
  socket.on("RUN_catan", (msg) =>
  {
	console.log("running catan... broadcast load config");
	socket.broadcast.emit("LOADING_config");
	
	var htmlpath = path.join(__dirname, '/Games/Catan/boot.sh');
	console.log("HTML path: " + htmlpath);
	if (shell.exec("xinit " + htmlpath).code !== 0)
	{
		shell.echo('Error: Git commit failed');
		shell.exit(1);
	}
  });
  
  //gc_io.emit('welcome', { hello: "world" });
  //socket.on('buhbye', (data) => {
  //  console.log(data);
  //});
});

gc_io.on('RUN_catan', (client) => {
	console.log("HERE");
	console.log("Client id: " + client.id + " has run catan application.");
});

gc_server.listen(gc_app_port, function() {
  console.log("Listening on port " + gc_app_port);
});

//module.exports = app;
