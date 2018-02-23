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
app.set("public", path.join(__dirname, 'public'));  // 정작파일 위치

// view engine setup
app.set("views", path.join(__dirname, 'views'));
var hbs = exphbs.create({
    extname: 'hbs',                                                     // 기본확장자 handlebars -> hbs변경
    layoutsDir: path.join(app.get('views'), '/layouts'),                // 레이아웃 파일 (handlebars) 경로
    defaultLayout: '_layout',                                           // 디폴트 레이아웃 사용
    partialsDir: [
        path.join(app.get('views'), '/partials')
    ],                                                                  // 파셜 파일 경로
    helpers: {  // 전역 헬퍼 등록
        timeago: function (timestamp) {
            return moment(timestamp).startOf('minute').fromNow();
        }
    }
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs'); // handlebars 등록

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