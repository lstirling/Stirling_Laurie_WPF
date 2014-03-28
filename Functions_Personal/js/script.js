// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

//Laurie Stirling, Functions_Personal, 3-27-14

var kidWeight = 35; //Kids weight in pounds
var minWeight = 40; //Minimum weight to ride in front seat of car.
var airbagControl = 40 // max weight to ride in front seat with airbag turned off.

if(kidWeight > minWeight){ //if kids weight is less than 50 lbs he can sit up front

}else  if(kidWeight < minWeight) // can ride up front if under 40 lbs so airbag does not come on.
	
while  (kidWeight < 40){
	console.log( kidWeight +"lbs You can ride up front!");
	kidWeight++;
}