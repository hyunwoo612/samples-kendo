'use strict';

var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    favicon = require('serve-favicon'),
    logger = require('morgan');

var app = express();
var router = express.Router();
app.set('port', process.env.PORT || 3000);
app.set("views", path.join(__dirname, 'public'));

//app.use(favicon(__dirname + '/public/img/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/public", express.static(path.join(__dirname, 'public')));

if (app.get('env') == 'development') {
	app.locals.pretty = true;
}

app.get('/', routes.index);
app.get('/users', routes.users);

http.createServer(app).listen(app.get('port'), function () {
    console.log(" >>>>>>>> __dirname => " + __dirname);
    console.log("Express server listening on port " + app.get('port'));
});