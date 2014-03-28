// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

//Laurie Stirling, Functions_Industry, 3-27-14

var kidWeight = 35; //Kids weight in pounds
var minWeight = 40; //Minimum weight to ride in front seat of car.
var airbagControl = 40 // max weight to ride in front seat with airbag turned off.

if(kidWeight > minWeight){ //if kids weight is less than 50 lbs he can sit up front
	console.log("You can ride in front seat!");

}else  if(kidWeight < minWeight)
	console.log( " You can ride up front in vehicles where airbag is turned off.");
