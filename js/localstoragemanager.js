window.fakeStorage = {
	_data: {},

	setItem: function (id, val) {
		return this._data[id] = String(val);
	},

	getItem: function (id) {
		return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
	},

	removeItem: function (id) {
		return delete this._data[id];
	},

	clear: function () {
		return this._data = {};
	}
};
	
function LocalStorageManager() {
	this.recordKey = "record";

	var supported = this.localStorageSupported();
	this.storage = supported ? window.localStorage : window.fakeStorage;
	
	/*
	Need to track: current step,current algorithm, start time, steps+algorithm history
	*/
	
}

LocalStorageManager.prototype.localStorageSupported = function () {
	var testKey = "test";
	var storage = window.localStorage;

	try {
		storage.setItem(testKey, "1");
		storage.removeItem(testKey);
		return true;
	} catch (error) {
		return false;
	}
};

LocalStorageManager.prototype.getRecord = function(){
	var myJSON = this.storage.getItem(this.recordKey);
	return myJSON ? JSON.parse(myJSON) : null;
};

LocalStorageManager.prototype.setRecord = function(record){
	this.storage.setItem(this.recordKey, JSON.stringify(record));
};

LocalStorageManager.prototype.clearRecord = function(){
	this.storage.removeItem(this.recordKey);
};




