function AlgorithmBradycardia(){
	this.algorithmNum = Algorithm.BRADYCARDIA;
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
	response.algorithmNum = Algorithm.BRADYCARDIA;
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
	response.algorithmNum = Algorithm.BRADYCARDIA;
	response.stepNum = 2;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 2 /////////////////////////////////////
	step = new Step();
	step.questionString = "Signs or symptoms of poor perfusion?";
	responseObjects = [];
	
	response = new Response();
	response.string = "Good perfusion";
	response.algorithmNum = Algorithm.BRADYCARDIA;
	response.stepNum = 3;
	responseObjects.push(response);
	
	response = new Response();
	response.string = "Poor perfusion";
	response.algorithmNum = Algorithm.BRADYCARDIA;
	response.stepNum = 4;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 3 /////////////////////////////////////
	step = new Step();
	step.questionString = "Type II 2nd-degree AV or 3rd-degree block?";
	responseObjects = [];
	
	response = new Response();
	response.string = "Yes";
	response.algorithmNum = Algorithm.BRADYCARDIA;
	response.stepNum = 5;
	responseObjects.push(response);
	
	response = new Response();
	response.string = "No";
	response.algorithmNum = Algorithm.BRADYCARDIA;
	response.stepNum = 6;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 4 /////////////////////////////////////
	step = new Step();
	step.questionString = "Atropine .5 mg if needed, repeat Q 3 min, up to 3 mg";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.BRADYCARDIA;
	response.stepNum = 7;
	responseObjects.push(response);

	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 5 /////////////////////////////////////
	step = new Step();
	step.questionString = "Transvenous pacer";
	responseObjects = [];

	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 6 /////////////////////////////////////
	step = new Step();
	step.questionString = "Observe for change";
	responseObjects = [];

	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 7 /////////////////////////////////////
	step = new Step();
	step.questionString = "Dopamine 2-10 mcg/kg/min OR Epinephrine drip 2-10 mcg/min";
	responseObjects = [];
	
	response = new Response();
	response.string = "Successful";
	response.algorithmNum = Algorithm.BRADYCARDIA;
	response.stepNum = 8;
	responseObjects.push(response);
	
	response = new Response();
	response.string = "Unuccessful";
	response.algorithmNum = Algorithm.BRADYCARDIA;
	response.stepNum = 5;
	responseObjects.push(response);

	step.responseObjects = responseObjects;

	this.steps.push(step);

	////////////////// STEP 8 /////////////////////////////////////
	step = new Step();
	step.questionString = "Transcutaneous pacing";
	responseObjects = [];

	step.responseObjects = responseObjects;

	this.steps.push(step);
}

AlgorithmBradycardia.prototype = Object.create(Algorithm.prototype);