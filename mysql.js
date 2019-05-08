//node自带的核心模块没有操作数据库的，只有第三方模块npm有，模块名就叫mysql
//npm install mysql
//引入模块
var mysql = require('mysql');


//传连接数据进这个对象
var connection = mysql.createConnection({
    host: 'localhost', //服务器地址
    user: 'me',        //数据库用户名
    password: 'secret',//密码
    database: 'my_db' , //数据库名，
    port:3306           //要是默认端口号，可以不写这个参数
})

//打开连接，连接mysql
connection.connect();

// 编写sql语句
var sql = 'select * from user where id=1'

// 发送查询sql语句，回调参数1错误信息 参数2 回来的数据 参数3 这次操作的所有信息
connection.query(sql,function(err,res,filed){
    console.log(err);
    console.log(res);
    console.log(filed);
    
        
    
})

// 断开连接，结束连接
connection.end();