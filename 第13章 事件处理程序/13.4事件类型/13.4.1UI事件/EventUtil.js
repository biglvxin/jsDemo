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
				getTarge: function(event) {
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
				}
			}
	
	window.EventUtil = EventUtil;
		
})();
