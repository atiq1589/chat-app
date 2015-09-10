var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var socket_middle = require('./chat-module/socket');

//mongo
var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var mongoport = process.env.MongoPort || 27017;
var port = process.env.PORT || 4000;
var rootDir = __dirname;


//mongo connection
var url = 'mongodb://localhost:' + mongoport + '/chat-server';
mongoClient.connect(url, function (err, db) {
	assert.equal(null, err);

	console.log("Mongo server connect at port: " + mongoport);
	var cursor = db.collection('user');
	cursor.find({}).toArray(function (err, doc) {
		assert.equal(null, err);
		// if(doc != null){
		// 	console.dir(doc);
		// }
		
	});

	var collection = db.collection('user');
	// Find some documents 
	collection.find({}).toArray(function (err, docs) {
		assert.equal(err, null);
		//assert.equal(2, docs.length);
		console.log("Found the following records");
		console.log(docs);
		//callback(docs);
		CloaseDb(db);
	});
	
});

function CloaseDb(db){
	db.close();
}

app.use(express.static('bower_components'));
app.use(express.static('js'));
app.use(express.static('views'));

app.get('/*', function (req, res) {

	res.sendFile(rootDir + '/index.html');
});


var server = app.listen(port, function () {
	console.log('server running on PORT#' + port);

});

socket_middle(server, process.env.Redis);
