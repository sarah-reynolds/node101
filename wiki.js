var http = require("http");
var fs = require("fs");

function renderWikiHome(req, res){
	res.writeHead(200,{'content-type':'text/html'});
	var wikiHomeHTML = fs.readFileSync('wiki.html');
	res.end(wikiHomeHTML);
}

function renderWikiHighelf(req, res){
	res.writeHead(200,{'content-type':'text/html'});
	var wikiHighelfHTML = fs.readFileSync('wiki-highelf.html');
	res.end(wikiHighelfHTML);
}

function renderWikiArgonian(req, res){
	res.writeHead(200,{'content-type':'text/html'});
	var wikiArgonianHTML = fs.readFileSync('wiki-argonian.html');
	res.end(wikiArgonianHTML);
}

function renderWikiBreton(req, res){
	res.writeHead(200,{'content-type':'text/html'});
	var wikiBretonHTML = fs.readFileSync('wiki-breton.html');
	res.end(wikiBretonHTML);
}

function renderError404(req, res){
	res.writeHead(200,{'content-type':'text/html'});
	var wiki404HTML = fs.readFileSync('wiki-404.html');
	res.end(wiki404HTML);
}

function render404CSS(req, res){
	res.writeHead(200,{'content-type':'text/css'});
	var wiki404CSS = fs.readFileSync('wiki-404.css');
	res.end(wiki404CSS);
}

var server = http.createServer((req, res)=>{
	console.log("Someone has connected to our server.");
	console.log(req.url);
	if(req.url === '/'){
		renderWikiHome(req, res);
	}else if(req.url === '/wiki-404.css'){
		render404CSS(req, res);
	}else if(req.url === '/wiki-highelf.html'){
		renderWikiHighelf(req, res);
	}else if(req.url === '/wiki-argonian.html'){
		renderWikiArgonian(req, res);
	}else if(req.url === '/wiki-breton.html'){
		renderWikiBreton(req, res);
	}else{
		renderError404(req, res);
	}

});

server.listen(8000);
console.log("The server is listening for http traffic at port 8000...");