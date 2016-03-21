//添加item
function drawItem(number, judge) {
	var queueView = document.getElementById("queueView");
	var viewItem = document.createElement("div");
	viewItem.className = "view-item";
	viewItem.setAttribute('data-id', "item");
	viewItem.innerHTML = number;
	if (judge === "last") {
		queueView.appendChild(viewItem);
	} else if (judge === "before") {
		queueView.insertBefore(viewItem, queueView.firstChild);
	}
};

//删除item
function removeItem(judge) {
	var queueView = document.getElementById("queueView");
	if (judge === "last") {
		if(queueView.lastChild){
		var value = queueView.lastChild.innerHTML;
		queueView.removeChild(queueView.lastChild);
		alert(value);
		} else{
			alert("大兄弟！没啦！");
		}

	} else if (judge === "before") {
		if(queueView.firstChild){
		var value = queueView.firstChild.innerHTML;
		queueView.removeChild(queueView.firstChild);
		alert(value);
		} else{
			alert("大兄弟！没啦！");
		}

	} else if (judge === "item") {
		queueView.removeChild(arguments[1]);
	}
};

//判断字符串是否为数字,支持负数,浮点    
function checkRate(inputValue) {
	var check = /^-?[0-9]+.?[0-9]+$/;
	if (!check.test(inputValue)) {
		alert("请输入数字");
		document.getElementById("input").value = "";
		return false
	}
	return true
};

	//处理函数
var actionList = {
	"input": function() {	
	},
	//左侧入
	"left-enqueue": function() {
		var inputValue = document.getElementById("input").value;
		if (checkRate(inputValue)) {
			drawItem(inputValue, "before");
		}
	},
	//右侧入
	"right-enqueue": function() {
		var inputValue = document.getElementById("input").value;
		if (checkRate(inputValue)) {
			drawItem(inputValue, "last");
		}
	},
	//左侧出
	"left-dequeue": function() {
		removeItem("before");
	},
	//右侧出
	"right-dequeue": function() {
		removeItem("last");
	},
	//移除item
	"item": function(target) {
		removeItem("item", target);
	}
}
//click事件委托给body
document.body.addEventListener("click", function(event) {
	var target = event.target;
	//分配处理函数
	var actionName = target.getAttribute('data-id')
	var action = actionList[actionName];
	action(target);
	document.getElementById("input").value = "";
}, false);