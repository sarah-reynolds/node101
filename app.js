// include the http module. it's part of core, so no npm install needed
var http = require("http");

// fs = file system. it is part of core
var fs = require("fs");

function renderHomePage(req, res){
		res.writeHead(200,{'content-type':'text/html'});
		var theHomePageHTML = fs.readFileSync('homePage.html');
		res.end(theHomePageHTML)
		// manual way without fs below
		// res.write('<h1>This is the home page.</h1>')
		// res.write('<p>I am very proud of my node routing ability.</p>');
		// res.write('<p>I made a page in node so there.</p>');
		// res.end();
}
// set up an http server and store it in the server var
// the callback will run anytime someone hits the port the server is listening to
var server = http.createServer((req, res)=>{
	// this function is run every time someone makes an http request to our sevrer
	console.log("someone connected to our server!");
	// the url requested is in the req object, url property
	console.log(req.url);

	if(req.url === '/'){
		renderHomePage(req, res);
		// someone came to our homepage! give them the homepage content
		
		}else if(req.url === '/logo.png'){
			var img = fs.readFileSync('logo.png');
			res.writeHead(200,{'content-type':'image/png'})
			res.end(img);
		}else{
			res.writeHead(404,{'content-type':'text/html'})
			res.end('Sorry this page does not exist');
		}
	// res.end("sanity check");
});

// tell the server we created to listen to port 8000
// whenever anyone makes an heep rrequest to this computer at port 80000 the callback will fire
server.listen(8000);
console.log("Server is listening for http traffic at port 8000...");