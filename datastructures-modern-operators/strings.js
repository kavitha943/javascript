'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);//we can also use string literals to access the characters in the string. It will return the character at the specified index.

console.log(airline.length);//we can use the length property to get the length of the string. It will return the number of characters in the string.

console.log(airline.indexOf('r'));

//
const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky');
  }
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');//whenever we call a method on a string, behind the scenes, JavaScript converts the string primitive to a String object, which has access to all the methods and properties of the String prototype. After the method is called, the String object is converted back to a string primitive. This is called autoboxing and unboxing.

console.log(new String('kavitha'));//it will return a String object with the value 'kavitha'. It is not a string primitive, but an object that has access to all the methods and properties of the String prototype. We can use the typeof operator to check the type of the value. It will return 'object' because it is a String object, not a string primitive.

console.log(typeof new String('kavitha'));//it will return 'object' because it is a String object, not a string primitive. We can use the valueOf() method to get the string primitive value of the String object. It will return 'kavitha' because it is the string primitive value of the String object.

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

//fix capitalization in name
//1.using slice method
const passenger = 'kAvIthA';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
//2.using function
const fixPassengerName = function (name) {
  const passengerLower = name.toLowerCase();
  const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(passengerCorrect);
}

fixPassengerName('kAvIthA');
fixPassengerName('sAmAnthA');

//comparing email
const email = 'kavitha@gmail.com';
const loginEmail = '  hello@kavitha.Io \n';
/* const lowerEmail=loginEmail.toLowerCase();
const trimmedEmail=lowerEmail.trim();//trim() method removes whitespace from both ends of a string. It does not change the original string, but returns a new string with the whitespace removed.
console.log(trimmedEmail); */

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

//replacing parts of a string
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');//replace() method replaces a specified value with another value in a string. It returns a new string with the specified value replaced. We can chain multiple replace() methods to replace multiple values in a string.
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));//it will replace only the first occurrence of the specified value in the string. It will return a new string with the first occurrence of the specified value replaced.

console.log(announcement.replaceAll('door', 'gate'));//it will replace all occurrences of the specified value in the string. It will return a new string with all occurrences of the specified value replaced.

console.log(announcement.replace(/door/g, 'gate'));//we can also use regular expressions to replace all occurrences of a specified value in a string. The /g flag in the regular expression indicates that the replacement should be done globally, i.e., for all occurrences of the specified value in the string.

//Booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));//includes() method determines whether a string contains a specified value. It returns true if the string contains the specified value, otherwise it returns false.

console.log(plane2.includes('Boeing'));//checks if given input string is present in the string or not. it returns true or flase.

console.log(plane2.startsWith('Ai'));//startsWith() method determines whether a string begins with the characters of a specified string. It returns true if the string begins with the specified string, otherwise it returns false.

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {//endsWith() method determines whether a string ends with the characters of a specified string. It returns true if the string ends with the specified string, otherwise it returns false.
  console.log('Part of the new Airbus family');
}

//practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
}
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

console.log("a+very+nice+string".split('+'));//split() method splits a string into an array of substrings based on a specified separator. It returns an array of substrings. We can use the split() method to split a string into an array of words or characters.

console.log("Kavitha gudibandi".split(' '));//it will split the string into an array of characters. It will return an array of characters.

const [firstName, lastName] = "Kavitha Gudibandi".split(' ');//we can also use destructuring assignment to assign the values of the array to variables. It will return the first name and last name as separate variables.
console.log(firstName, lastName);

const fullName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');//join() method joins all elements of an array into a string. It returns a string with all the array elements joined together. We can use the join() method to create a string from an array of words or characters.
console.log(fullName);

//capitalize each word in a name
const capitalizeName = function (name) {
  const names = name.split(' ');//array of names
  const capitalizedNames = [];
  for (const n of names) {
    /* capitalizedNames.push(n[0].toUpperCase() + n.slice(1)); */
    capitalizedNames.push(n.replace(n[0], n[0].toUpperCase()));//relace 1stcharacter with uppercase character and push it to capitalizedNames array.
  }
  console.log(capitalizedNames.join(' '));
}
capitalizeName('kavitha gudibandi');
capitalizeName('samantha smith');

//padding a string
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));//padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string. padEnd() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the end of the current string.

console.log('Kavitha'.padStart(25, '+').padEnd(30, '+'));//it will pad the string with '+' characters until the resulting string reaches the given length. The padding is applied from the start of the current string and then from the end of the current string.

//masking a credit card number
const maskCreditCard = function (number) {
  const string = number + '';//convert number to string-when one ofthe operands is a string, the other operand will be converted to a string as well.
  const last = string.slice(-4);
  return last.padStart(string.length, '*');
}
console.log(maskCreditCard(433784638646473844));
console.log(maskCreditCard('433784638646473844'));

//repeat a string
const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(5));//repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together. We can use the repeat() method to repeat a string a specified number of times.

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}
planesInLine(5);
planesInLine(3);
planesInLine(12);