// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/
const array = [1, 3, 5];
const reverseArray = array.reverse();
console.log({ reverseArray });
console.log({ array }); // so .reverse changes the "array". Did NOT need to create another array
// another way to solve the exercise:
const otherArray = [];
for (let i = array.length - 1; i >= 0; i--) {
  otherArray.push(array[i]);
}
console.log("Remember that 'array' is now reversed:", otherArray);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/
console.log(Math.max(...array));
// another way to solve the exercise:
const arrayMax = [1, -23, 3, 125, 0];
let max = 0;
for (let i = 1; i < arrayMax.length; i++) {
  if (arrayMax[i - 1] < arrayMax[i]) {
    console.log(`array[i] at ${i - 1} is: ${arrayMax[i]}`);
    max = arrayMax[i];
    console.log(`max at ${i} is: ${max}`);
  }
}
console.log({ max });

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/
console.log(Math.min(...array));
// another way to solve the exercise:
const arrayMin = [1, -23, 3, 125, 0, -3434, 90];
let min = 0;
for (let i = 1; i < arrayMin.length; i++) {
  if (arrayMin[i - 1] < arrayMin[i]) {
    console.log(`array[i] at ${i - 1} is: ${arrayMin[i]}`);
    min = arrayMin[i - 1];
    console.log(`min at ${i} is: ${min}`);
  }
}
console.log({ min });

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/
let array1 = [1, 3, 5, 108];
let evenValuesArray = [];
for (let i = 0; i < array1.length; i++) {
  if (array1[i] % 2 === 0) {
    evenValuesArray.push(array1[i]);
    console.log(`at index ${i} there is an even number: ${array1[i]}`);
  } else {
    console.log(`there are NO even values in the array`);
  }
}
console.log({ evenValuesArray });
// using .filter
evenValuesArray = array1.filter((evenNr) => evenNr % 2 === 0);
console.log({ evenValuesArray });

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/
// let array2 = [1, 2, 3, 5, 108, 264];
// let removedEvenValues = [];
// for (let i = 0; i <= array2.length; i++) {
//   if (array2[i] % 2 === 0) {
//     removedEvenValues.push(array2[i]);
//     array2.slice(i, i + 1);
//   } else {
//     console.log(`the odd values will not be removed from the array`);
//   }
// }
// console.log({ removedEvenValues });
// console.log({ array2 });

let array2 = [1, 2, 3, 5, 108, 264];
let removedEvenValues = [];
for (let i = 0; i < array2.length; i++) {
  if (array2[i] % 2 === 0) {
    removedEvenValues.push(array2[i]);
    array2.splice(i, 1);
    i--; // we have to revert to a previous index in order for splice to work as expected
  } else {
    console.log(`the odd values will not be removed from the array`);
  }
}
console.log({ removedEvenValues });
console.log({ array2 });

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/
let string = "asdjg p a u09 4kas3-2u ra";
console.log(
  "The string without the vowels is: ",
  string.replace(/[aeiou]/gi, "")
);
// another solution:
let editedString = "";
for (let i = 0; i < string.length; i++) {
  if (
    string[i].toLocaleLowerCase() !== "a" &&
    string[i].toLocaleLowerCase() !== "e" &&
    string[i].toLocaleLowerCase() !== "i" &&
    string[i].toLocaleLowerCase() !== "o" &&
    string[i].toLocaleLowerCase() !== "u"
  ) {
    editedString += string[i];
  }
}
console.log({ editedString });
/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/
let array3 = [5435, 234, 3, 57, 90];
let increasedByOne = [];
for (let i = 0; i < array3.length; i++) {
  increasedByOne.push(array3[i] + 1);
}
console.log({ increasedByOne });

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/
let words = ["strive", "is", "great"];
let wordsLength = [];
for (let i = 0; i < words.length; i++) {
  wordsLength.push(words[i].length);
}
console.log({ wordsLength });
