// Join Returns string
const joinInput = ["Ami", "bondhu", "kala", "kala"];
console.log(joinInput.join(" "));

// Slice(It doesn't change the main array)
const numSlice = [3, 4, 5, 6, 7, 8];
const numSliceAns = numSlice.slice(2, 5);
console.log(numSliceAns);

// splice remove elements from an array
// If necessary insert new array element
// Return deleted array
// Will change original array
const numSplice = [3, 5, 6, 7, 62, 2, 8];
console.log(numSplice.splice(1, 2, 4, 55));
console.log(numSplice);
