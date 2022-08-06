// module 20
function leapYear(year: number) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(leapYear(2023));

//
function yearCheck(age: number) {
  if (age % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(yearCheck(27));

//
function convertToSec(time: number) {
  return time * 60 * 60;
}
console.log(convertToSec(4), "Sec");

//
function inchToFeet(inch: number) {
  const feet = inch / 12;
  return feet;
}
console.log(inchToFeet(84));

//
function milesToKm(miles: number) {
  return miles * 1.60934;
}
console.log(milesToKm(2));
