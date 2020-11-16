// JavaScript Document
var css = GetCookie("CSS");
if(css == ""){css = "manu.css";}
document.write('<link rel="stylesheet" href="' + css + '" type="text/css">');

function SetCss(file){

		SetCookie("CSS", file);
		window.location.reload();
}

function GetCookie(key){
	var tmp = document.cookie + ";";
	var index1 = tmp.indexOf(key, 0);
	if(index1 != -1){
		tmp = tmp.substring(index1, tmp.length);
		var index2 = tmp.indexOf("=", 0) + 1;
		var index3 = tmp.indexOf(";", index2);
		return(unescape(tmp.substring(index2,index3)));
	}
	return("");
}

function SetCookie(key, val){
	document.cookie = key + "=" + escape(val) + ";expires=Fri, 31-Dec-2099 23:59:59;";
}
// -->