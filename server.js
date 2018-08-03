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
var loginCount = 0;

// Middleware
//tv_app.use(express.static(path.join(ROOT, GAME, 'HOME')));

tv_app.get('/', (req, res) => {
  console.log("Connected from TV");
  res.sendFile(__dirname + '/GameCentral/index.html');
});

an_app.get('/', (req, res) => {
  console.log("Connected from ANDROID");
  res.sendFile(__dirname + '/GameCentral/testApp.html');
});

tv_io.on('connection', (socket) => 
{	
	console.log("TV connected, id: " + socket.id);
	
	// Start listening for android apps
	an_server.listen(an_app_port, () => {
		console.log("Listening on port " + an_app_port);
	});
	
	socket.on('disconnect', (args) =>
	{
		// Close server for android app until tv reconnects
		console.log("TV disconnected, id: " + socket.id);
		//an_server.close();
		//console.log("Closing app server");
	});
	
	// Forward all events to android(s)
	var onevent = socket.onevent;
	socket.onevent = function (packet) 
	{
		var args = packet.data || [];
		onevent.call (this, packet);    // original call
		packet.data = ["*"].concat(args);
		onevent.call(this, packet);      // additional call to catch-all
	};
	
	socket.on('*', (evt, data) =>
	{
		console.log("EVENT " + evt + ", DATA: "); 
		console.log(data);
		if (data["id"] == "*")
		{
			an_io.emit(evt, data);
		}
		else
		{
			an_io.to(data["id"]).emit(evt, data);
		}
	});
});

an_io.on('connection', (socket) => 
{
	console.log("App connected, id: " + socket.id);
	//loginCount++;
	var args = { "id": socket.id };
	tv_io.emit('newconnect', args);
	
	socket.on('disconnect', (args) =>
	{
		loginCount--;
		args = { "count": loginCount };
		console.log("App disconnected, id: " + socket.id);
		tv_io.emit('disconnect', args);
	});
	
	// Forward all events to tv
	var onevent = socket.onevent;
	socket.onevent = function (packet) 
	{
		var args = packet.data || [];
		onevent.call (this, packet);    // original call
		packet.data = ["*"].concat(args);
		onevent.call(this, packet);      // additional call to catch-all
	};
	
	socket.on('*', (evt, data) =>
	{
		console.log("EVENT " + evt + ", DATA: "); 
		console.log(data);
		tv_io.emit(evt, data);
	});
});

tv_server.listen(tv_app_port, () => {
  console.log("Listening on port " + tv_app_port);
});

