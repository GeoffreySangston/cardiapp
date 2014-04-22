function ApplicationManager(InputManager,HTMLActuator,LocalStorageManager){
	this.inputManager = new InputManager;
	this.htmlActuator = new HTMLActuator;
	this.localStorageManager = new LocalStorageManager;
	
	this.inputManager.on("mouseup",this.mouseUp.bind(this));
	
	this.algorithms = [];
	this.algorithms[Algorithm.CARDIACARREST] = new AlgorithmCardiacArrest();
	this.algorithms[Algorithm.ACS] = new AlgorithmACS();
	this.algorithms[Algorithm.PEAASYSTOLE] = new AlgorithmPEAAsystole();
	
	this.curRecord;
	this.init();
	this.actuate();

}

ApplicationManager.prototype.init = function(){
	var storedRecord = this.localStorageManager.getRecord();
	if(storedRecord){
		this.curRecord = storedRecord;
		if(storedRecord.inAlgorithms){
			this.startTimer();
		}
	} else {
		this.curRecord = new Record(Algorithm.CARDIACARREST,0);
	}
}

ApplicationManager.prototype.actuate = function(){
	if(this.curRecord.inAlgorithms){
		this.htmlActuator.actuateAlgorithm(this.curRecord,this.algorithms[this.curRecord.curAlgorithmNum]);
		
	} else {
		if(this.localStorageManager.getRecord()){
			this.htmlActuator.actuateCover(true);
		} else {
			this.htmlActuator.actuateCover(false);
		}
	}
	
	this.localStorageManager.setRecord(this.curRecord);
};

ApplicationManager.prototype.startTimer = function(){
	this.timerId = window.requestAnimationFrame(this.updateTimer.bind(this));
};
ApplicationManager.prototype.stopTimer = function(){
	window.cancelAnimationFrame(this.timerId);
	console.log("STOPPED : " + this.timerId);
};
ApplicationManager.prototype.updateTimer = function(){
	this.htmlActuator.actuateTimer(this.curRecord);
	this.timerId = window.requestAnimationFrame(this.updateTimer.bind(this));
};

ApplicationManager.prototype.mouseUp = function(e){
	switch(this.htmlActuator.elementFromPoint(e.x,e.y)){
	case HTMLActuator.QUIT:
		this.curRecord.inAlgorithms = false;
		this.actuate();
		this.stopTimer();
		break;
	case HTMLActuator.START:
		this.localStorageManager.clearRecord();
		this.init();
		this.curRecord.inAlgorithms = true;
		this.actuate();
		this.startTimer();
		
		break;
	case HTMLActuator.CONTINUE:
		this.init();
		this.curRecord.inAlgorithms = true;
		this.actuate();
		this.startTimer();
		
		break;
	case HTMLActuator.BACK:
		prevStepNum = this.algorithms[this.curRecord.curAlgorithmNum].steps[this.curRecord.curStepNum].prevStepNum;
		if(prevStepNum >= 0){
			this.curRecord.curStepNum = prevStepNum;
			this.actuate();
		}
		break;
	case HTMLActuator.RESPONSEONE:
		var algorithm = this.algorithms[this.curRecord.curAlgorithmNum];
		console.log(algorithm);
		var step = algorithm.steps[this.curRecord.curStepNum];
		console.log(step);
		var response = step.responseObjects[0];
		console.log(response);
		this.curRecord.curStepNum = response.stepNum;
		this.curRecord.curAlgorithmNum = response.algorithmNum;
		
		console.log(this.curRecord);
		
		this.actuate();
		break;
	case HTMLActuator.RESPONSETWO:
		var algorithm = this.algorithms[this.curRecord.curAlgorithmNum];
		var step = algorithm.steps[this.curRecord.curStepNum];
		var response = step.responseObjects[1];
		
		this.curRecord.curStepNum = response.stepNum;
		this.curRecord.curAlgorithmNum = response.algorithmNum;
		
		this.actuate();
		break;
	case HTMLActuator.RESPONSETHREE:
		var algorithm = this.algorithms[this.curRecord.curAlgorithmNum];
		var step = algorithm.steps[this.curRecord.curStepNum];
		var response = step.responseObjects[2];
		
		this.curRecord.curStepNum = response.stepNum;
		this.curRecord.curAlgorithmNum = response.algorithmNum;
		
		this.actuate();
		break;
	default:
		break;
	}
};