function AlgorithmBradycardiaPediatric(){
	this.algorithmNum = Algorithm.BRADYCARDIAPEDIATRIC;
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
	response.algorithmNum = Algorithm.BRADYCARDIAPEDIATRIC;
	response.stepNum = 1;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;
	
	this.steps.push(step);
	
	////////////////// STEP 1 /////////////////////////////////////
	step = new Step();
	step.questionString = "Take blood pressure. Begin IV line. Cardiac Monitor. Next";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.BRADYCARDIAPEDIATRIC;
	response.stepNum = 2;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 2 /////////////////////////////////////
	step = new Step();
	step.questionString = "Bradycardia causing cardiorespiratory compromise?";
	responseObjects = [];
	
	response = new Response();
	response.string = "No Problems";
	response.algorithmNum = Algorithm.BRADYCARDIAPEDIATRIC;
	response.stepNum = 3;
	responseObjects.push(response);
	
	response = new Response();
	response.string = "Problems";
	response.algorithmNum = Algorithm.BRADYCARDIAPEDIATRIC;
	response.stepNum = 4;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 3 /////////////////////////////////////
	step = new Step();
	step.questionString = "Observe for change";
	responseObjects = [];
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 4 /////////////////////////////////////
	step = new Step();
	step.questionString = "Rate<60 + signs poor perfusion?";
	responseObjects = [];
	
	response = new Response();
	response.string = "Yes";
	response.algorithmNum = Algorithm.BRADYCARDIAPEDIATRIC;
	response.stepNum = 5;
	responseObjects.push(response);
	
	response = new Response();
	response.string = "No";
	response.algorithmNum = Algorithm.BRADYCARDIAPEDIATRIC;
	response.stepNum = 6;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 5 /////////////////////////////////////
	step = new Step();
	step.questionString = "Chest compressions";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.BRADYCARDIAPEDIATRIC;
	response.stepNum = 6;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 6 /////////////////////////////////////
	step = new Step();
	step.questionString = "AV block or suspected high vagal tone?";
	responseObjects = [];
	
	response = new Response();
	response.string = "Yes";
	response.algorithmNum = Algorithm.BRADYCARDIAPEDIATRIC;
	response.stepNum = 7;
	responseObjects.push(response);
	
	response = new Response();
	response.string = "No";
	response.algorithmNum = Algorithm.BRADYCARDIAPEDIATRIC;
	response.stepNum = 3;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 7 /////////////////////////////////////
	step = new Step();
	step.questionString = "Transcutaneous pacing";
	responseObjects = [];
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
}

AlgorithmBradycardiaPediatric.prototype = Object.create(Algorithm.prototype);