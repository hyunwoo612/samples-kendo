var path = require('path');
exports.index = function (req, res) {
    var url = path.join(__dirname, '../views', 'index.hbs');
    console.log(" >>>>>>> index.url => " + url);
    res.render('index', {
        //layout: false,
        //layout: "layouts/_layout",
        title: "Home",
        message: "helo index 3333"
    });
};

exports.users = function (req, res) {
    var url = path.join(__dirname, '../views', 'users.hbs');
    console.log(" >>>>>>> users.url => " + url);
    res.render('users', {
        //layout: false,
        layout: "_users",
        title: "Home",
        message: "helo index 3333"
    });
};

exports.indexHtml = function (req, res) {
    var url = path.join(__dirname, '../views', 'index.html');
    console.log(" >>>>>>> index.url => " + url);
    res.sendFile(url);
};
exports.usersHtml = function (req, res) {
    var url = path.join(__dirname, '../views', 'users.html');
    console.log(" >>>>>>> users.url => " + url);
    res.sendFile(url);
};