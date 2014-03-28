// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

//Laurie Stirling, Functions_Wacky, 3-27-14

var tolerableVolume = function(level, maxLevel){ //added function
	var volume = level < maxLevel; //volume needs to be below maximum level
	return volume;
}

var lvl = tolerableVolume(15, 50); //volume ranges that can be tolerated.
	console.log(lvl);

var level = 15;
var maxLevel = 50;

while (level < maxLevel){
	console.log(level + " is an acceptable volume level.");
	level++;
}