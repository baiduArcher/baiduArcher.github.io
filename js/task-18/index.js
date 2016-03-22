var queueView = document.getElementById("queueView");

var actionList = {
	//左侧入
	"left-enqueue": function() {
		var inputValue = document.getElementById("input").value;
		if (checkRate(inputValue)) {
			addItem["addBefore"](inputValue);
		}
	},
	//右侧入
	"right-enqueue": function() {
		var inputValue = document.getElementById("input").value;
		if (checkRate(inputValue)) {
			addItem["addLast"](inputValue);
		}
	},
	//左侧出
	"left-dequeue": function() {
		removeItem["removeBefore"]();
	},
	//右侧出
	"right-dequeue": function() {
		removeItem["removeLast"]();
	},
	//移除item
	"item": function(target) {
		removeItem["removeItem"](target);
	}
}

var generateItem= function(number){
		var viewItem = document.createElement("div");
		viewItem.className = "view-item";
		viewItem.setAttribute('data-id', "item");
		viewItem.innerHTML = number;
		return viewItem
};

var addItem ={
	//向前插入元素
	addBefore: function(number) {
	queueView.insertBefore(generateItem(number), queueView.firstChild);
	},
	//向后插入元素
	addLast : function(number){
	queueView.appendChild(generateItem(number));
	}
};

var removeItem ={
	//向前删除元素
	removeBefore: function(){
		if(queueView.lastChild){
			var value = queueView.firstChild.innerHTML;
			queueView.removeChild(queueView.firstChild);
			alert(value);	
		} else{
			alert("没了");
		}
	},
	//向后删除元素
	removeLast: function(){
		if(queueView.lastChild){
		var value = queueView.lastChild.innerHTML;
		queueView.removeChild(queueView.lastChild);
		alert(value);
		}else{
			alert("没了");
		};
	},
	removeItem: function(target){
		queueView.removeChild(target);
	}
	
}

var checkRate = function (inputValue) {
	var check = /^-?[0-9]+\.?[0-9]+$/;
	if (!check.test(inputValue)) {
		alert("请输入数字");
		document.getElementById("input").value = "";
		return false;
	}
	return true
}

var buttonContainer = document.getElementById("button-container");
buttonContainer.addEventListener("click", function(event) {
actionClick();
}, false);	

var itemsContainer = document.getElementById("queueView");
itemsContainer.addEventListener("click", function(event) {
actionClick();
}, false);	

//点击函数
var actionClick = function(){
	var target = event.target;
	//分配处理函数
	var actionName = target.getAttribute('data-id');
	var action = actionList[actionName];
	action(target);
	document.getElementById("input").value = "";
};
