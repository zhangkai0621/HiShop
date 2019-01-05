//引进express模块
const express=require("express");
const bodyParse=require("body-parser");
//引入MYSQL地址池
const mysql=require('mysql');
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'HiShop',
	connectionLimit:20	
});
//创建服务器
var server=express();
server.listen(3000);
//托管静态资源
server.use(express.static('html'));
server.use(express.static('css'));
server.use(express.static('js'));
//server.use(express.static('js'));