var express = require('express');
var path = require('path');
var shell = require('shelljs');
var gc_app = express(); // GAME CENTRAL APP
var an_app = express(); // ANDROID APP
var gc_app_port = 9090;
var an_app_port = 8080;
var gc_client = require('http').Server(gc_app);
var an_client = require('http').Server(an_app);
var gc_io = require('socket.io')(gc_client);
var an_io = require('socket.io')(an_client);

const ROOT = "/var/www/";
const GAME = "GameCentral/";

// Middleware
//gc_app.use(express.static(path.join(ROOT, GAME, 'HOME')));

gc_app.get('/', (req, res) => {
  console.log("Connected");
  //res.send("Welcome to socket");
  res.sendFile(__dirname + '/Games/TestChat/index.html');
  //res.sendFile(path.join(ROOT, GAME, 'HOME/index.html'));
});

gc_io.on('connection', (socket) => {	
  console.log("CONNECTION TO PORT: " + gc_app_port + ", USER: " + socket.id); 
  
  socket.on('disconnect', () => 
  {
	console.log("USER: " + socket.id + " disconnected from PORT: " + gc_app_port); 
  });
});

an_io.on('connection', (socket) => {
  console.log("CONNECTION TO PORT: " + an_app_port + ", USER: " + socket.id); 
  
  socket.on('chat message', (msg) => {
	  console.log(msg);
  });
  socket.on('disconnect', () => 
  {
	console.log("USER: " + socket.id + " disconnected from PORT: " + an_app_port);
  });
});

gc_client.listen(gc_app_port, () => {
  console.log("Listening on port " + gc_app_port);
});

an_client.listen(an_app_port, () => {
  console.log("Listening on port " + an_app_port);
});