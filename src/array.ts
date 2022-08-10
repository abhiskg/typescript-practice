// Array is immutable can't change
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

// How to check an array
const friends: number[] = [34, 67, 86, 44];
console.log(typeof friends); //Ans:object
console.log(Array.isArray(friends)); //Ans: True

// How to check if an element is present in an array or not
console.log(friends.includes(18));
if (friends.indexOf(34) !== -1) {
}

// How to concat two array?
const oldFriends = ["Abhi", "Shamil"];
const newFriends = ["Shakil", "Anis"];
const allFriends = oldFriends.concat(newFriends);
console.log(allFriends);
