function Record(curAlg,curStep){
	this.curAlgorithmNum = curAlg;
	this.curStepNum = curStep;
	this.startTime = Date.now();
	this.inAlgorithms = false; // if false will go to start/continue screen
}