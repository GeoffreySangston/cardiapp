/*
Have to change current back system from previous step to maintaining an array of
steps and when they press back it'll just go to the previous step in the array

(because some algorithms are referred to by multiple sources)

*/

function ApplicationManager(InputManager,HTMLActuator,LocalStorageManager){
	this.inputManager = new InputManager;
	this.htmlActuator = new HTMLActuator;
	this.localStorageManager = new LocalStorageManager;
	
	this.inputManager.on("mouseup",this.mouseUp.bind(this));
	
	this.algorithms = [];
	this.algorithms[Algorithm.GENERAL] = new AlgorithmGeneral();
	this.algorithms[Algorithm.VFPULSELESSVT] = new AlgorithmVFPulselessVT();
	this.algorithms[Algorithm.VENTRICULARTACHYCARDIAADULT] = new AlgorithmVentricularTachycardiaAdult();
	this.algorithms[Algorithm.TACHYCARDIAPEDIATRIC] = new AlgorithmTachycardiaPediatric();
	this.algorithms[Algorithm.PEA] = new AlgorithmPEA();
	this.algorithms[Algorithm.ASYSTOLE] = new AlgorithmAsystole();
	this.algorithms[Algorithm.BRADYCARDIA] = new AlgorithmBradycardia();
	this.algorithms[Algorithm.BRADYCARDIAPEDIATRIC] = new AlgorithmBradycardiaPediatric();
	this.algorithms[Algorithm.VENTRICULARTACHYCARDIAADULT] = new AlgorithmVentricularTachycardiaAdult();
	this.algorithms[Algorithm.TACHYCARDIAPEDIATRIC] = new AlgorithmTachycardiaPediatric();
	this.algorithms[Algorithm.PVCTREATMENT] = new AlgorithmPVCTreatment();
	this.algorithms[Algorithm.SUPRAVENTTACHYCARDIAADULT] = new AlgorithmSupraVentTachycardiaAdult();
	this.algorithms[Algorithm.PULMONARYEDEMA] = new AlgorithmPulmonaryEdema();
	this.algorithms[Algorithm.BLOODPRESSUREMANAGEMENT] = new AlgorithmBloodPressureManagement();
	this.algorithms[Algorithm.BICARBONATETHERAPY] = new AlgorithmBicarbonateTherapy();
	this.algorithms[Algorithm.RCAFIBAFLUTTER] = new AlgorithmRCAFibAFlutter();
	
	this.curRecordNumStack; // when going back do pop 
	this.historyRecordNumStack; // when going back push the node pointed to by back
	this.pediatric;
	this.curRecord;
	this.init();
	this.actuate();

}

