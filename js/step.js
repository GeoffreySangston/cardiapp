function Step(questionString,responseObjects,prevStepNum){
	// step doesn't need to know its algorithm num
	this.questionString = questionString;
	this.responseObjects = responseObjects;
	this.prevStepNum = prevStepNum;
}