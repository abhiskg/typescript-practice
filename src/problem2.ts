// Module 20 Practice Problems
function timeConversion(hour: number) {
  return hour * 60;
}
console.log("Total minutes:", timeConversion(2));

//
let leapYears: number[] = [];
function findLeapYear(years: number[]) {
  for (let i = 0; i < years.length; i++) {
    if ((years[i] % 4 === 0 && years[i] % 100 !== 0) || years[i] % 400 === 0) {
      leapYears.push(years[i]);
    }
  }

  return leapYears;
}
findLeapYear([2023, 2024, 2025, 2028, 2030]);
console.log(leapYears);

//
let oddSum = 0;
function findOddSum(oddSumInput: Array<number>) {
  for (let i = 0; i < oddSumInput.length; i++) {
    if (oddSumInput[i] % 2 !== 0) {
      oddSum += oddSumInput[i];
    }
  }
  return oddSum;
}
console.log(findOddSum([5, 7, 8, 10, 45, 30]));
