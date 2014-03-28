// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

//Laurie Stirling, Functions_Industry, 3-27-14

var heartRate = 125; //patients heart rate
var lowRate = 100; //heart rate that is too low
var highRate = 200; //heart rate that is too fast
var normalRate;

if(heartRate >100){ //conditional
	normalRate = "Heart rate is normal."
	
}else heartRate = "Heart rate is too high!"
console.log(normalRate);

while (heartRate <200){
	console.log(heartRate + " is a normal heart rate.")
	heartRate++;
}