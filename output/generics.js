"use strict";
const addId = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addId({
    name: "Mash",
    age: 40,
});
console.log(user.name);
const response = {
    status: 200,
    type: "success",
    data: {
        name: "test",
    },
};
