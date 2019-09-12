require('./get_users');

var key = "API_KEY";
var url = "DATABASE_URL";
var collection = "COLLECTION";

var firebase = require('firebase');

var app = firebase.initializeApp({
	"apiKey": key,
	"databaseURL": url
});

var ref = new firebase.database().ref(collection);

var batch = {};

var itemArray = getUsers();

Object.keys(itemArray).forEach(function(key) {
	var pushId = ref.push().key;
	var itemValue = itemArray[key];
	batch[pushId] = itemValue;
});

ref.update(batch, function onComplete(arg) {
	console.log("complete");
});
