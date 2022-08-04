"use strict";
const pizza = {
    toppings: ["cheese", "sauce", "pepperoni"],
    crust: "deep dish",
    serves: 2,
};
console.log(pizza.toppings[2]);
// Another way of calling
console.log(pizza["crust"]);
// To see all keys in a array
console.log(Object.keys(pizza));
for (let value in pizza) {
    console.log(value);
}
pizza.crust = "Hy"; //Or pizza['crust'] = 'hy'
console.log(pizza.crust);
