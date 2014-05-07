function AlgorithmTachycardiaPediatric(){
	this.algorithmNum = Algorithm.TACHYCARDIAPEDIATRIC;
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
	response.algorithmNum = Algorithm.TACHYCARDIAPEDIATRIC;
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
	response.algorithmNum = Algorithm.TACHYCARDIAPEDIATRIC;
	response.stepNum = 2;
	responseObjects.push(response);
	
	
	step.responseObjects = responseObjects;

	
	this.steps.push(step);
	
	////////////////// STEP 2 /////////////////////////////////////
	
	step = new Step();
	step.questionString = "QRS width";
	responseObjects = [];
	
	response = new Response();
	response.string = "Narrow";
	response.algorithmNum = Algorithm.TACHYCARDIAPEDIATRIC;
	response.stepNum = 3;
	responseObjects.push(response);
	
	response = new Response();
	response.string = "Wide";
	response.algorithmNum = Algorithm.TACHYCARDIAPEDIATRIC;
	response.stepNum = 4;
	responseObjects.push(response);
	
	
	step.responseObjects = responseObjects;
	
	this.steps.push(step);
	
	////////////////// STEP 3 /////////////////////////////////////
	
	step = new Step();
	step.questionString = "12-lead EKG Brief history";
	responseObjects = [];
	
	response = new Response();
	response.string = "Sinus tach";
	response.algorithmNum = Algorithm.TACHYCARDIAPEDIATRIC;
	response.stepNum = 5;
	responseObjects.push(response);
	
	response = new Response();
	response.string = "PSVT";
	response.algorithmNum = Algorithm.TACHYCARDIAPEDIATRIC;
	response.stepNum = 6;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;
	
	this.steps.push(step);
	
	////////////////// STEP 4 /////////////////////////////////////
	
	step = new Step();
	step.questionString = "Consider adenosine if IV or IO in place";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.TACHYCARDIAPEDIATRIC;
	response.stepNum = 7;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;
	
	this.steps.push(step);
	
	////////////////// STEP 5 /////////////////////////////////////
	
	step = new Step();
	step.questionString = "Discover and treat underlying problem";
	responseObjects = [];
	
	step.responseObjects = responseObjects;
	
	this.steps.push(step);
	
	////////////////// STEP 6 /////////////////////////////////////
	
	step = new Step();
	step.questionString = "Vagal maneuvers";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.TACHYCARDIAPEDIATRIC;
	response.stepNum = 8;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;
	
	this.steps.push(step);
	
	////////////////// STEP 7 /////////////////////////////////////
	
	step = new Step();
	step.questionString = "Consider Sedation";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.TACHYCARDIAPEDIATRIC;
	response.stepNum = 9;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;
	
	this.steps.push(step);
	
	////////////////// STEP 8 /////////////////////////////////////
	
	step = new Step();
	step.questionString = "Significant delay in IV or IO line and patient remains unstable?";
	responseObjects = [];
	
	response = new Response();
	response.string = "Yes";
	response.algorithmNum = Algorithm.TACHYCARDIAPEDIATRIC;
	response.stepNum = 10;
	responseObjects.push(response);
	
	response = new Response();
	response.string = "No";
	response.algorithmNum = Algorithm.TACHYCARDIAPEDIATRIC;
	response.stepNum = 7;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;
	
	this.steps.push(step);
	
	////////////////// STEP 9 /////////////////////////////////////
	
	step = new Step();
	step.questionString = "Synchronize! Cardioversion .5 to 1 j/kg Cardioversion 2j/kg";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.TACHYCARDIAPEDIATRIC;
	response.stepNum = 11;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;
	
	this.steps.push(step);
	
	////////////////// STEP 10 /////////////////////////////////////
	
	step = new Step();
	step.questionString = "Adenosine .1 mg/kg : Adenosine .2 mg/kg (max dose 12 mg)";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.TACHYCARDIAPEDIATRIC;
	response.stepNum = 7;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;
	
	this.steps.push(step);
	
	////////////////// STEP 11 /////////////////////////////////////
	
	step = new Step();
	step.questionString = "Identify, treat cause?";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.TACHYCARDIAPEDIATRIC;
	response.stepNum = 12;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;
	
	this.steps.push(step);
	
	////////////////// STEP 12 /////////////////////////////////////
	
	step = new Step();
	step.questionString = "Amiodarone 5 mg/kg 20 mins or procainamide 15 mg/kg 30 mins";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.TACHYCARDIAPEDIATRIC;
	response.stepNum = 13;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;
	
	this.steps.push(step);
	
	////////////////// STEP 13 /////////////////////////////////////
	
	step = new Step();
	step.questionString = "Cardioversion";
	responseObjects = [];
	
	step.responseObjects = responseObjects;
	
	this.steps.push(step);
}

AlgorithmTachycardiaPediatric.prototype = Object.create(Algorithm.prototype);