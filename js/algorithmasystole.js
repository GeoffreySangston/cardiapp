function AlgorithmAsystole(){
	this.algorithmNum = Algorithm.ASYSTOLE;
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
	response.algorithmNum = Algorithm.ASYSTOLE;
	response.stepNum = 1;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;
	
	this.steps.push(step);
	
	////////////////// STEP 1 /////////////////////////////////////
	step = new Step();
	step.questionString = "Oxygen Start IV";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.ASYSTOLE;
	response.stepNum = 2;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;
	
	this.steps.push(step);
	
	////////////////// STEP 2 /////////////////////////////////////
	step = new Step();
	step.questionString = "Epinephrine 1mg Q 3-5 min consider vasopressin 40 units in palce of 1st/2nd epi dose";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.ASYSTOLE;
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
	response.algorithmNum = Algorithm.ASYSTOLE;
	response.stepNum = 4;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 4 /////////////////////////////////////
	step = new Step();
	step.questionString = "Rhythm check after 5 cycles CPR (2 mins) confirm asystole with 2nd ECG lead. CPR.";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.ASYSTOLE;
	response.stepNum = 5;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 5 /////////////////////////////////////
	step = new Step();
	step.questionString = "Reversible cause?";
	responseObjects = [];
	
	response = new Response();
	response.string = "Yes";
	response.algorithmNum = Algorithm.ASYSTOLE;
	response.stepNum = 6;
	responseObjects.push(response);
	
	response = new Response();
	response.string = "No";
	response.algorithmNum = Algorithm.ASYSTOLE;
	response.stepNum = 7;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 6 /////////////////////////////////////
	step = new Step();
	step.questionString = "Known kyperkalemia, preexisting acidosis, or tricyclic tox?";
	responseObjects = [];
	
	response = new Response();
	response.string = "Yes";
	response.algorithmNum = Algorithm.ASYSTOLE;
	response.stepNum = 8;
	responseObjects.push(response);

	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 7 /////////////////////////////////////
	step = new Step();
	step.questionString = "Epi Q 3-5 min Rhythm check Q 2 mins switch compressors";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.ASYSTOLE;
	response.stepNum = 9;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 8 /////////////////////////////////////
	step = new Step();
	step.questionString = "Bicarbonate 1 mEq/kg";
	responseObjects = [];
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 9 /////////////////////////////////////
	step = new Step();
	step.questionString = "Intubate or LMA when ready";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.ASYSTOLE;
	response.stepNum = 10;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 10 /////////////////////////////////////
	step = new Step();
	step.questionString = "At 20 mins ALS. Possible salvage?";
	responseObjects = [];
	
	response = new Response();
	response.string = "Yes";
	response.algorithmNum = Algorithm.ASYSTOLE;
	response.stepNum = 11;
	responseObjects.push(response);
	
	response = new Response();
	response.string = "No";
	response.algorithmNum = Algorithm.ASYSTOLE;
	response.stepNum = 12;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 11 /////////////////////////////////////
	step = new Step();
	step.questionString = "Ongoing treatment of any reversible problem";
	responseObjects = [];
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 12 /////////////////////////////////////
	step = new Step();
	step.questionString = "Terminate efforts";
	responseObjects = [];
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
}

AlgorithmAsystole.prototype = Object.create(Algorithm.prototype);