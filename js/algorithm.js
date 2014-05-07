function Algorithm(){
/*
Algorithms consist of steps
*/	
	this.algorithmNum;
	this.steps = [];

}
Algorithm.GENERAL = 0;
Algorithm.VFPULSELESSVT = 1; //vfib pulseless vtach
Algorithm.VFPULSELESSVTPEDIATRIC = 2; //vfib pulseless vtach pediatric
Algorithm.PEA = 3; // pulseless electrical activity
Algorithm.ASYSTOLE = 4;
Algorithm.ASYSTOLEPEDIATRIC = 5;
Algorithm.BRADYCARDIA = 6;
Algorithm.BRADYCARDIAPEDIATRIC = 7;
Algorithm.VENTRICULARTACHYCARDIAADULT = 8;
Algorithm.TACHYCARDIAPEDIATRIC = 9;
Algorithm.PVCTREATMENT = 10;
Algorithm.SUPRAVENTTACHYCARDIAADULT = 11;
Algorithm.PULMONARYEDEMA = 12;
Algorithm.BLOODPRESSUREMANAGEMENT = 13;
Algorithm.BICARBONATETHERAPY = 14;
Algorithm.RCAFIBAFLUTTER = 15; // rate control in a-fib and a-flutter