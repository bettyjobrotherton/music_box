var express = require('express');
var server = express();
var musicBoxRouter = require('./server/routers/music_box.router.js');
var mongoose = require('mongoose');
var mongoURI = process.env.MONGOURI || require('./config.js').mongoURI;

mongoose.connect(mongoURI);

var port = process.env.PORT || 8080;

server.use(express.static(__dirname + '/public'));

server.listen(port, function(){
  console.log('Now listening on port...', port);
});

server.use(musicBoxRouter);
