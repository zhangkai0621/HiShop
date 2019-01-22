//引入header.html
$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});

//文本框
$(function(){
    function getFocus(txt){
        $(txt).css({
            "border-bottom":"2px solid #fe6a08"
        })
    }
	$("#userName,#userPwd").focus(function(){
	    getFocus($(this));
		$("#userPwd").next().html("")
	 })
	$(".form>button").click(function(){
		var uname=$("#userName").val();//返回正则判断值
		var upwd=$("#userPwd").val();
		if(uname==""||upwd==""){ 
			$("#userName,#userPwd").css("border-bottom","2px solid red");
			$("#userPwd").next().html(`请输入账号或密码!`).css("color","red");
		}else{
			$.ajax({
				url:"http://localhost:3005/login",
				type:"post",
				data:{uname,upwd},
				dataType:"json",
				success:function(res){
					if(res.length>0){
						var s=3;
						$("#userPwd").next().html(`登录成功,${s}秒后跳转到主页`).css("color","green");
						setInterval(function(){
							if(s>0){
								s--;
								$("#userPwd").next().html(`登录成功,${s}秒后跳转到主页`).css("color","green");
							}else{
								location.href='http://127.0.0.1:3005/index.html';
							}
						},1000)
						
					}else{
						$("#userName,#userPwd").css("border-bottom","2px solid red");
						$("#userPwd").next().html(`账号或密码不正确,请重新登录!`).css("color","red");
					}
				}
			})
		}
	})
})
