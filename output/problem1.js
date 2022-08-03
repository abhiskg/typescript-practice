"use strict";
for (let i = 58; i <= 98; i++) {
    console.log(i);
}
let num10 = 412;
while (num10 <= 456) {
    console.log(num10);
    num10 += 2;
}
for (let i = 581; i <= 623; i += 2) {
    console.log(i);
}
const allStudied = ["html", "css", "javascript"];
for (let i = 0; i < allStudied.length; i++) {
    console.log(allStudied[i]);
}
for (let i = 30; i <= 86; i++) {
    if (i === 44) {
        break;
    }
    console.log(i);
}
const booksPrice = [124, 567, 53, 667, 342];
for (let i = 0; i < booksPrice.length; i++) {
    if (booksPrice[i] > 200) {
        continue;
    }
    console.log(booksPrice[i]);
}
