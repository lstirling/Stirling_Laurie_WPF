// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";
//Laurie Stirling, Expressions_Industry, 3-13-14

//How to calculate dog's Benedryl doseage by weight

var dogWeight = "1"; //dog's weight in lbs
var benedryl = 1; //benedryl dose in mg
var doseage = dogWeight * benedryl //dogs doseage of benedryl 1 mg per lb of body weight

var dogWeight = prompt("Enter your dog's weight here:"); //dog weight dialogue box for calculations
var doseage = "Your dog's benedryl doseage is " + dogWeight * benedryl + " mg"; //user entered dogs weight times 1mg equals benedryl doseage
alert(doseage); //result dialogue box

