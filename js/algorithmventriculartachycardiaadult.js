function AlgorithmVentricularTachycardiaAdult(){
	this.algorithmNum = Algorithm.VENTRICULARTACHYCARDIAADULT;
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
	response.algorithmNum = Algorithm.VENTRICULARTACHYCARDIAADULT;
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
	response.algorithmNum = Algorithm.VENTRICULARTACHYCARDIAADULT;
	response.stepNum = 2;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 2 /////////////////////////////////////
	step = new Step();
	step.questionString = "Serious signs or symptoms";
	responseObjects = [];
	
	response = new Response();
	response.string = "Stable";
	response.algorithmNum = Algorithm.VENTRICULARTACHYCARDIAADULT;
	response.stepNum = 3;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;
	
	response = new Response();
	response.string = "Unstable";
	response.algorithmNum = Algorithm.VENTRICULARTACHYCARDIAADULT;
	response.stepNum = 4;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 3 /////////////////////////////////////
	step = new Step();
	step.questionString = "QRS type";
	responseObjects = [];
	
	response = new Response();
	response.string = "Single QRS form";
	response.algorithmNum = Algorithm.VENTRICULARTACHYCARDIAADULT;
	response.stepNum = 8;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;
	
	response = new Response();
	response.string = "Polymorphic";
	response.algorithmNum = Algorithm.VENTRICULARTACHYCARDIAADULT;
	response.stepNum = 9;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 4 /////////////////////////////////////
	step = new Step();
	step.questionString = "Sedation";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.VENTRICULARTACHYCARDIAADULT;
	response.stepNum = 7;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	
	////////////////// STEP 7 /////////////////////////////////////
	step = new Step();
	step.questionString = "Non-synchronized shock if polymorphic";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.VENTRICULARTACHYCARDIAADULT;
	response.stepNum = 10;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 8 /////////////////////////////////////
	step = new Step();
	step.questionString = "If regular and monomorphic considner adenosine as therapeutic trial";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.VENTRICULARTACHYCARDIAADULT;
	response.stepNum = 11;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 9 /////////////////////////////////////
	step = new Step();
	step.questionString = "Consider immediate shock if non-syn shock not done expert consultation!";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.VENTRICULARTACHYCARDIAADULT;
	response.stepNum = 12;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);

	////////////////// STEP 10 /////////////////////////////////////
	step = new Step();
	step.questionString = "Cardiovert 100j : Cardiovert 200 j : Cardiovert 300 j : Cardiovert 360 j - Amiodarone 150 mg (repeat of required)";
	responseObjects = [];
	
	this.steps.push(step);
	
	////////////////// STEP 11 /////////////////////////////////////
	step = new Step();
	step.questionString = "Amiodarone 150 mg 10 min or procaine 20-50 mg/min or sotalol 100 mg 5 min";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.VENTRICULARTACHYCARDIAADULT;
	response.stepNum = 13;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 12 /////////////////////////////////////
	step = new Step();
	step.questionString = "Correct magnesium or electrolyte abnormality";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.VENTRICULARTACHYCARDIAADULT;
	response.stepNum = 14;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 13 /////////////////////////////////////
	step = new Step();
	step.questionString = "V-tach persists or patient becomes unstable?";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.VENTRICULARTACHYCARDIAADULT;
	response.stepNum = 15;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 14 /////////////////////////////////////
	step = new Step();
	step.questionString = "Long baseline or obvious torsades?";
	responseObjects = [];
	
	response = new Response();
	response.string = "Yes";
	response.algorithmNum = Algorithm.VENTRICULARTACHYCARDIAADULT;
	response.stepNum = 16;
	responseObjects.push(response);
	
	/*response = new Response();
	response.string = "No";
	response.algorithmNum = Algorithm.VENTRICULARTACHYCARDIAADULT;
	response.stepNum = 17;
	responseObjects.push(response);*/
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 15 /////////////////////////////////////
	step = new Step();
	step.questionString = "Cardioversion";
	responseObjects = [];
		
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 16 /////////////////////////////////////
	step = new Step();
	step.questionString = "Magnesium 2-4 gram";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.VENTRICULARTACHYCARDIAADULT;
	response.stepNum = 18;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 17 /////////////////////////////////////
	step = new Step();
	step.questionString = "Amiodarone 150 mg (may repeat x2)";
	responseObjects = [];
	
	/*response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.VENTRICULARTACHYCARDIAADULT;
	response.stepNum = 18;
	responseObjects.push(response);*/
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
	////////////////// STEP 18 /////////////////////////////////////
	step = new Step();
	step.questionString = "Isoproterenol 2-10 mcg/min Overdrive pacing";
	responseObjects = [];
	
	response = new Response();
	response.string = "Next";
	response.algorithmNum = Algorithm.VENTRICULARTACHYCARDIAADULT;
	response.stepNum = 15;
	responseObjects.push(response);
	
	step.responseObjects = responseObjects;

	this.steps.push(step);
	
}

AlgorithmVentricularTachycardiaAdult.prototype = Object.create(Algorithm.prototype);