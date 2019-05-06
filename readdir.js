var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.listen(8081, function () {
    console.log('启动成功，请访问 127.0.0.1:8081');

})
fs.readdir('./','utf8',function(err,data){
    console.log(data);
    
})

// fs模块读出路径下的所有文件夹和文件名