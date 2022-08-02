let num4 = 13;
let num5 = 43;
let num6 = 45;

let x: number;

//Solution 1

if (num4 > num5) {
  x = num4;
} else {
  x = num5;
}

if (x > num6) {
  x = x;
} else {
  x = num6;
}

console.log(x);

//Solution2

if (num4 >= num5 && num4 >= num6) {
  x = num4;
} else if (num5 >= num4 && num5 >= num6) {
  x = num5;
} else {
  x = num6;
}
console.log(x);

// Solution 3

x = Math.max(num4, num5, num6);
console.log(x);
