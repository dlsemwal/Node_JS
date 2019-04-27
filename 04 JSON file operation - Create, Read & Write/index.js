var express = require('express')
var expressApp = express() 
var fs = require('fs')
// importing database(data.json)
var data = require('./data.json')
	

// Middleware
var bodyParser = require('body-parser')

//using middleware in expressApp to get form data from request
expressApp.use(bodyParser.urlencoded({extended:true}))
// template is a folder which have all html templates which we want to
// show at root-path(/) or after root path (host/templateName.html)


expressApp.use(express.static('template'))

var server = expressApp.listen(8080, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log(`This server is running on Host:- ${host} & Port:- ${port}`)
})

expressApp.post('/post-form', function(request, response) {
	var input = request.body;
	input.id = data.id;
	data.id++
	
	data.task.push(input)
	
	
	fs.writeFile('./data.json', JSON.stringify(data), function (err) {
		if (err) return response.error(500);
		
		// json method to  send response in json
		response.json(input)
	})
	
	
})


expressApp.get('/task-list', function (request, response){
	response.send(data.task)
})