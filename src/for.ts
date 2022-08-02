for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Display array by looping
const numArray = [2, 4, 6, 7, 8];

for (let i = 0; i < numArray.length; i++) {
  console.log(numArray[i]);
}

// Break Statement

for (let i = 0; i < 20; i++) {
  console.log(i);
  if (i > 5) {
    break;
  }
}

// Continue statement will skip the next line and will continue looping

const numbers = [2, 45, 3, 33, 9, 10];
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element > 10) {
    continue;
  }
  console.log(element);
}

// Reverse way of using i--

for (let i = 10; i >= 5; i--) {
  console.log(i);
}
