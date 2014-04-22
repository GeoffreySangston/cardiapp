function InputManager(){
	this.events = {};
	
	this.listen();
}

InputManager.prototype.listen = function(){
	var self = this;

	document.addEventListener('mousedown', function(e){
		var data = {x:e.x, y:e.y};
		self.emit("mousedown",data);
	});
	
	document.addEventListener('mouseup', function(e){
		var data = {x:e.x, y:e.y};
		self.emit("mouseup",data);
	});
};

InputManager.prototype.on = function(event, callback){
	if(!this.events[event]){
		this.events[event] = [];
	}
	this.events[event].push(callback);
};
InputManager.prototype.emit = function (event, data) {
	var callbacks = this.events[event];
	if (callbacks) {
		callbacks.forEach(function (callback) {
			callback(data);
		});
	}
};