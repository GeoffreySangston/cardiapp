function AlgorithmAdultVentricularTachycardia(){
	this.algorithmNum = Algorithm.ADULTTACHYCARDIA;
	this.steps = [];
	
	var curStepNum = 0;
	var step;
	var response;
	var responseObjects;
	
	////////////////// STEP 0 /////////////////////////////////////
	step = new Step();
	step.questionString = "Patient age";
	responseObjects = [];
	
	response = new Response();
	response.string = "&#8804; 13";
	response.algorithmNum = Algorithm.GENERAL;
	response.stepNum = 1;
	responseObjects.push(response);
	
	response = new Response();
	response.string = "> 13";
	response.algorithmNum = Algorithm.GENERAL;
	response.stepNum = 1; 
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;
	step.prevStepNum = -1;
}

AlgorithmAdultVentricularTachycardia.prototype = Object.create(Algorithm.prototype);