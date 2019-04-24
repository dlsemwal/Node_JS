var http = require("http")



/* to create server
http.createServer(callBack Function).listen(portNo.)
		this callBack function is excuted every time when server get request
		after creating server this method  will no response
		to make a response 
			console.log(thisserver is running on ipAddress:portNo.
			to check ip address give 'ipconfig' command on cmd.
*/

/* createServer(callBack Fn) is a inbuilt method in instance of http module
	request is an object of request of client and 
		response is an object of response created by server
 */ 
http.createServer( function(request, response) {
	// url is a module is used to get various information and perform operation in a url
	
	
	var url = require("url")
	
	// parse method chatagerize all information in a given url and return an object of them
	// which contains 'pathname' property. this property contains the pathname of that url.
	
	var pathname = url.parse(request.url).pathname
	
	if (pathname === '/employees' ) {
		console.log(request.method)
	}
	else {
		// response.writeHead() method write head for response
		response.writeHead(404, {)
	}
	
}).listen(3000)
  