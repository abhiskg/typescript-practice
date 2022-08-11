"use strict";
// Module 23.5
// Recursion Function(calling a function inside of that function is called recurstion)
function sum5(i) {
    console.log(i);
    if (i === 1) {
        return 1;
    }
    return i + sum5(i - 1);
}
console.log(sum5(5));
/*
5 + sum(4)
5 + 4 + sum(3)
5 + 4 + 3 + sum(2)
5 + 4 + 3 + 2 + sum(1)
5 + 4 + 3 + 2 + 1
*/
// Factorial Using recursion
function factorialRecursion(num) {
    if (num === 1) {
        return 1;
    }
    return num * factorialRecursion(num - 1);
}
console.log(factorialRecursion(5));
const products = [
    { id: 1, name: "iphone", price: 222200 },
    { id: 2, name: "Laptop madi", price: 222200 },
    { id: 3, name: "Shopeice", price: 222200 },
    { id: 4, name: "Nokia Phone", price: 222200 },
    { id: 5, name: "Bus", price: 222200 },
    { id: 6, name: "Vivo Phone", price: 222200 },
    { id: 7, name: "Computer", price: 222200 },
];
function matchedProduct(products, search) {
    let matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}
console.log(matchedProduct(products, "phone"));
