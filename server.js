var express = require('express');
var path = require('path');
//const hbs = require('express-handlebars');
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
gc_io.on('connection', (client) => { 
  console.log("CONNECTION IO"); 

  gc_io.emit('welcome', { hello: "world" });
  //socket.on('buhbye', (data) => {
  //  console.log(data);
  //});
});

gc_server.listen(gc_app_port, function() {
  console.log("Listening on port " + gc_app_port);
});

//module.exports = app;
