function HTMLActuator(){
	this.questionDiv = document.querySelector("#pc-question");
	this.responsesContainerDiv = document.querySelector("#pc-responses-container");
	this.backDiv = document.querySelector("#pc-back");
	this.coverDiv = document.querySelector("#pc-cover");
	this.startDiv = document.querySelector("#cover-start");
	this.continueDiv = document.querySelector("#cover-continue");
	this.timerDiv = document.querySelector("#pc-timer");
	this.quitDiv = document.querySelector("#pc-quit");
	
	this.responseDivs = document.getElementsByClassName("pc-response");
	
	
}

HTMLActuator.QUIT = 0;
HTMLActuator.START = 1;
HTMLActuator.CONTINUE = 2;
HTMLActuator.BACK = 3;
HTMLActuator.RESPONSEONE = 4;
HTMLActuator.RESPONSETWO = 5;
HTMLActuator.RESPONSETHREE = 6;

HTMLActuator.prototype.actuateCover = function(hasSaved){
	this.coverDiv.style.display = "block";
	if(hasSaved){
		this.continueDiv.style.display = "block";
	} else {
		this.continueDiv.style.display = "none";
	}
};

HTMLActuator.prototype.actuateAlgorithm = function(record,algorithm){
	this.coverDiv.style.display = "none";
	//this.responseDivs = document.getElementsByClassName("pc-response");
	
	console.log(algorithm);
	var step = algorithm.steps[record.curStepNum];
	this.questionDiv.innerHTML = step.questionString;
	var responseObjects = step.responseObjects;
	this.clearContainer(this.responsesContainerDiv);
	for(var i = 0; i < responseObjects.length; i++){
		var responseDiv = document.createElement("div");
		responseDiv.classList.add("pc-response");
		responseDiv.innerHTML = responseObjects[i].string;
		this.responsesContainerDiv.appendChild(responseDiv);
	}
	
	
};
HTMLActuator.prototype.actuateTimer = function(record){
	this.timerDiv.innerHTML = this.toTimeFormat(Math.floor((Date.now() - record.startTime)/1000));
};

HTMLActuator.prototype.clearContainer = function(containerDiv){
	while(containerDiv.firstChild){
		containerDiv.removeChild(containerDiv.firstChild);
	}
};

HTMLActuator.prototype.toTimeFormat = function(secs){
	var hours = Math.floor(secs/3600);
	var minutes = Math.floor((secs-hours*3600)/60);
	var seconds = secs % 60;
	return hours + ":" + minutes + ":" + seconds;
};

HTMLActuator.prototype.elementFromPoint = function(x,y){
	var element = document.elementFromPoint(x,y);
	if(element == this.quitDiv){
		return HTMLActuator.QUIT;
	} else if(element == this.startDiv){
		return HTMLActuator.START;
	} else if(element == this.continueDiv){
		return HTMLActuator.CONTINUE;
	} else if(element == this.backDiv){
		return HTMLActuator.BACK;
	} else if(this.responseDivs[0] && (element == this.responseDivs[0])){
		return HTMLActuator.RESPONSEONE;
	} else if(this.responseDivs[1] && (element == this.responseDivs[1])){
		return HTMLActuator.RESPONSETWO;
	} else if(this.responseDivs[2] && (element == this.responseDivs[2])){
		return HTMLActuator.RESPONSETHREE;
	}
	
	return -1;
};