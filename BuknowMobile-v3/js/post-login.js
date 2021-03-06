function checkMobile() {
	var pregMobile = /^(1(([3578][0-9])|(47)))\d{8}$/;
	var value = $("#mobile").val();
	
	if (value == '' || value.length == 0) {
		$(".login-tips").text("请输入手机号").css("visibility", "visible");
		return false;
	} else if (pregMobile.test(value) === false) {
		$(".login-tips").text("手机号码格式错误").css("visibility", "visible");
		return false;
	} else {
		$(".login-tips").css("visibility", "hidden");
	}
	return true;
}
function checkVericode() {
	var value = $("#vericode").val();
	
	if (value == '' || value.length == 0) {
		$(".login-tips").text("请输入手机短信验证码").css("visibility", "visible");
		return false;
	} else {
		$(".login-tips").css("visibility", "hidden");
	}
	return false;
}
function checkPassword() {
	var value = $("#password").val();			  
	var pregPassword = /^[0-9a-zA-Z!@#$%^&*]{6,16}$/;
	
	if (value == '' || value.length == 0) {
		$(".login-tips").text("请输入密码").css("visibility", "visible");
		return false;
	} else if (pregPassword.test(value) === false) {
		$(".login-tips").text("密码格式错误").css("visibility", "visible");
		return false;
	} else {
		$(".login-tips").css("visibility", "hidden");
	}
	return true;
}
$(".get-code").click(function() {
	if(checkMobile() && countdown == 60) {
		timer($(this));
		tip("验证码已发送到您手机");
	}
})

//倒计时
var countdown = 60;
function timer(obj) {
	if (countdown == 0) { 
		obj.text("获取");
		countdown = 60; 
		return;
	} else { 
		obj.text("重新获取(" + countdown + "s)"); 
		countdown--; 
	} 
	setTimeout(function() { timer(obj) },1000) ;
}

function tip(msg) {
	var html = '<div class="popup-tip">'+ msg +'</div><div class="overlay"></div>';
	$("body").append(html);
	setTimeout(function() {
		$(".overlay, .popup-tip").remove();
	}, 600);
}

$("#finish").click(function() {
	if (checkMobile() && checkVericode()) {
	}
})