//获取左上角返回键图标
var goBack = document.getElementsByTagName("header")[0].getElementsByTagName("i")[0];

goBack.onclick=function(){
	window.location.href = "task2_assignment.html";
}