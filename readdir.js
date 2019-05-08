var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.listen(8081, function () {
    console.log('启动成功，请访问 127.0.0.1:8081');

})
fs.readdir('./','utf8',function(err,data){
    console.log(data);
    
})

// fs模块读出路径下的所有文件夹和文件名 ,data是个数组
//json
var arr = ['a','b','c'];
JSON.stringify(arr);       //把对象或者数组转成字符串
JSON.parse(arr);           //把数组对象字符串转回数组或者字符串

//一般服务器发送数据时会把数据转成字符串发到客户端，客户端接收到这个字符串，会把字符串转回原来的数据 
