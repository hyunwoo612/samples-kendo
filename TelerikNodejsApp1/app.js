'use strict';

var express = require('express'),           // Express
    exphbs = require('express-handlebars'), // Handlebars template engine for Express
    path = require('path'),                 // path util
    http = require('http'),                 // http
    bodyParser = require('body-parser'),    // http body parser
    favicon = require('serve-favicon'),     // Favicon
    logger = require('morgan');             // logger

// Routing files
var routes = require('./routes/route-index');

var app = express();
var router = express.Router();
app.set('port', process.env.PORT || 3000);
app.set("public", path.join(__dirname, 'public'));  // �������� ��ġ

// view engine setup
app.set("views", path.join(__dirname, 'views'));
var hbs = exphbs.create({
    extname: 'hbs',                                                     // �⺻Ȯ���� handlebars -> hbs����
    layoutsDir: path.join(app.get('views'), '/layouts'),                // ���̾ƿ� ���� (handlebars) ���
    defaultLayout: '_layout',                                           // ����Ʈ ���̾ƿ� ���
    partialsDir: [
        path.join(app.get('views'), '/partials')
    ],                                                                  // �ļ� ���� ���
    helpers: {  // ���� ���� ���
        timeago: function (timestamp) {
            return moment(timestamp).startOf('minute').fromNow();
        }
    }
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs'); // handlebars ���

//app.use(favicon(__dirname + '/public/img/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/public", express.static(path.join(__dirname, 'public')));

if (app.get('env') == 'development') {
	app.locals.pretty = true;
}

app.get('/', routes.index);
app.get('/users', routes.users);
app.get('/html', routes.indexHtml);
app.get('/usersHtml', routes.usersHtml);

http.createServer(app).listen(app.get('port'), function () {
    console.log(" >>>>>>>> __dirname => " + __dirname);
    console.log("Express server listening on port " + app.get('port'));
});