const express=require("express")
const router=express.Router();
const pool=require("../pool");
router.get("/",(req,res)=>{
    res.writeHead(200,{
        "Access-Control-Allow-Origin":"*"
      });
    var lid=req.query.lid;
    console.log(lid);
    var sql="select * from usercase where lid=?";
    pool.query(sql,[lid],(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.write(JSON.stringify(result));
        res.end();
    })
});
module.exports=router;