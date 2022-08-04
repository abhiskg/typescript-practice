function multiplicationTable(num: number) {
  for (let i = num; i <= num * 10; i += num) {
    console.log(i);
  }
}
multiplicationTable(13);

//
function lowercaseConvert(name: string) {
  return name.toLowerCase();
}
const output = lowercaseConvert("AbHi");
console.log(output);

//
function fullName(firstName: string, lastName: string) {
  return firstName + " " + lastName;
}
console.log(fullName("Abhi", "Shek"));

//
function square(input: number) {
  return Math.pow(input, 2);
}
console.log(square(12));

//
function make_avg(value: number[]) {
  let total = 0;
  for (let i = 0; i < value.length; i++) {
    total = total + value[i];
  }
  return total / value.length;
}
const avg = make_avg([1, 2, 3, 4, 5]);
console.log(avg);

//
function odd_even(num: number) {
  if (num % 2 === 0) {
    return "Even no";
  } else {
    return "Odd no";
  }
}
console.log(odd_even(5));
