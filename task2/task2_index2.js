//使翻页小圆点变色，表明停留在当前页(用css更简便，此处为练习所用)
var dotTwo = document.getElementById("dotTwo");
//将其背景色更改为#fbb435
dotTwo.style.background="#fbb435";



///////////////////////////////////////////////////////////////////



//获取黄色小三角1
var triangle = document.getElementById("gameEdition").getElementsByTagName("i")[0];
//获取黄色小三角2
var triangle1 = document.getElementById("gameEdition").getElementsByTagName("i")[1];
//获取简化版按钮
var simplify = document.getElementById("simplify");

//点击小三角1跳转向杀人游戏页面
triangle.onclick = function(){
    window.location.href = "task2_index1.html";
}

//点击小三角2跳转向捉鬼游戏页面
triangle1.onclick = function(){
	window.location.href = "task2_index1.html";
}

//点击简化版按钮跳转向玩家配比页面
simplify.onclick = function(){
	window.location.href = "task2_assignment.html";
}











