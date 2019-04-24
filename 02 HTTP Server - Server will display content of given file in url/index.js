var employees = []



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
		if (request.method != 'GET' && request.method != 'POST') {
			var errObj = {status:"Error", message:"This request can't be served"}
			response.writeHead(404, {"Content-Type": "application/json"})
			response.write(JSON.stringify(errObj))
			response.end()
		}
		
		
		if (request.method == 'POST') {
			var employee = {name:"Divyanshu Semmwal", contact:8077149430}
			employees.push(employee)
			
			response.writeHead(200, {'Content-Type':'application/json'})
			response.write(JSON.stringify(employee))
			response.end()
		}
		if (request.method == 'GET') {
			
			
			response.writeHead(200, {'Content-Type':'application/json'})
			response.write(JSON.stringify(employees))
			response.end()
			
			response
		}
	}
	else {
		// response.writeHead() method write head for response
		response.writeHead(404, {"Content-Type" : "text/html"})
		response.end()
	}
	
}).listen(3000)
  