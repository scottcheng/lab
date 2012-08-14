
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http');

var app = express();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.static(__dirname + '/public'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function(req, res){
  res.render('index', { title: 'Home' });
});

app.get('/about', function(req, res){
  res.render('index', { title: 'About' });
});

app.get('/contact', function(req, res){
  res.render('index', { title: 'Contact' });
});

http.createServer(app).listen(3000);

console.log("Express server listening on port 3000");
