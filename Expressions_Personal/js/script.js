// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";
//Laurie Stirling, Expressions_Personal, 3-13-14

//How many cans of food do my cats eat per day

var catNames = ["stanley", "olive", "nala"]; // my cats cats catNames
catNames[0] = 8; //stanley's weight in kg
catNames[1] = 6; //olive's weight in kg
catNames[2] = 4.5; //Nala's weight in kg

var kcal = 70;  //kcals needed per kg of body weight per day
var canFood = 75;  //kcal per 3 oz can of Purina Pro plan food

var stanIntake = catNames[0] * kcal / canFood + " cans per day"; //Stanley's food intake is equal to his weight times 70kcal divided by 75kcal (amount per can)
console.log(stanIntake);

var oliveIntake = catNames[1] * kcal / canFood + " cans per day";