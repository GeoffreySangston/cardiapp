function AlgorithmPediatricTachycardia(){
	this.algorithmNum = Algorithm.PEDIATRICTACHYCARDIA;
	this.steps = [];
	var curStepNum = 0;
	var step;
	var response;
	var responseObjects;
	
	////////////////// STEP 0 /////////////////////////////////////
	step = new Step();
	step.questionString = "Assist breathing. Oxygen. Next";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.PEDIATRICTACHYCARDIA;
	response.stepNum = 1;
	responseObjects.push(response);
	
	
	step.responseObjects = responseObjects;
	step.prevStepNum = 6;
	step.prevAlgNum = Algorithm.GENERAL;
	
	this.steps.push(step);
	
	////////////////// STEP 1 /////////////////////////////////////
	step = new Step();
	step.questionString = "Take blood pressure. Begin IV line. Cardiac Monitor. Next";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.PEDIATRICTACHYCARDIA;
	response.stepNum = 2;
	responseObjects.push(response);
	
	
	step.responseObjects = responseObjects;
	step.prevStepNum = 0;
	step.prevAlgNum = Algorithm.PEDIATRICTACHYCARDIA;
	
	this.steps.push(step);
	
	////////////////// STEP 2 /////////////////////////////////////
	
	step = new Step();
	step.questionString = "QRS width";
	responseObjects = [];
	
	response = new Response();
	response.string = "Narrow";
	response.algorithmNum = Algorithm.PEDIATRICTACHYCARDIA;
	response.stepNum = 3;
	responseObjects.push(response);
	
	response = new Response();
	response.string = "Wide";
	response.algorithmNum = Algorithm.PEDIATRICTACHYCARDIA;
	response.stepNum = 4;
	responseObjects.push(response);
	
	
	step.responseObjects = responseObjects;
	step.prevStepNum = 1;
	step.prevAlgNum = Algorithm.PEDIATRICTACHYCARDIA;
	
	this.steps.push(step);
}

AlgorithmPediatricTachycardia.prototype = Object.create(Algorithm.prototype);