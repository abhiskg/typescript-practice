const case1 = "Abhi";
console.log(case1.toLocaleLowerCase());
const case2 = "Abhi";
console.log(case2.toUpperCase());

const searchCase = "Tumi bondhu kala Pakhi";
console.log(searchCase.toLocaleLowerCase().includes("pakhi"));
console.log(searchCase.search("umi"));
console.log(searchCase.indexOf("umi")); //*if not found index will be -1
console.log(searchCase.startsWith("Tumi"));
console.log(searchCase.endsWith("hi"));

//  *Split returns an array
console.log(searchCase.split(" "));
console.log(searchCase.slice(-5));
console.log(searchCase.substring(0, 4));

const case3 = "  Hi ";
console.log(case3.trim());

const fName = "Abhi";
const Lname = "Sen";

console.log(fName.concat(" ", Lname));
