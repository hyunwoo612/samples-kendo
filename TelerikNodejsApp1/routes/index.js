var path = require('path');
exports.index = function (req, res) {
    console.log(" >>>>>>> exports.index.__dirname => " + __dirname);
    var url = path.join(__dirname, '../views', 'index.html');
    console.log(" >>>>>>> index.url => " + url);
    res.sendFile(url);
};

exports.users = function (req, res) {
    console.log(" >>>>>>> exports.users.__dirname => " + __dirname);
    var url = path.join(__dirname, '../views', 'users.html');
    console.log(" >>>>>>> users.url => " + url);
    res.sendFile(url);
    //���� �����귱ġ �����Ҷ� Ȯ�ο�
    //res.sendFile('E:/Works/60.Project-Demo/samples-kendo/TelerikNodejsApp1/public/users.html');
};