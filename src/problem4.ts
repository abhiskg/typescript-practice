// Module 21
function deleciousCake(jim: number, dela: number, chinku: number) {
  const highestMark = Math.max(jim, dela, chinku);
  if (highestMark === jim) {
    console.log("Jim will get the cake");
  } else if (highestMark === dela) {
    console.log("Dela will get the cake");
  } else {
    console.log("Chinku will get the cake");
  }
}
deleciousCake(45, 97, 78);

//max number
const allNum = [4, 5, 6, 7];
console.log(Math.max(...allNum));

function tallestInArrray(numbers: number[]) {
  let tallest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > tallest) {
      tallest = numbers[i];
    }
  }
  return tallest;
}
console.log(tallestInArrray([4, 5, 56, 7]));

// Reverse a string
function reverseString(inputString: string) {
  let reverseOutput = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reverseOutput += inputString[i];
  }
  return reverseOutput;
}
console.log(reverseString("I am Abhi"));

// Word reverse
function reverseWord(inputWord: string) {
  const inputArray = inputWord.split(" ");
  const newArray = [];
  for (let i = inputArray.length - 1; i >= 0; i--) {
    newArray.push(inputArray[i]);
  }
  return newArray.join(" ");
}
console.log(reverseWord("I am a good boy"));

// fibonacci
const fibo = [0, 1];

for (let i = 2; i <= 15; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo.join(" "));

// Min Number in an Array
function smallInArray(num: number[]) {
  let smallestNum = num[0];
  for (let i = 0; i < num.length; i++) {
    if (smallestNum > num[i]) {
      smallestNum = num[i];
    }
  }
  return smallestNum;
}
console.log(smallInArray([2, 3, 1, 5]));

// Min num between 3 number
function smallNumber(num1: number, num2: number, num3: number) {
  if (num1 < num2 && num1 < num3) {
    console.log(num1, "is the smallest");
  } else if (num2 < num3 && num2 < num1) {
    console.log(num2, "is the smallest");
  } else {
    console.log(num3, "is the smallest");
  }
}
smallNumber(3, 1, 9);

// Average of an array
function averageOfArray(iArray: number[]) {
  let sum = 0;
  for (let i = 0; i < iArray.length; i++) {
    sum += iArray[i];
  }
  return sum / iArray.length;
}
console.log(averageOfArray([2, 3, 4]), "is the avg of this array");

// Area of Rectangle
function areaOfRectangle(length: number, height: number) {
  return height * length;
}
console.log(areaOfRectangle(4, 5));

// Second heightest of an Array
function secondMaxOfArray(inputA: number[]) {
  const first = Math.max(...inputA);
  inputA.splice(inputA.indexOf(first), 1);
  return Math.max(...inputA);
}

console.log(secondMaxOfArray([2, 3, 4]));

// Second heightest of an Array(second Method)
function secondMaxOfArray2(input: number[]) {
  let largest = 0;
  let secondLargest = 0;

  for (const i of input) {
    if (i > largest) {
      largest = i;
    }
  }

  for (const j of input) {
    if (j > secondLargest && j < largest) {
      secondLargest = j;
    }
  }

  return secondLargest;
}
console.log(secondMaxOfArray2([2, 3, 4, 5]));
