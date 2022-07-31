"use strict";
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]);
fruits.pop();
fruits.push("Watermelon");
console.log(fruits.length); //length is a array property
// indexOf() is a method
let index = fruits.indexOf("Banana");
console.log(index);
console.log(fruits);
//set a array
let element = [45, 55];
element[0] = 4;
console.log(element);
// If we set variable to a pop method, variable will store the last element
const num3 = [22, 23, 34];
const lastNum = num3.pop();
console.log(lastNum);
