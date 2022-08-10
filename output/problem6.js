"use strict";
// Module 22.5
// Feet to Inch
function feetToInch(feet) {
    const inch = feet * 12;
    return inch;
}
console.log(feetToInch(2));
// Centimeter to meter
function centimeterToMeter(centimeter) {
    return centimeter / 100;
}
console.log(centimeterToMeter(200));
// Total Required paper
const firstPageNeed = 100;
const secondPageNeed = 200;
const thirdPageNeed = 300;
function paperRequirements(firstCopy, secondCopy, thirdCopy) {
    const totalRequiredPaper = firstCopy * firstPageNeed +
        secondCopy * secondPageNeed +
        thirdCopy * thirdPageNeed;
    return totalRequiredPaper;
}
console.log(paperRequirements(3, 4, 5));
// Long name friend will be the best friend
function bestFriend(name) {
    let bestBuddy = name[0];
    for (let i = 0; i < name.length; i++) {
        if (bestBuddy.length < name[i].length) {
            bestBuddy = name[i];
        }
    }
    return bestBuddy;
}
console.log(bestFriend(["rakib", "sakib", "hossen ershad", "soyeb Akter"]));
// Checking +ve number from array and break if -ve number is found
function positiveArray(num) {
    const newArray = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] >= 0) {
            newArray.push(num[i]);
        }
        else {
            break;
        }
    }
    return newArray;
}
console.log(positiveArray([2, 3, 5, 6, 8, -4, 6, 7, -8]));
