/*
var hello = function (a){
	console.log("test");
	
a();


}
var xyz = function (){
	console.log("new");
}

hello(xyz);
*/

var http = require("http");
var xyz = function (req,res){
	console.log("Hello from server");
	res.write("Hello client");
	res.end();
	
}
var abc = http.createServer(function (req,res){
	console.log("Hello from server");
	res.write("Hello client");
	res.end();
	
});

abc.listen(3000);



/*
var a = 25;
if(a<6){
	console.log("Less then 6");
}
else {
	console.log("greater then 6");
}
*/
//console.log("Hello World");

