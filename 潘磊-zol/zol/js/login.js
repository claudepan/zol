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
//登陆成功
log_btn.onclick = function(){
	var user = getCookie("user");
	var o = JSON.parse(user);
	
	if(o.phone == log_un.value){
		if(o.pass == log_pw.value){
			location.href = "index.html";
		}else{
			$(".log_wrong").css("display","block")
		}
	}else{
		$(".log_wrong").css("display","block")
	}
}
