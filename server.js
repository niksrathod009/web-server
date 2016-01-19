var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requiredAuthentication : function (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next){
		
		console.log('date: '+new Date().toString()+' Request: '+req.method + ' ' + req.originalUrl);
		next();
	}
};

//app.use(middleware.requiredAuthentication);
app.use(middleware.logger);
app.get('/about',middleware.requiredAuthentication ,function (req,res) {
	res.send('This is About US!');
});

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);

app.listen(PORT, function () {
	console.log('express server started on ' + PORT);
});