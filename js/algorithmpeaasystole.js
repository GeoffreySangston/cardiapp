function AlgorithmPEAAsystole(){
	this.algorithmNum = Algorithm.PEAASYSTOLE;
	this.steps = [];
	
	var curStepNum = 0;
	var step;
	var response;
	var responseObjects;
}
AlgorithmPEAAsystole.prototype = Object.create(Algorithm.prototype);