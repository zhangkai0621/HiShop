const express=require("express")
const router=express.Router();
const pool=require("../pool");
router.get("/",(req,res)=>{
    console.log(200);
});
module.exports=router;