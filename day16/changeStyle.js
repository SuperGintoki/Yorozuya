var style = document.getElementById("style");
var aBtn = style.getElementsByTagName("span");
var link = document.getElementsByTagName("link")[0];


aBtn[0].onclick = function(){
	link.href = "css/style_"+ 1 + ".css";
}

aBtn[1].onclick = function(){
	link.href = "css/style_"+ 2 + ".css";

}

aBtn[2].onclick = function(){
	link.href = "css/style_"+ 3 + ".css";
}