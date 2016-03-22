var queue ={	
	//生成item
	generateItem: function(number){
		var viewItem = document.createElement("div");
		viewItem.className = "view-item";
		viewItem.setAttribute('data-id', "item");
		viewItem.innerHTML = number;
		return viewItem
	},
	//对应的动作
	actionList: {
		//左侧入
		"left-enqueue": function() {
			var inputValue = document.getElementById("input").value
			if (queue.checkRate(inputValue)) {
				queue.addItem["addBefore"](inputValue);
			}
		},
		//右侧入
		"right-enqueue": function() {
			var inputValue = document.getElementById("input").value;
			if (queue.checkRate(inputValue)) {
				queue.addItem["addLast"](inputValue);
			}
		},
		//左侧出
		"left-dequeue": function() {
			queue.removeItem["removeBefore"]();
		},
		//右侧出
		"right-dequeue": function() {
			queue.removeItem["removeLast"]();
		},
		//移除item
		"item": function(target) {
			queue.removeItem["removeItem"](target);
		}
	},
	addItem: {
		//向前插入元素
		addBefore: function(number) {
		queueView.insertBefore(queue.generateItem(number), queueView.firstChild);
		},
		//向后插入元素
		addLast : function(number){
		queueView.appendChild(queue.generateItem(number));
		}
	},
	removeItem: {
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
		//删除元素
		removeItem: function(target){
			queueView.removeChild(target);
		}
	},
	//检查输入正确性
	checkRate: function (inputValue) {
		var check = /^-?[0-9]+\.?[0-9]+$/;
		if (!check.test(inputValue)) {
			alert("请输入数字");
			document.getElementById("input").value = "";
			return false;
		}
		return true
	},
	//事件处理
	actionClick: function(){
	var target = event.target;
	//分配处理函数
	var actionName = target.getAttribute('data-id');
	var action = this.actionList[actionName];
	action(target);
	document.getElementById("input").value = "";
	}	
}
//监听点击事件，委托给父元素
//button点击事件
var queueView = document.getElementById("queueView");
var buttonContainer = document.getElementById("button-container");
buttonContainer.addEventListener("click", function(event) {
queue.actionClick();
}, false);	
//item点击事件
var itemsContainer = document.getElementById("queueView");
itemsContainer.addEventListener("click", function(event) {
queue.actionClick();
}, false);	