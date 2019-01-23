const express=require("express")
const router=express.Router();
const pool=require("../pool");
//客户案例路由
router.get("/",(req,res)=>{
    res.writeHead(200,{
        "Access-Control-Allow-Origin":"*"
    });
    var lid=req.query.lid;
    var sql="select * from cases where lid=?";
    pool.query(sql,[lid],(err,result)=>{
        if(err) throw err;
        res.write(JSON.stringify(result));
        res.end();
    })
});
//登录成功后的路由
router.get("/login",(req,res)=>{
    res.writeHead(200,{
        "Access-Control-Allow-Origin":"*"
    });
    var uid=req.query.uid;
    var sql="select * from userinfo where uid=?";
    pool.query(sql,[uid],(err,result)=>{
        if(err) throw err;
        res.write(JSON.stringify(result));
        res.end();
    })
})
module.exports=router;