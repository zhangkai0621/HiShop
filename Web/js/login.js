//引入header.html
$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});

//文本框
$(function(){
    function vail(txt,reg){
        if(reg.test($(txt).val())){
			$(txt).css("border-bottom","2px solid green")
			.next().html(`格式正确<img src="img/ok.png">`).css("color","green")
            return true;
        }else{
			$(txt).css("border-bottom","2px solid red")
			.next().html(`格式错误,请重新输入<img src="img/err.png">`).css("color","red");
            return false;
        }
    }
	//封装获得焦点的函数
	var name="",pwd="";//用于获取正则返回值
    function getFocus(txt,html){
        $(txt).css({
            "border-bottom":"2px solid #fe6a08"
        }).next().html(html).css("color","#666");
    }
    $("#userName").focus(function(){
        getFocus($(this),"用户名或手机号码为1~12位")
     }).blur(function(){
        //var name=getBlur($(this),/^\w{1,12}$/);
		name=vail($(this),/^\w{1,12}$/);
    })
    $("#userPwd").focus(function(){
        getFocus($(this),"密码为6~8位")
     }).blur(function(){
        //var pwd=getBlur($(this),/^[a-zA-Z0-9]{6,8}$/);
		pwd=vail($(this),/^[a-zA-Z0-9]{6,8}$/);
    })
	$(".form>button").click(function(){
		//如果账号和密码格式正确
		if(name&&pwd){
			var uname=$("#userName").val();
			var upwd=$("#userPwd").val();
			//console.log(uname,upwd);
			$.ajax({
				url:"http://localhost:3005/login",
				type:"post",
				data:{uname,upwd},
				dataType:"json",
				success:function(res){
					if(res.length>0){
						console.log(res);
					}else{
						console.log(404)
					}
				}
			})
		}
	})
	
	

})
