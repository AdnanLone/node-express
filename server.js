var express = require('express');
var app = express();
var PORT=3000;

var middleware = {
	requireAuthentication: function(req,res,next){
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next) {
		var date = new Date().toString();
		console.log('Request Type is ' + req.method + ' and  date is ' + date + ' and URL is  '+req.originalUrl);
		next();
	}
};

app.use(middleware.logger);


app.get('/about',middleware.requireAuthentication, function (req,res){
	res.send('Hi All This is About Us Page');
})

// app.get('/about',middleware.requireAuthentication,function(req,res){
// 	res.send('About Us');
// });

app.use(express.static(__dirname + '/public'))

app.listen(PORT,function () {
	console.log("Express Server Started on port " + PORT);
});