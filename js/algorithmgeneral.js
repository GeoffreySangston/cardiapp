function AlgorithmGeneral(){
	this.algorithmNum = Algorithm.GENERAL;
	this.steps = [];
	
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
	
	this.steps.push(step);
	////////////////// STEP 1 /////////////////////////////////////
	step = new Step();
	step.questionString = "Breathing?";
	responseObjects = [];
	
	response = new Response();
	response.string = "No";
	response.algorithmNum = Algorithm.GENERAL;
	response.stepNum = 2;
	responseObjects.push(response);
	
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 2 /////////////////////////////////////
	step = new Step();
	step.questionString = "Has pulse?";
	responseObjects = [];
	
	response = new Response();
	response.string = "Yes";
	response.algorithmNum = Algorithm.GENERAL;
	response.stepNum = 4;
	responseObjects.push(response);
	
	response = new Response();
	response.string = "No";
	response.algorithmNum = Algorithm.GENERAL;
	response.stepNum = 5;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 3 /////////////////////////////////////
	step = new Step();
	step.questionString = "";
	responseObjects =[];
	
	this.steps.push(step);
	////////////////// STEP 4 ///////////////////////////////////// Has Pulse
	
	step = new Step();
	step.questionString = "1 Breath every 5 seconds. Next";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.GENERAL;
	response.stepNum = 6;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 5 ///////////////////////////////////// Has no pulse
	
	step = new Step();
	step.questionString = "Hard/fast chest compressions. 2 breaths per 30 cc. Next";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.GENERAL;
	response.stepNum = 7;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 6 /////////////////////////////////////
	
	step = new Step();
	step.questionString = "Heart Rhythm";
	responseObjects = [];
	
	response = new Response();
	response.string = "> 100"; // SWITCH ALGORITHMS
	
	response.algorithmNum = Algorithm.VENTRICULARTACHYCARDIAADULT;
	response.stepNum = 0;
	response.algorithmNumB = Algorithm.TACHYCARDIAPEDIATRIC; // for now just this, gotta add support for choosing between adult and pediatric in future
	response.stepNumB = 0;
	
	responseObjects.push(response);
	
	response = new Response();
	response.string = "< 60"; // SWITCH ALGORITHMS
	response.algorithmNum = Algorithm.BRADYCARDIA;
	response.stepNum = 0;
	response.algorithmNumB = Algorithm.BRADYCARDIAPEDIATRIC;
	response.stepNumB = 0;
	responseObjects.push(response);
	
	response = new Response();
	response.string = "Normal";
	response.algorithmNum = Algorithm.GENERAL;
	response.stepNum = 8;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 7 /////////////////////////////////////
	step = new Step();
	step.questionString = "Shockable Rhythm?";
	responseObjects = [];
	
	response = new Response();
	response.string = "Yes";
	response.algorithmNum = Algorithm.VFPULSELESSVT;
	response.stepNum = 0;
	/*response.algorithmNumB = Algorithm.VFPULSELESSVTPEDIATRIC;
	response.stepNumB = 0;*/
	responseObjects.push(response);
	
	response = new Response();
	response.string = "No";
	response.algorithmNum = Algorithm.GENERAL;
	response.stepNum = 9;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 8 /////////////////////////////////////
	
	step = new Step();
	step.questionString = "Hypotension?";
	responseObjects = [];
	
	response = new Response();
	response.string = "Yes";
	response.algorithmNum = Algorithm.GENERAL;
	response.stepNum = 10;
	responseObjects.push(response);
	
	response = new Response();
	response.string = "No";
	response.algorithmNum = Algorithm.GENERAL;
	response.stepNum = 11;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 9 /////////////////////////////////////
	
	step = new Step();
	step.questionString = "Resume CPR. Check rhythm every 2 mins (5 cycles CPR). Next";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.GENERAL;
	response.stepNum = 12;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 10 //////////////////////////////////// Yes to hypotension
	step = new Step();
	step.questionString = "Fluid bolus. Recheck for cause";
	responseObjects = [];

	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 11 //////////////////////////////////// No to hypotension
	step = new Step();
	step.questionString = "Simply unresponsive? Evaluate for stroke, drugs, other pathology";
	responseObjects = [];

	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 12 ////////////////////////////////////
		step = new Step();
	step.questionString = "Complexes?";
	responseObjects = [];
	
	response = new Response();
	response.string = "EKG waves seen?";
	response.algorithmNum = Algorithm.PEA; // switch algorithm
	response.stepNum = 0;
	responseObjects.push(response);
	
	response = new Response();
	response.string = "Flatline?";
	response.algorithmNum = Algorithm.ASYSTOLE; // switch algorithm
	response.stepNum = 0;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
}
AlgorithmGeneral.prototype = Object.create(Algorithm.prototype);