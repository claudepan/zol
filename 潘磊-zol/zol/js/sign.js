
//输入框 变化
$(".text").focus(function(){
	$(this).css("border-color","#E02D2D")
});
$(".text").blur(function(){
	$(this).css("border-color","#ccc")
});
//注册判断功能
$("#sign_username").blur(function(){
	var pattern = /0?(13|14|15|18)[0-9]{9}/;
	var str = sign_username.value;
	var a = pattern.test(str);
	
	if ( a == true ) {
		$("#cellphone1").css("display","block");
		$("#cellphone2").css("display","none");
	}else{
		$("#cellphone1").css("display","none");
		$("#cellphone2").css("display","block");
	}
})
	
$("#sign_password").blur(function(){
	var pattern = /^[a-zA-Z\d]{6,16}$/;
	var str = sign_password.value;
	var a = pattern.test(str);
	
	if ( a == true ) {
		mmts1.style.display = "block"
		mmts2.style.display = "none"
	}else{
		mmts2.style.display = "block";
		mmts1.style.display = "none"
	}
})

$("#sign_rpw").blur(function(){
	
	if (sign_rpw.value == sign_password.value && sign_rpw.value != "") {
		mmts3.style.display = "block";
		mmts4.style.display = "none";
	} else{
		mmts4.style.display = "block";
		mmts3.style.display = "none";
	}
})
//手机验证码倒计时
//$(".yzm_btn").click(function(){
	
		var countdown=60;		//修改倒计时时间
		function settime(obj){
	    	if(countdown == 0){
		        obj.removeAttribute("disabled");
		        obj.value="获取校验码";
		        countdown=3;
		        return;
	    }else{
		        obj.setAttribute("disabled",true);
		        obj.value="重新发送（"+countdown+"s)";
		        countdown--;
	    }
	    setTimeout(function(){settime(obj)},1000)
	}
//})
//验证码功能
	var code;
    function createCode() {
        code = "";
        var codeLength = 4; //验证码的长度
        var checkCode = document.getElementById("checkCode");
        var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
        for (var i = 0; i < codeLength; i++) {
                var charNum = Math.floor(Math.random() * 52);
                code += codeChars[charNum];
            }
            if (checkCode){ 
                checkCode.className = "code";
                checkCode.innerHTML = code;
            }
        }
	function validateCode() 
        {
            var inputCode = document.getElementById("sign_tpyzm").value;
            if (inputCode.toUpperCase() == code.toUpperCase()){
            	yzm1.style.display = "block";
                yzm2.style.display = "none";
            }else{
                yzm2.style.display = "block";
                yzm1.style.display = "none";
                createCode();
            }        
        }

//注册完成
$(".sign_button").click(function(){
	var inputCode = document.getElementById("sign_tpyzm").value;
	
	if( /0?(13|14|15|18)[0-9]{9}/.test(sign_username.value) == false ){
		alert("请输入正确的手机号");
	}else{
		if(inputCode.toUpperCase() != code.toUpperCase()){
			alert("请输入正确的验证码");
		}else{
			if(/^[a-zA-Z\d]{6,16}$/.test(sign_password.value) == false){
				alert("请输入6-16位字母和数字的组合，不可用特殊字符的密码");
			}else{
				if(sign_rpw.value != sign_password.value){
					alert("密码不一致");
				}else{
					if($('#sign_checked').is(':checked')){
						var obj = {};
						obj.phone = sign_username.value;
						obj.pass = sign_password.value;
						var c = JSON.stringify(obj);
						setCookie("user",c,10);
						location.href = "login.html";
						
					}
				}
			}
		}
	}
})
