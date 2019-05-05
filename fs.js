var http = require('http');
// 引入fs模块
var fs = require('fs');

//创建一个服务器
var server = http.createServer();

//监听端口
server.listen(8081, function () {
    console.log('启动成功，请访问 127.0.0.1:8081');

})
//fs模块读取文件 参数1 文件路径 参数2 字符集 参数3 回调
// fs.readFile('./demo.txt', 'utf-8', function (err, data) {
//     console.log(err);
//     console.log(data);

// })

//修改文件 参数1 路径 参数2 修改内容 参数3 可选 字符集 参数4 回调
//注意，修改后会直接覆盖该文件
// fs.writeFile('./demo.txt', '追加内容', function (err, data) {
//     console.log(data);

// })

//所以想在原有文件上追加内容可使用以下方法
//先把文件读出来保存，再+=新数据，合并，再写入文件

fs.readFile('./demo.txt', 'utf-8', function (err, data) {
    data += '追加内容1';
    fs.writeFile('./demo.txt', data, function (err, data) {
        console.log(data);

    })

})

