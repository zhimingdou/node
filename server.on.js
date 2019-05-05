var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.listen(8081, function () {
    console.log('启动成功，请访问 127.0.0.1:8081');

})


//创建一个监听事件，可以监听发过来的请求 参数1是请求方法 参数2回调
//回调函数里第一个参数是事件处理函数，里面接收监听到的事件信息，参数二是响应回去的数据

// server.on('request',function(req,rep){
//     if(req.method == 'GET'){
//         console.log('get请求');
//         console.log(1);
//         rep.write('nnnnn');
//         rep.end();
//     }

// })


server.on('request', function (req, rep) {

    console.log(req.method);
    rep.setHeader('Content-type','text/html;charset=utf-8'); //设置字符集，中文不会乱码
    fs.readFile('./index.html', 'utf-8', function (err, data) {
        //直接返回一个读出来的网页
        rep.end(data);
    })
                                   
});