function Step(questionString,responseObjects,prevStepNum,prevAlgNum){
	// step doesn't need to know its algorithm num
	this.questionString = questionString;
	this.responseObjects = responseObjects;
	this.prevStepNum = prevStepNum;
	this.prevAlgNum = prevAlgNum;
}