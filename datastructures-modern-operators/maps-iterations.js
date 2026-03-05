'use strict';

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!']
]);
console.log(question);

//convert object to map
const openingHours = {
  thu: {
    open: 12,
    close: 22
  },
  fri: {
    open: 11,
    close: 23
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24
  }
};
console.log(Object.entries(openingHours));//we can use Object.entries() to convert an object into a map. It will return an array of key-value pairs in the form of an array of arrays.
const hoursMap = new Map(Object.entries(openingHours));//we can use the Map constructor to create a map from an array of key-value pairs. It will return a map with the key-value pairs from the array.
console.log(hoursMap);

//iteration of maps
//quiz app
console.log(question.get('question'));//we can use the get method to get the value of a key in the map. It will return the value of the key if it exists, otherwise it will return undefined.
for (const [key, value] of question) {//destructuring the key-value pairs in the map using for -of loop.
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
//const answer = Number(prompt('Your answer'));
//console.log(answer);

//console.log(question.get(question.get('correct') === answer ? true : false));//we can use the get method to check if the answer is correct or not. It will return 'Correct 🎉' if the answer is correct, otherwise it will return 'Try again!'.

//convert map to array
console.log([...question]);//we can use the spread operator to convert a map into an array. It will return an array of key-value pairs in the form of an array of arrays.
console.log([...question.keys()]);
console.log([...question.values()]);
console.log([...question.entries()]);//converts a map to an array