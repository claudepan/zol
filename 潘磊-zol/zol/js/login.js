//用户名密码输入框 变化
$("#log_un").focus(function(){
	$(".log_username").css("border-color","#E02D2D")
});
$("#log_pw").focus(function(){
	$(".log_password").css("border-color","#E02D2D")
});
$("#log_un").blur(function(){
	$(".log_username").css("border-color","#ccc")
});
$("#log_pw").blur(function(){
	$(".log_password").css("border-color","#ccc")
});
//注册