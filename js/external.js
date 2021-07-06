"use strict";
alert("Welcome to my Website!");
var favoriteColor = prompt("What is your favorite color?");
if (favoriteColor === 'blue') {
    alert("Blue is my favorite color too!");
}

var mermaid = prompt("How much (in dollars) does the Little Mermaid cost per day?");
let brotherBear = prompt("How much (in dollars) does Brother Bear cost per day?")
let hercules = prompt("How much (in dollars) does Hercules cost per day?")
let movieCost = console.log("The movies cost a total of " + ((mermaid * 3) + (brotherBear * 3) + (hercules * 3)) + (" dollars if rented for three days."))


var classIsNotFull = confirm("Is the class not full?"); // boolean
var classSchedulesCheck = confirm("Are there no schedule conflicts?"); // boolean
if (classIsNotFull && classSchedulesCheck) {alert("Student enrolled!");
} else {alert("Student not enrolled.");}