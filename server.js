var http = require("http");
// console.log(http);
var server = http.createServer((req,res)=>{
	console.log(req.rawHeaders[1]);
	// run methods on the response
	// res.writeHead(200,{'content-type':'text/plain'});
	res.end("<h1>Hello, friend. This is your node server.</h1>");
});

var port = 8000;
console.log("Server listening on port 8000 for connections...");
server.listen(port);