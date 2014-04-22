function AlgorithmACS(){
	this.algorithmNum = Algorithm.ACS;
	this.steps = [];
	
	var curStepNum = 0;
	var step;
	var response;
	var responseObjects;
}

AlgorithmACS.prototype = Object.create(Algorithm.prototype);