ApplicationManager.prototype.init = function(){
	var storedRecord = this.localStorageManager.getRecord();
	var storedCurRecordStackNum = this.localStorageManager.getCurRecordStackNum();
	var storedHistoryRecordStackNum = this.localStorageManager.getHistoryRecordStackNum();
	var storedPediatric = this.localStorageManager.getPediatric();
	if(storedRecord){
		this.curRecord = storedRecord;
		this.curRecordNumStack = storedCurRecordStackNum;
		this.historyRecordNumStack = storedHistoryRecordStackNum;
		this.pediatric = storedPediatric;
		if(storedRecord.inAlgorithms){
			this.startTimer();
		}
	} else {
		this.curRecord = new Record(Algorithm.GENERAL,0);
		this.curRecordNumStack = [];
		this.historyRecordNumStack = [];
		this.pediatric = false;
		
		this.curRecordNumStack.push({stepNum : this.curRecord.curStepNum, algorithmNum : this.curRecord.curAlgorithmNum});
		this.historyRecordNumStack.push({stepNum : this.curRecord.curStepNum, algorithmNum : this.curRecord.curAlgorithmNum});
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
	this.localStorageManager.setCurRecordStackNum(this.curRecordNumStack);
	this.localStorageManager.setHistoryRecordStackNum(this.historyRecordNumStack);
	this.localStorageManager.setPediatric(this.pediatric);
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
		if(this.curRecordNumStack.length > 1){
			this.curRecordNumStack.pop();
			
			this.curRecord.curStepNum = this.curRecordNumStack[this.curRecordNumStack.length-1].stepNum;
			this.curRecord.curAlgorithmNum = this.curRecordNumStack[this.curRecordNumStack.length-1].algorithmNum;
			this.historyRecordNumStack.push({stepNum : this.curRecord.curStepNum, algorithmNum : this.curRecord.curAlgorithmNum});
			
			this.actuate();
		}

		break;
	case HTMLActuator.RESPONSEONE:
		var algorithm = this.algorithms[this.curRecord.curAlgorithmNum];
		var step = algorithm.steps[this.curRecord.curStepNum];
		var response = step.responseObjects[0];
		console.log( response);

		if(this.curRecord.curAlgorithmNum == Algorithm.GENERAL && this.curRecord.curStepNum == 0){
			this.pediatric = true; // pediatric hack
		}
		
		if(!isNaN(response.stepNumB)){ // Normal step num will be for adult versions, B step num will be for pediatric versions
			if(this.pediatric){
				this.curRecord.curStepNum = response.stepNumB;
				this.curRecord.curAlgorithmNum = response.algorithmNumB;
			} else {
				this.curRecord.curStepNum = response.stepNum;
				this.curRecord.curAlgorithmNum = response.algorithmNum;
			}
		} else {
			this.curRecord.curStepNum = response.stepNum;
			this.curRecord.curAlgorithmNum = response.algorithmNum;
		}
		
		this.curRecordNumStack.push({stepNum : this.curRecord.curStepNum, algorithmNum : this.curRecord.curAlgorithmNum});
		this.historyRecordNumStack.push({stepNum : this.curRecord.curStepNum, algorithmNum : this.curRecord.curAlgorithmNum});	
		
		this.actuate();
		
		break;
	case HTMLActuator.RESPONSETWO:
		var algorithm = this.algorithms[this.curRecord.curAlgorithmNum];
		var step = algorithm.steps[this.curRecord.curStepNum];
		var response = step.responseObjects[1];
		
		if(this.curRecord.curAlgorithmNum == Algorithm.GENERAL && this.curRecord.curStepNum == 0){
			this.pediatric = false; // pediatric hack
		}
		
		if(!isNaN(response.stepNumB)){
			if(this.pediatric){
				console.log("curAlgNum: " + response.algorithmNumB);

				this.curRecord.curStepNum = response.stepNumB;
				this.curRecord.curAlgorithmNum = response.algorithmNumB;
			} else {
				this.curRecord.curStepNum = response.stepNum;
				this.curRecord.curAlgorithmNum = response.algorithmNum;
			}
		} else {
			this.curRecord.curStepNum = response.stepNum;
			this.curRecord.curAlgorithmNum = response.algorithmNum;

		}
		this.curRecordNumStack.push({stepNum : this.curRecord.curStepNum, algorithmNum : this.curRecord.curAlgorithmNum});
		this.historyRecordNumStack.push({stepNum : this.curRecord.curStepNum, algorithmNum : this.curRecord.curAlgorithmNum});
		
		this.actuate();
		break;
	case HTMLActuator.RESPONSETHREE:
		var algorithm = this.algorithms[this.curRecord.curAlgorithmNum];
		var step = algorithm.steps[this.curRecord.curStepNum];
		var response = step.responseObjects[2];
		if(!isNaN(response.stepNumB)){
			if(this.pediatric){
				this.curRecord.curStepNum = response.stepNumB;
				this.curRecord.curAlgorithmNum = response.algorithmNumB;
			} else {
				this.curRecord.curStepNum = response.stepNum;
				this.curRecord.curAlgorithmNum = response.algorithmNum;
			}
		} else {
			this.curRecord.curStepNum = response.stepNum;
			this.curRecord.curAlgorithmNum = response.algorithmNum;

		}
		this.curRecordNumStack.push({stepNum : this.curRecord.curStepNum, algorithmNum : this.curRecord.curAlgorithmNum});
		this.historyRecordNumStack.push({stepNum : this.curRecord.curStepNum, algorithmNum : this.curRecord.curAlgorithmNum});
		
		this.actuate();
		break;
	default:
		break;
	}
};
