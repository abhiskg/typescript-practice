"use strict";
// Function to convert Radian to Degree
function radianToDegree(radian) {
    if (typeof radian !== "number") {
        return "Please provide a valid number";
    }
    const degree = radian * 57.2958;
    return parseFloat(degree.toFixed(2));
}
console.log(radianToDegree(25));
// Function to check if given file is a javascript file or not.
function isJavaScriptFile(fileName) {
    if (typeof fileName !== "string") {
        return "Please provide a valid filename";
    }
    if (fileName.endsWith(".js")) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isJavaScriptFile("app.js.png"));
// Function to calculate total oil price
function oilPrice(dieselQty, petrolQty, octaneQty) {
    if (typeof dieselQty !== "number" ||
        typeof petrolQty !== "number" ||
        typeof octaneQty !== "number") {
        return "Please provide valid quantity";
    }
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;
    const dieselCost = dieselPrice * dieselQty;
    const petrolCost = petrolPrice * petrolQty;
    const octaneCost = octanePrice * octaneQty;
    const totalCost = dieselCost + petrolCost + octaneCost;
    return totalCost;
}
console.log(oilPrice(30, 20, 10));
// Function to calculate public bus fare from total member
function publicBusFare(totalMember) {
    if (typeof totalMember !== "number") {
        return "Please provide a valid member";
    }
    let busRequire = 0;
    let microBusRequire = 0;
    if (totalMember < 11) {
        return totalMember * 250;
    }
    if (totalMember >= 50) {
        busRequire = Math.floor(totalMember / 50);
    }
    let memberLeft = totalMember - busRequire * 50;
    if (memberLeft >= 11) {
        microBusRequire = Math.floor(memberLeft / 11);
    }
    memberLeft = memberLeft - microBusRequire * 11;
    return memberLeft * 250;
}
console.log(publicBusFare(235));
// Function to check if given two friends are best friend or not
function isBestFriend(firstFriend, secondFriend) {
    if (typeof firstFriend !== "object" || typeof secondFriend !== "object") {
        return "Please provide valid object";
    }
    if (firstFriend.name === secondFriend.friend &&
        firstFriend.friend === secondFriend.name) {
        return true;
    }
    else {
        return false;
    }
}
const firstFriend = { name: "abul", friend: "kabul" };
const secondFriend = { name: "kabul", friend: "sabul" };
console.log(isBestFriend(firstFriend, secondFriend));
