function AlgorithmPEA(){
	this.algorithmNum = Algorithm.PEA;
	this.steps = [];
	var curStepNum = 0;
	var step;
	var response;
	var responseObjects;
	
	////////////////// STEP 0 /////////////////////////////////////
	step = new Step();
	step.questionString = "CPR is resumed";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.PEA;
	response.stepNum = 1;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;
	
	this.steps.push(step);
	
	////////////////// STEP 1 /////////////////////////////////////
	step = new Step();
	step.questionString = "Epinephrine 1mg Q 3-5 min consider vasopressin 40 units in palce of 1st/2nd epi dose";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.PEA;
	response.stepNum = 2;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 2 /////////////////////////////////////
	step = new Step();
	step.questionString = "Resume CPR after drug";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.PEA;
	response.stepNum = 3;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 3 /////////////////////////////////////
	step = new Step();
	step.questionString = "Quick exam and history for cause";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.PEA;
	response.stepNum = 4;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 4 /////////////////////////////////////
	step = new Step();
	step.questionString = "Begin rapid saline infusion";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.PEA;
	response.stepNum = 5;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 5 /////////////////////////////////////
	step = new Step();
	step.questionString = "Quality CPR, epi 1 mg Q 3 min Switch compressors Q 2 min";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.PEA;
	response.stepNum = 6;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 6 /////////////////////////////////////
	step = new Step();
	step.questionString = "Waveform CO2 monitor";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.PEA;
	response.stepNum = 7;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 7 /////////////////////////////////////
	step = new Step();
	step.questionString = "Consider dopper,echocardiogram";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.PEA;
	response.stepNum = 8;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 8 /////////////////////////////////////
	step = new Step();
	step.questionString = "Evidence of tamponade?";
	responseObjects = [];
	
	response = new Response();
	response.string = "Yes";
	response.algorithmNum = Algorithm.PEA;
	response.stepNum = 9;
	responseObjects.push(response);
	
	response = new Response();
	response.string = "No";
	response.algorithmNum = Algorithm.PEA;
	response.stepNum = 10;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 9 /////////////////////////////////////
	step = new Step();
	step.questionString = "Pericardiocentesis";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.PEA;
	response.stepNum = 10;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 10 /////////////////////////////////////
	step = new Step();
	step.questionString = "Hyperkalemia, preexisitng acidosis, or tricyclic tox?";
	responseObjects = [];
	
	response = new Response();
	response.string = "Yes";
	response.algorithmNum = Algorithm.PEA;
	response.stepNum = 11;
	responseObjects.push(response);
	
	response = new Response();
	response.string = "No";
	response.algorithmNum = Algorithm.PEA;
	response.stepNum = 12;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 11 /////////////////////////////////////
	step = new Step();
	step.questionString = "Bicarbonate 1 mEq/kg";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.PEA;
	response.stepNum = 12;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 12 /////////////////////////////////////
	step = new Step();
	step.questionString = "Evidence of pneumothorax";
	responseObjects = [];
	
	response = new Response();
	response.string = "Yes";
	response.algorithmNum = Algorithm.PEA;
	response.stepNum = 13;
	responseObjects.push(response);
	
	response = new Response();
	response.string = "No";
	response.algorithmNum = Algorithm.PEA;
	response.stepNum = 14;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 13 /////////////////////////////////////
	step = new Step();
	step.questionString = "Needle decompression";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.PEA;
	response.stepNum = 14;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 14 /////////////////////////////////////
	step = new Step();
	step.questionString = "Terminate efforts?";
	responseObjects = [];

	this.steps.push(step);
}

AlgorithmPEA.prototype = Object.create(Algorithm.prototype);