// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

//Laurie Stirling, Conditionals_Wacky, 3-20-14

var taxReturn = 5000; // amount of tax return expected
var vacaPrice = 3500; // expected amount for vacation
var budget = 4000 // maximum amount to spend on vacation

if(vacaPrice < budget && taxReturn > 5000){
	console.log("You can go on Vacation!");

}else{
	console.log("It is out of our budget to go on Vacation at this time.");
}