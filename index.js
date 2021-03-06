var express = require('express');
var http 	= require('http');
var path 	= require('path');			//work with paths
var request = require('request');
var morgan = require('morgan')
var app = express();  
const bodyParser = require('body-parser');
const snsSubscriptionConfirmation = require('aws-sns-subscription-confirmation');


const PORT = process.env.PORT || 5000;


app.set('port', PORT);

//app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
//app.use(express.favicon());


app.use(express.static(__dirname + '/public')); 

//routes
app.use('/*', function(req, res){	    
  res.sendFile('./public/index.html');
});



http
	.createServer(app)
	.listen(app.get('port'), function(){
  		console.log('Bootcards demo app listening on port ' + app.get('port'));
	}
);
