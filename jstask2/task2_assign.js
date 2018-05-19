//获取左上角返回箭头
var goBack = document.getElementsByTagName("header")[0].getElementsByTagName("i")[0];

//获取玩家总人数输入框
var quantity = document.getElementById("quantity");

//获取杀手人数输入框
var killer = document.getElementById("killer");

//获取平民人数输入框
var civilian = document.getElementById("civilian");

//获取去发牌按钮
var dealCard = document.getElementsByTagName("button")[0];

//获取放置分配结果的div
var assignResult = document.getElementById("assign_result");

//获取点击配置的div
var assign = document.getElementById("config");

//获取滑动条
var range = document.getElementById("range");

//获取滑动条左边的减号
var reduce = document.getElementById("reduce");

//获取滑动条右边的加号
var add = document.getElementById("add");


//返回上一页（即杀人游戏页面）
goBack.onclick = function(){
	window.location.href = "task2_index2.html";
}

//设置一个用来判断函数是否点击的开关，默认为true
var onOff = true;

//点击 点击设置按钮时，触发分配函数，自动分配杀手和平民
assign.onclick = function(){
	assignment();
	//当点击设置按钮被点击时，开关变为false
	onOff = false;
}

//用正则表达式检测玩家输入框,输入范围在4-18之间
var regex = /^[4-9]$|^1([0-8])$/;
//当input失去焦点时，判断input中输入的玩家数量是否正确
quantity.onblur = function(){
	//用test方法检测quantity.value（玩家输入框）中的数字是否符合正则表达式
	if(!regex.test(quantity.value) ){
			confirm("请输入正确的玩家数量！");
			//将玩家数量输入框的数字还原到滑动条上的数字
			quantity.value = range.value;
	}
}

//玩家分配函数
function assignment(){   

	//将正确的玩家总人数进行动态分配
    killer.value = Math.floor(parseInt(quantity.value)/3);
    civilian.value = parseInt(quantity.value) - parseInt(killer.value);

    //将杀手和平民身份打乱并分给玩家   	
	var player = [];  
	//通过for循环建立一个长度为玩家总人数的数组
	for(var i = 0; i < parseInt(quantity.value); i++){
		player.push(i);
	}

	//将数组乱序排列
	var arrRandom = player.concat();  
	for(var i = arrRandom.length; i-- ;){
		//随机生成一个在0-i之间的数字,并随机交换第i和第j个数字
		var j = Math.floor(Math.random()*(i+1));
		var temp = arrRandom[i];   //借助临时变量交换数字
		arrRandom[i] = arrRandom[j];
		arrRandom[j] = temp;
	}

    //将分配结果显示在相应的页面
    assignResult.innerHTML = "";          //首先清除页面的内容
	for(var i = 0; i < arrRandom.length; i++){
		//假设数组前parseInt(killer.value)个数字是杀手，
		if(arrRandom[i] < parseInt(killer.value)){
			assignResult.innerHTML += "<div class='assignResult'><span class='orange'></span>"+"杀手"+"</div>";
		}else{
			assignResult.innerHTML += "<div class='assignResult'><span class='blue'></span>"+"平民"+"</div>";
		}
	}		
	 
}


//点击去发牌按钮，如果输入玩家人数正确且已经分配，则跳转到翻牌页面，否则显示错误提醒
dealCard.onclick = function(){
	if(onOff){
	    confirm("请分配玩家数量！");
	}else if(parseInt(quantity.value) !== parseInt(killer.value) + parseInt(civilian.value)){
		confirm("请重新配置人数！");
	}else{
		window.location.href="task2_flop.html";
	}
}

//////////////滑动条的设置//////////////////////////////////////

//将滑动条的值与玩家输入框的值绑定
quantity.value = range.value;

range.onclick = bind;

function bind(){
	quantity.value = range.value;
}

//点击左边减号，滑动条左滑减少
reduce.onclick=function(){
	range.value --;
	bind();   //滑动条变化时自动赋值给input
}
//点击右边加号，滑动条右滑增加
add.onclick = function(){
	range.value ++;
	bind();  //滑动条变化时自动赋值给input
}


//滑动条设置拖拽时自动填充颜色设置，兼容chrome
$('input[type="range"]').change(function () {       //滚动条出现变化时

	//滑块所在位置占整个滚动条的比例
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    
    //设置滚动条之前的颜色和滚动条之后的颜色
    $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #fab344), '
                + 'color-stop(' + val + ', #ffe6be)'
                + ')'
                );
});


















