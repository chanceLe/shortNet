var clickChange = function(ele, className) {
	$(document).on("mousedown", ele, function(e) {
		e.preventDefault();
		e.stopPropagation();
		$(this).addClass(className);
	});
	$(document).on("mouseup", ele, function(e) {
		e.preventDefault();
		e.stopPropagation();
		$(this).removeClass(className);
	})
}

var showWarning = function(ele, flag, txt) {
	if(!flag) {
		return
	} else {
		if(txt) {
			$(ele).text(txt);
		}
		$(ele).show();
	}
}

//地址校验规则
function IsURL(str_url) {
	var strRegex = "^((https|http|ftp|rtsp|mms)?://)" +
		"?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@ 
		+
		"(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184 
		+
		"|" // 允许IP和DOMAIN（域名）
		+
		"([0-9a-z_!~*'()-]+\.)*" // 域名- www. 
		+
		"([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名 
		+
		"[a-z]{2,6})" // first level domain- .com or .museum 
		+
		"(:[0-9]{1,4})?" // 端口- :80 
		+
		"((/?)|" // a slash isn't required if there is no file name 
		+
		"(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
	var re = new RegExp(strRegex);
	//re.test()
	if(re.test(str_url)) {
		return(true);
	} else {
		return(false);
	}
}