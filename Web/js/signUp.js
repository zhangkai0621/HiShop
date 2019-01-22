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
	    getFocus($(this),"用户名为4~12位");
	})
	$("#phone").focus(function(){
	    getFocus($(this),"手机号码为11位");
	})
	$("#code").focus(function(){
	    getFocus($(this),"验证码为6位");
	})
	$("#userPwd").focus(function(){
	    getFocus($(this),"密码为6~8位");
	})
	//失去焦点事件
	function getBlur(txt,reg,html){
		var $value=$(txt).val();
		if(reg.test($value)){
			$(txt).css({
				"border":"1px solid #dadada"
			}).next().html("");
		}else{
			$(txt).css({
				"border":"1px solid #f00"
			}).next().html(html).css("color","#f00");
		}
	}
	$("#userName").blur(function(){
		getBlur($(this),/^\w{4,12}$/,"用户名格式不正确")
	})
})