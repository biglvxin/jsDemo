(function(e) {
	let EventUtil = {
				//绑定事件
				addHandler: function(element, type, handler) {
					if(element.addEventListener) {
						element.addEventListener(type, handler, false);//DOM2 事件处理程序
					} else if (element.attachEvent) {
						element.attachEvent('on' + type, handler);//IE 事件处理程序
					} else {
						element["on" + type] = handler; //DOM0 事件处理程序
					}
				},
				//解绑事件
				removeHandler: function(element, type, handler) {
					if(element.removeEventListener) {
						element.removeEventListener(type, handler, false);//DOM2 事件处理程序
					} else if(element.detachEvent) {
						element.detachEvent('on' + type, handler);//IE 事件处理程序
					} else {
						element["on" + type] = null;//DOM0 事件处理程序
					}
				},
				//得到事件对象
				getEvent: function(event) {
					//存在event就为DOM事件对象，不存在为window.event 为IE事件对象
					return event ? event: window.event;
				},
				getTarget: function(event) {
					return event ? event.target : event.srcElement;
				},
				preventDefault: function(event) {
					if (event.preventDefault) {
						event.preventDefault();
					} else {
						event.returnValue = false;//IE 事件对象 取消默认行为
					}
				},
				stopPropagation: function(event) {
					if (event.stopPropagation) {
						event.stopPropagation();
					} else {
						event.cancelBubble = true; //IE 事件对象 取消冒泡
					}
				},
				//相关元素：目标无素相对的元素为相关元素
				getRelatedTarget: function(event) {
					if (event.relatedTarget) {
						return event.relatedTarget; //IE不支持 dom级的属性
					} else if (event.toElement) {
						return event.toElement;//IE
					} else if(event.fromElement) {
						return event.formElement;//IE
					} else {
						return null;
					}
					
				},
				getButton: function(event) {
					if (document.implementation.hasFeature("MouseEvents", "2.0")) {
						return event.button;//DOM版
					} else {
						switch (event.button) {
							case 0:
							case 1:
							case 3:
							case 5:
							case 7:
								return 0;//按下鼠标左键
							case 2:
							case 6:
								return 2;//按下鼠标右键
							case 4:
								return 1;//按下鼠标中间键
						}
					}
				}
			}
	
	window.EventUtil = EventUtil;
		
})();
