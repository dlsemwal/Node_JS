var fileSys = require("fs");
var insertedText = "This file is created by Divyanshu Semwal"




fileSys.readFile("myFile1.txt", function(err, data) {
	if(err) return console.log(err)
	console.log(data.toString())
	insertedText = insertedText + data.toString()
})

fileSys.readFile("myFile2.txt", function(err, data) {
	if(err) return console.log(err)
	console.log(data.toString())
})

fileSys.readFile("myFile3.txt", function(err, data) {
	if(err) return console.log(err)
	console.log(data.toString())
})

fileSys.readFile("myFile4.txt", function(err, data) {
	if(err) return console.log(err)
	console.log(data.toString())
})

fileSys.readFile("myFile5.txt", function(err, data) {
	if(err) return console.log(err)
	console.log(data.toString())
})

setTimeout(function () {

fileSys.writeFile("myFile1.txt", insertedText, function(err) {
	if(err) return console.log(err)
})}, 4000)




