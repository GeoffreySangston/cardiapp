function AlgorithmVFPulselessVT(){

	this.algorithmNum = Algorithm.VFPULSELESSVT;
	this.steps = [];
	var curStepNum = 0;
	var step;
	var response;
	var responseObjects;
	
	////////////////// STEP 0 /////////////////////////////////////
	step = new Step();
	step.questionString = "Chest compressions underway 30:2 ventilations AED or defib shows V-fib";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.VFPULSELESSVT;
	response.stepNum = 1;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;
	
	this.steps.push(step);
	
	////////////////// STEP 1 /////////////////////////////////////
	step = new Step();
	step.questionString = "Shock once at \"effective setting\" (360 monophasic, 120-200 biphasic) resume cpr";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.VFPULSELESSVT;
	response.stepNum = 2;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 2 /////////////////////////////////////
	step = new Step();
	step.questionString = "Oxygen start IV - Simulataneous 5 cycles of CPR";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.VFPULSELESSVT;
	response.stepNum = 3;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 3 /////////////////////////////////////
	step = new Step();
	step.questionString = "Check rhythym - resume CPR - shock";
	responseObjects = [];
	
	response = new Response();
	response.string = "IV ready";
	response.algorithmNum = Algorithm.VFPULSELESSVT;
	response.stepNum = 4;
	responseObjects.push(response);
	
	response = new Response();
	response.string = "IV not ready";
	response.algorithmNum = Algorithm.VFPULSELESSVT;
	response.stepNum = 3;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 4 /////////////////////////////////////
	step = new Step();
	step.questionString = "Check rhythym - resume CPR - shock";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.VFPULSELESSVT;
	response.stepNum = 5;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 5 /////////////////////////////////////
	step = new Step();
	step.questionString = "Special circumstances?";
	responseObjects = [];
	
	response = new Response();
	response.string = "Hyperkalemia/trcyclic tox";
	response.algorithmNum = Algorithm.VFPULSELESSVT;
	response.stepNum = 6;
	responseObjects.push(response);
	
	response = new Response();
	response.string = "Hypomagnesema";
	response.algorithmNum = Algorithm.VFPULSELESSVT;
	response.stepNum = 7;
	responseObjects.push(response);
	
	response = new Response();
	response.string = "Neither";
	response.algorithmNum = Algorithm.VFPULSELESSVT;
	response.stepNum = 8;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 6 /////////////////////////////////////
	step = new Step();
	step.questionString = "Bicarbonate 1 mEq/kg";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.VFPULSELESSVT;
	response.stepNum = 9;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 7 /////////////////////////////////////
	step = new Step();
	step.questionString = "Magnesium 1-2 gram";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.VFPULSELESSVT;
	response.stepNum = 9;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 8 /////////////////////////////////////
	step = new Step();
	step.questionString = "Amiodarone 300 mg bolus 2nd dose 150 mg";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.VFPULSELESSVT;
	response.stepNum = 9;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 9 /////////////////////////////////////
	step = new Step();
	step.questionString = "Check rhythm - resume cpr - shock";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.VFPULSELESSVT;
	response.stepNum = 10;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 10 /////////////////////////////////////
	step = new Step();
	step.questionString = "Intubate or LMA when ready";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.VFPULSELESSVT;
	response.stepNum = 11;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 11 /////////////////////////////////////
	step = new Step();
	step.questionString = "Rhythm check Q 2 minutes switch compressors epi 1 mg Q 3 min";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.VFPULSELESSVT;
	response.stepNum = 5;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);

}

AlgorithmVFPulselessVT.prototype = Object.create(Algorithm.prototype);