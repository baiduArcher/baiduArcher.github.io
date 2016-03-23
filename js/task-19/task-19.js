var queue ={	
	//渲染部分
	//生成item
	generateItem: function(number){
		var viewItem = document.createElement("div");
		viewItem.className = "view-item";
		viewItem.style.height =number*4+"px";
		viewItem.style.marginTop = 400-number*4+"px"
		return viewItem
	},
	//对应的动作
	actionList: {
		//左侧入
		"left-enqueue": function() {
			var inputValue = document.getElementById("input").value
			if (queue.checkRate(inputValue)) {
				queue.addItem["addBefore"](inputValue);
				queue.itemsQueue["enQueueBefore"](inputValue);
				
			}
		},
		//右侧入
		"right-enqueue": function() {
			var inputValue = document.getElementById("input").value;
			if (queue.checkRate(inputValue)) {
				queue.addItem["addLast"](inputValue);
				queue.itemsQueue["enQueueLast"](inputValue);
			}
		},
		//左侧出
		"left-dequeue": function() {
			queue.removeItem["removeBefore"]();
			queue.itemsQueue["deQueueBefore"]();
		},
		//右侧出
		"right-dequeue": function() {
			queue.removeItem["removeLast"]();
			queue.itemsQueue["deQueueLast"]();
		},
		"sort": function(){
			queue.time = 1;
			if(queue.on===true){
				queue.on=false;
			queue.itemsQueue["quickSort"](queue.itemsQueue.itemsArray,  0, queue.itemsQueue.itemsArray.length-1);	

			}
		},
		random:function(){
			if(queueView.childNodes.length===60){

				for(var time1 = 59; time1>=0; time1--){
								queueView.removeChild(queueView.childNodes[time1]);
								queue.itemsQueue["deQueueLast"]()
				}
			}
			var randomLength = 60-queueView.childNodes.length;
			for (var time=1;time<=randomLength;time++){			
				var randomValue = Math.floor(Math.random()*90+10);
				queue.addItem["addLast"](randomValue);
				queue.itemsQueue["enQueueLast"](randomValue);
			}			
		}
	},
	addItem: {
		//向前插入元素
		addBefore: function(number) {
		if(queue.itemsQueue.itemsArray.length===60){
			alert("已满60个");
			return false
		};
		queueView.insertBefore(queue.generateItem(number), queueView.firstChild);
		},
		//向后插入元素
		addLast : function(number){
					if(queue.itemsQueue.itemsArray.length===60){
			alert("已满60个");
			return false
		};
		queueView.appendChild(queue.generateItem(number));
		}
	},
	removeItem: {
		//向前删除元素
		removeBefore: function(){
			if(queueView.lastChild){
				queueView.removeChild(queueView.firstChild);

			} else{
				alert("没了");
			}
		},
		//向后删除元素
		removeLast: function(){
			if(queueView.lastChild){
			queueView.removeChild(queueView.lastChild);
			}else{
				alert("没了");
			};
		}
	},
	//检查输入正确性
	checkRate: function (inputValue) {
		var check = /^([1-9][0-9]|100)$/;
		if (!check.test(inputValue)) {
			alert("请输入10-100的整数");
			document.getElementById("input").value = "";
			return false;
		}
		return true
	},
	//排序部分
	itemsQueue: {
		//	生成数组
		itemsArray: [],
		//数组前插入
		enQueueBefore:function(element){
			this.itemsArray.unshift(parseInt(element));
		},
		//数组后插入
		enQueueLast: function(element){
    		this.itemsArray.push(parseInt(element));	
		},
		//数组前删除
		deQueueBefore: function(element){
			this.itemsArray.shift();
		},
		//数组后删除
		deQueueLast: function(element){
		this.itemsArray.pop();
		},
		//快速排序
		quickSort: function(array, left, right){
			var index; //{1}			
		   	if (array.length > 1) { //{2}
				var partition = function(array, left, right) {
					var pivot = array[Math.floor((right + left) / 2)], //{8}
					i = left,                                      //{9}
					j = right;                                     //{10}				
					while (i <= j) {  
						while (array[i] < pivot) { 
							i++;
						}
						while (array[j] > pivot) {  //{13}
							j--;
						}
						if (i <= j) { //{14}
							swapQuickStort(array, i, j,queue.setTime());
							i++;
							j--;
						}
					}
					return i; //{16}
				};
				//数组内 位置交换，以及item位置交换
				var swapQuickStort = function(array, index1, index2,time){

					var aux = array[index1];
				    array[index1] = array[index2];
				    array[index2] = aux;
					(function(array, index1, index2,time){
						setTimeout(function timer(){
					//先克隆两个要交换位置的item
				    var cln=queueView.childNodes[index1].cloneNode(true);
				    var cln1=queueView.childNodes[index2].cloneNode(true);	
				    //删除旧item，插入新item
				    queueView.replaceChild(cln1, queueView.childNodes[index1]);
				    queueView.replaceChild(cln, queueView.childNodes[index2]);				    
						},100*time)//100就是每次item交换位置的间隔时间，可以随便设
					})(array, index1, index2,time)				    
				};				
		    	index = partition(array, left, right); //{3}	
		    	//递归
		        if (left < index - 1) {		        	
		            queue.itemsQueue["quickSort"](array, left, index - 1);
		        }		
		        if (index < right) {
		            queue.itemsQueue["quickSort"](array, index, right);
		        }	    			    			
			}
		}		
	},
	
	//事件处理
	actionClick: function(){
	var target = event.target;
	//分配处理函数
	var actionName = target.getAttribute('data-id');
	var action = this.actionList[actionName];
	action(target);
	//input框设为空
	document.getElementById("input").value = "";
	},
	//改变item时用到的setTimeOut的时间参数
	time:1
};
queue.setTime = (function(){
	//闭包使queue.time一直被引用，通过time++，使改变item时用到的setTimeOut函数的延时时间越来越长
				return function(){
					this.time++
					console.log(this.time)
					return this.time
	}
			})();
queue.on = true;
			
//监听点击事件，委托给父元素
//button点击事件
var queueView = document.getElementById("queueView");
var buttonContainer = document.getElementById("button-container");
buttonContainer.addEventListener("click", function(event) {
queue.actionClick();
}, false);	
