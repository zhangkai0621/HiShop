//引入footer.html
$(function(){
    $("#footer").load("footer.html");
});
$(function(){
	//获得焦点事件
	function getFocus(txt,html){
	    if(html=="验证码为6位"){
			$(txt).css({
			    "border":"1px solid #0A6DEE"
			}).parent().next().html(html);
		}else{
			$(txt).css({
				"border":"1px solid #0A6DEE"
			}).next().html(html).css("color","#0A6DEE");
		}
	}
	$("#userName").focus(function(){
	    getFocus($(this),"用户名为4~12位字母、数字、汉字或下划线");
	})
	$("#phone").focus(function(){
	    getFocus($(this),"手机号码为11位");
	})
	$("#code").focus(function(){
	    getFocus($(this),"验证码为6位数字");
	})
	$("#userPwd").focus(function(){
	    getFocus($(this),"密码为6~8位字母或数字");
	})
	//失去焦点事件
	function getBlur(txt,reg,html){
		var $value=$(txt).val();
		if(reg.test($value)){
			if(html=="验证码格式不正确"){//文本框为#code
				$(txt).css({
					"border":"1px solid #dadada"
				}).parent().next().html("");
				return true;
			}else{//其他文本框
				$(txt).css({
					"border":"1px solid #dadada"
				}).next().html("");
				return true;
			}
		}else{
			if(html=="验证码格式不正确"){
				$(txt).css({
					"border":"1px solid #f00"
				}).parent().next().html(html).css("color","#f00");
				return false;
			}else{
				$(txt).css({
					"border":"1px solid #f00"
				}).next().html(html).css("color","#f00");
				return false;
			}
		}
	}
	var name="",phone="",code="",pwd="";
	$("#userName").blur(function(){
		name=getBlur($(this),/^[a-zA-Z0-9_\u4e00-\u9fa5]{4,12}$/,"用户名格式不正确");
	});
	$("#phone").blur(function(){
		phone=getBlur($(this),/^1[34578]\d{9}$/,"手机号码格式不正确");
	})
	$("#code").blur(function(){
		code=getBlur($(this),/^\d{6}$/,"验证码格式不正确");
	})
	$("#userPwd").blur(function(){
		pwd=getBlur($(this),/^[a-zA-Z0-9]{6,8}$/,"密码格式不正确");
	})
	//注册按钮
	$(".form>button").click(function(){
		if(name&&phone&&code&&pwd&&$("#argee").prop("checked")){
			var uname=$("#userName").val();
			var uphone=$("#phone").val();
			var upwd=$("#userPwd").val();
			$.ajax({
				url:"http://localhost:3005/signup",
				type:"post",
				data:{
					uname,uphone,upwd
				},
				success(res){
					if(res=="200 OK"){
						alert("注册成功");
						location.href='http://127.0.0.1:3005/login.html';
					}else{
						alert("用户名已被占用")
					}
				}
			})
		}else{
			$("#userName,#phone,#userPwd,#code,#argee").css({ "border":"1px solid #f00" })
			$("#userPwd").next().html("这些是必填项").css("color","#f00");
		}
	})
})