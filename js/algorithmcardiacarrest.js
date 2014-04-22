function AlgorithmCardiacArrest(){
	this.algorithmNum = Algorithm.CARDIACARREST;
	this.steps = [];
	
	var curStepNum = 0;
	var step;
	var response;
	var responseObjects;
	////////////////// STEP 0 /////////////////////////////////////
	step = new Step();
	step.questionString = "Start CPR";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.CARDIACARREST;
	response.stepNum = curStepNum+1;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;
	step.prevStepNum = -1;
	
	this.steps.push(step);
	curStepNum = 1;
	////////////////// STEP 1 /////////////////////////////////////
	step = new Step();
	step.questionString = "Give Oxygen";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.CARDIACARREST;
	response.stepNum = curStepNum+1;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;
	step.prevStepNum = curStepNum - 1;
	
	this.steps.push(step);
	curStepNum = 2;
	////////////////// STEP 2 /////////////////////////////////////
	step = new Step();
	step.questionString = "Attach Monitor/Defibrillator";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.CARDIACARREST;
	response.stepNum = curStepNum+1;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;
	step.prevStepNum = curStepNum - 1;
	
	this.steps.push(step);
	curStepNum = 3;
	////////////////// STEP 3 /////////////////////////////////////
	step = new Step();
	step.questionString = "Is Breathing?";
	responseObjects = [];
	
	response = new Response();
	response.string = "Yes";
	response.algorithmNum = Algorithm.CARDIACARREST;
	response.stepNum = curStepNum+1;
	responseObjects.push(response);
	
	response = new Response();
	response.string = "No";
	response.algorithmNum = Algorithm.CARDIACARREST;
	response.stepNum = curStepNum+2;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;
	step.prevStepNum = curStepNum - 1;
	
	this.steps.push(step);
	curStepNum  = 5;
	
}
AlgorithmCardiacArrest.prototype = Object.create(Algorithm.prototype);