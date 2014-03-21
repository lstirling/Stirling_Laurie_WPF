// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

//Laurie Stirling, Conditionals_Industry, 3-20-14

var temp = 35 //current temparature outside is 35 degrees
var lowTemp = 32 // minumum temperature outside to travel to work

if(temp > lowTemp){ // if the temperature is higher than 35 degrees you can travel to work.
	console.log ("You can safely travel to work today!");