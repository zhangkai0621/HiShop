const express=require("express")
const router=express.Router();
const pool=require("../pool");
router.post("/",(req,res)=>{
	res.writeHead(200,{
	    "Access-Control-Allow-Origin":"*"
	});
	var sql="select * from userinfo where uname=? and upwd=?";
	pool.query(sql,[req.body.uname,req.body.upwd],(err,result)=>{
		if(err) throw err;
		res.write(JSON.stringify(result));
		res.end();
	})
})
module.exports=router;