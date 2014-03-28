// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

//Laurie Stirling, Functions_Wacky, 3-27-14

var tolerableVolume = function(level, maxLevel){
	var volume = level < maxLevel;
	return volume;
}

var lvl = tolerableVolume(15, 50);
console.log(lvl);