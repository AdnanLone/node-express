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

module.exports = middleware;