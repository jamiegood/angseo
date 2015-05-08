// var express = require('express');
// var app = express();

// app.use(express.static(__dirname + '/'));

// app.listen(process.env.PORT || 3000);



var express = require('express');
var app = express();

app.use('/app', express.static(__dirname + '/app'));
//app.use('/app/phones', express.static(__dirname + '/app/phones'));
//app.use('/app/css', express.static(__dirname + '/app/css'));
//app.use('/app/partials', express.static(__dirname + '/app/partials'));
//app.use('/app/bower_components', express.static(__dirname + '/app/bower_components'));

app.all('/app/*', function(req, res, next) {
     // Just send the index.html for other files to support HTML5Mode
     res.sendFile('app/index.html', { root: __dirname });
});

app.listen(3000); //the port you want to use