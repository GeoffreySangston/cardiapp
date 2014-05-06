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
	this.curRecordStackNumKey = "currecordstack";
	this.historyRecordStackNumKey = "historyrecordstack";

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



LocalStorageManager.prototype.getCurRecordStackNum = function(){
	var myJSON = this.storage.getItem(this.curRecordStackNumKey);
	return myJSON ? JSON.parse(myJSON) : null;
};
LocalStorageManager.prototype.setCurRecordStackNum = function(currecordstack){
	this.storage.setItem(this.curRecordStackNumKey, JSON.stringify(currecordstack));
};
LocalStorageManager.prototype.clearCurRecordStackNum = function(){
	this.storage.removeItem(this.curRecordStackNumKey);
};



LocalStorageManager.prototype.getHistoryRecordStackNum = function(){
	var myJSON = this.storage.getItem(this.historyRecordStackNumKey);
	return myJSON ? JSON.parse(myJSON) : null;
};
LocalStorageManager.prototype.setHistoryRecordStackNum = function(historyrecordstack){
	this.storage.setItem(this.historyRecordStackNumKey, JSON.stringify(historyrecordstack));
};
LocalStorageManager.prototype.clearHistoryRecordStackNum = function(){
	this.storage.removeItem(this.historyRecordStackNumKey);
};




