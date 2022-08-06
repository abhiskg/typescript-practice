function factorial(number: number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result *= i;
  }
  return result;
}

console.log(factorial(4));

function factorial2(number: number) {
  let i = number;
  let result = 1;
  while (i >= 1) {
    result *= i;
    i--;
  }
  return result;
}

console.log(factorial2(4));
