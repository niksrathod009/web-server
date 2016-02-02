var middleware =  {
	requiredAuthentication : function (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next){
		
		console.log('date: '+new Date().toString()+' Request: '+req.method + ' ' + req.originalUrl);
		next();
	}
}

module.exports = middleware;