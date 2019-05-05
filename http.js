// 小知识 linux命令 重命名
// mv a b 把名字a变成b

// 创建一个HTTP服务器，先引入http模块
var http = require('http');

// 创建一个服务
var server = http.createServer();

// 监听使用端口
server.listen(8081,function(err,data){
    console.log('服务器已经启动，请访问：127.0.0.1:8081');
    
})


