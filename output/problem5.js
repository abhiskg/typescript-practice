"use strict";
// Module 22
// Remove dublicate Array
function removeDuplicate(names) {
    const newNames = [];
    for (const name of names) {
        if (!newNames.includes(name)) {
            newNames.push(name);
        }
    }
    return newNames;
}
const names = ["abhi", "shek", "abhi", "sen", "gupta", "sen", "saikot"];
console.log(removeDuplicate(names));
// ParseInt shorthand
const hy = "45";
console.log(+hy);
// Foo-bar problem
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("foobar");
    }
    else if (i % 3 === 0) {
        console.log("foo");
    }
    else if (i % 5 === 0) {
        console.log("bar");
    }
    else {
        console.log(i);
    }
    {
    }
}
const phones = [
    {
        name: "Sumsung",
        camera: 12,
        storage: "32gb",
        price: 36000,
        color: "silver",
    },
    {
        name: "Xioami",
        camera: 12,
        storage: "32gb",
        price: 26000,
        color: "silver",
    },
    {
        name: "iPhone",
        camera: 12,
        storage: "32gb",
        price: 56000,
        color: "silver",
    },
    {
        name: "Realme",
        camera: 12,
        storage: "32gb",
        price: 30000,
        color: "silver",
    },
    { name: "Oppo", camera: 12, storage: "32gb", price: 24000, color: "silver" },
    { name: "Vivo", camera: 12, storage: "32gb", price: 37000, color: "silver" },
];
function cheapestPhone(phones) {
    let cheapPhonePrice = phones[0].price;
    for (let i = 0; i < phones.length; i++) {
        if (phones[i].price < cheapPhonePrice) {
            cheapPhonePrice = phones[i].price;
        }
    }
    return cheapPhonePrice;
}
console.log(cheapestPhone(phones));
const shoppingCart = [
    { name: "shoe", price: 1200 },
    { name: "shirt", price: 1900 },
    { name: "pant", price: 2200 },
    { name: "belt", price: 800 },
];
function totalCost(shoppingCart) {
    let totalCost = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        totalCost += shoppingCart[i].price;
    }
    return totalCost;
}
console.log(totalCost(shoppingCart));
const shoppingCart2 = [
    { name: "shoe", price: 1200, quantity: 2 },
    { name: "shirt", price: 1900, quantity: 4 },
    { name: "pant", price: 2200, quantity: 3 },
    { name: "belt", price: 800, quantity: 1 },
];
function totalCostWithQuantity(shoppingCart2) {
    let totalCost = 0;
    for (let i = 0; i < shoppingCart2.length; i++) {
        let productCost = shoppingCart2[i].price * shoppingCart2[i].quantity;
        totalCost += productCost;
    }
    return totalCost;
}
console.log(totalCostWithQuantity(shoppingCart2));
// Total Ticket Price
function totalTicketPrice(totalTicket) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restRate = 70;
    let totalPrice = 0;
    if (totalTicket <= 100) {
        totalPrice = totalTicket * first100Rate;
    }
    else if (totalTicket <= 200) {
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = totalTicket - 100;
        totalPrice = restTicketQuantity * second100Rate + first100Price;
    }
    else {
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = totalTicket - 200;
        totalPrice = restTicketQuantity * restRate + second100Price + first100Price;
    }
    return totalPrice;
}
console.log(totalTicketPrice(201));
// Prime no
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(14));
