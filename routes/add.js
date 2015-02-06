var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	console.log(data); 
	//retrieve the variables from the user input
	var name = req.query.name; 
	var comments = req.query.description; 
	var image = "http://lorempixel.com/400/400/people"
	//Fill out new friend template
	var friend = {
		"name": name,
		"description": comments,
		"imageURL": image 
	};
	//Add a new friend to the database
	data["friends"].push(friend); 
	res.render('add'); 
 }