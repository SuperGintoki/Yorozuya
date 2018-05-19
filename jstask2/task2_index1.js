//使翻页小圆点变色，表明停留在当前页(用css更简便，此处为练习所用)
var dotOne = document.getElementById("dotOne");
//将其背景色更改为#fbb435
dotOne.style.background="#fbb435";


///////////////////////////////////////////////////////////////////


//点击黄色小三角时跳转到杀人游戏页面
//获取黄色小三角
var triangle = document.getElementById("gameEdition").getElementsByTagName("i")[0];
//跳转向杀人游戏页面
triangle.onclick = function(){
    window.location.href = "task2_index2.html";
}
