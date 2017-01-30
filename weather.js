var http = require("http");
var apikey = '83e65d4cc9a488945381f5db14792dda';
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+apikey;

var weatherAsEnglish = "";

var request = http.get(weatherUrl, (theResponse)=>{
	console.log(theResponse.statusCode);
	theResponse.on('data', (chunkOfData)=>{
		// console.log(chunkOfData);
		weatherAsEnglish += chunkOfData;
		// console.log(weatherAsEnglish)
	});
	theResponse.on('end',()=>{
		console.log(weatherAsEnglish);
	})
});