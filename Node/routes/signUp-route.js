const express=require("express")
const router=express.Router();
const pool=require("../pool");
router.post("/",(req,res)=>{
	res.writeHead(200,{
	    "Access-Control-Allow-Origin":"*"
	});
	//先查询数据再插入数据
	var sql="select * from userinfo where uname=?";
	pool.query(sql,[req.body.uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.write("404");
			res.end();
		}else{
			var sqlInsert="INSERT INTO userinfo VALUES (NULL,?,?,?)";
			pool.query(sqlInsert,[req.body.uname,req.body.upwd,req.body.uphone],(err,result)=>{
				if(err) throw err;
				if(result.affectedRows>0){
					res.write("200 OK");
					res.end();
				}else{
					res.write("404");
					res.end();
				}
			})
		}
	})
})
module.exports=router;