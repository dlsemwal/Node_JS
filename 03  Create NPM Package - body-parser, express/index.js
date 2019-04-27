 var express = require('express')
 var expressObj = express()
 
 //using middleware body-parser
 var bodyParser = require('body-parser')
 //using body parser in expressObj
 expressObj.use(bodyParser.urlencoded({extended:true}))
 
 // create server on 4500 port
 
 var server = expressObj.listen(4500, function (){
	 var host = server.address().address
	 var port = server.address().port
	 console.log(`My server is running on host:- ${host} & port is ${port}`)
 });
 
 
 expressObj.get('/add-employee', function(request, response) {
	 response.send(`
	 <form action='/employees' method='post'>
		First Name: <input type='text' name='fname'><br>
		Age: <input type='number' name='age'>
		<br><input type='submit'> </form>
	 `)
	 
 })
 
 expressObj.post('/employees', function(request, response) {
	 // we can't access form data directly. To access form data we have to use middleware 'body-parser
	 // line 4, now we can access 'request.body' object to access form data
	 response.send(request.body)
	 console.log(request.body.fname, request.body.age)
 })
 
 
 expressObj.get('/', function (request, response) {
	 response.send('Welcome in Home')
	 
 })
 
 expressObj.get('/employees', function(request,response) {
	 response.send('<h1> Welcome in Employees Tab </h1>')
 })
 
 // {5} means max length of numb is 5 digit
 expressObj.get('/employees/:id([0-9]{5})', function (request, response) {
	 response.send('This employee id is ' + request.params.id)
 })
 // + sign for infinity length
 expressObj.get('/employees/:name([a-zA-Z]+)', function (request, response) {
	 response.send(`The employee name is <h4> ${request.params.name} </h4>`)
 })
 
 