//获取九个小方格；
var squares = document.getElementById("box").getElementsByTagName("div");
//获取开始按钮
var btn1 = document.getElementById("btn1");
//获取结束按钮
var btn2 = document.getElementById("btn2");


//随机自动生成一个十六进制的颜色
function randomColor(){
	var arrColor1 = [];    
	var color = "#"
	for(var i =0; i < 6; i++){
		//将随机取得的数字转成16进制
		z = (Math.floor(Math.random()*16)).toString(16);  
		//将十六进制的数存入数组arrColor
		arrColor1.push(z);
	}
	color += arrColor1.join("");
	return color;
}


//随机获取三个不同的小方格
function randomSqr(){
	var arrSqrs = [];   //新建数组存放随机选取的方格
	for(var i = 0; i <10; i++){
		//随机生成0-squares.length之间的整数
		var num = Math.floor(Math.random()*(squares.length)); 
		//如果数组中已经存在数字num且数组的长度已经大于三，舍去此数
		if(arrSqrs.indexOf(num) == -1 && arrSqrs.length < 3){			arrSqrs.push(num);		
	    }
	}
	return arrSqrs;
}



//清除九宫格上的其他颜色，使其变为原来颜色
function clearColor(){
		for(var i = 0; i <squares.length;i++){
		squares[i].style.background = "orange";
	   }
    }


//闪光函数
function shine(){

    //随机获取三个不同的颜色组成数组
    var arrColor = [];  //可以容纳三个随机颜色的数组
    for(var i =0; i < 3; i++){
    	//用cl来接收函数randomColor()返回的随机颜色
	    var cl = randomColor();  
	    arrColor.push(cl);
    }

    //接收randomSqr()函数返回的小方格数组
    var arrSqrs = randomSqr();
    
    //清除九宫格上的其他颜色
    clearColor();

    //将是随机的三个小方格数组和三个随机颜色数组进行关联
	for(var i = 0; i < 3; i++){
	    squares[arrSqrs[i]].style.background = arrColor[i];
    }
}


var timer = null;
btn1.onclick = function(){
	clearInterval(timer);    //清除定时器
    timer = setInterval(shine,1000);
}

btn2.onclick=function(){
	clearColor();      //清楚颜色
	clearInterval(timer);  //关闭定时器
}
