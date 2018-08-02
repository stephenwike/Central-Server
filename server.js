var express = require('express');
var path = require('path');
var shell = require('shelljs');
var tv_app = express(); // GAME CENTRAL APP
var an_app = express(); // ANDROID APP
var tv_app_port = 9090;
var an_app_port = 7070;
var tv_server = require('http').Server(tv_app);
var an_server = require('http').Server(an_app);
var tv_io = require('socket.io')(tv_server);
var an_io = require('socket.io')(an_server);

var tv_socket;

const ROOT = "/var/www/";
const GAME = "GameCentral/";

// Middleware
//tv_app.use(express.static(path.join(ROOT, GAME, 'HOME')));

tv_app.get('/', (req, res) => {
  console.log("Connected from TV");
  res.sendFile(__dirname + '/Games/TestChat/index.html');
});

an_app.get('/', (req, res) => {
  console.log("Connected from ANDROID");
});

tv_io.on('connection', (socket) => {
  console.log("CONNECTION TO PORT: " + tv_app_port + ", USER: " + socket.id); 
  tv_socket = socket;
  console.log("tv socket: " + socket);
  
  socket.on('disconnect', () => 
  {
	console.log("USER: " + socket.id + " disconnected from PORT: " + tv_app_port); 
  });
});

an_io.on('connection', (socket) => {
  console.log("CONNECTION TO PORT: " + an_app_port + ", USER: " + socket.id); 
  
  socket.on('chat message', (msg) => {
	  console.log(msg);
	  tv_io.emit('chat message', msg);
  });
  
  socket.on('disconnect', () => 
  {
	console.log("USER: " + socket.id + " disconnected from PORT: " + an_app_port);
  });
});

tv_server.listen(tv_app_port, () => {
  console.log("Listening on port " + tv_app_port);
});

an_server.listen(an_app_port, () => {
  console.log("Listening on port " + an_app_port);
});