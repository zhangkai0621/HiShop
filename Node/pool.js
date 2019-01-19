//引入MYSQL地址池
const mysql=require('mysql');
//创建mysql连接池
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'hishop',
	connectionLimit:20	
});
//把创建好的连接池导出
module.exports=pool;