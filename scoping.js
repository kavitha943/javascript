'use strict';
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  /* console.log(firstName); // can access variable from parent scope */
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';
      /*reassigning outer scope's variable */
      output = 'NEW OUTPUT!';

      var millenial = true;
      const str = `Oh, and you're  a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }

    }
    // console.log(str); // error: str is not defined
    console.log(millenial); // var is function scoped
    console.log(add(2, 3)); // error: add is not defined
    console.log(output);
  }
  printAge();
  return age;
}
const firstName = 'Jonas';
calcAge(1991);
//console.log(age); // error: age is not defined