//maps are more useful than sets in js because they allow us to create key-value pairs
'use strict';

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));//

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23).set(true, 'We are open :D')
  .set(false, 'We are closed :(');//we can also chain the set method because it returns the map itself.


console.log(rest.get('name'));//we can use the get method to get the value of a key in the map. It will return the value of the key if it exists, otherwise it will return undefined.
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
rest.get(time > rest.get('open') && time < rest.get('close'));//we can also use the get method to check if the restaurant is open or closed based on the current time. It will return 'We are open :D' if the restaurant is open, otherwise it will return 'We are closed :('.

console.log(rest.has('categories'));//we can use the has method to check if a key exists in the map. It will return true if the key exists, otherwise it will return false.
rest.delete(2);//we can use the delete method to delete a key-value pair from the map. It will return true if the key was deleted, otherwise it will return false.
console.log(rest);
rest.clear();//we can use the clear method to delete all key-value pairs from the map. It will return undefined.
console.log(rest);
console.log(rest.size);//we can use the size property to get the number of key-value pairs in the map. It will return the number of key-value pairs in the map.


rest.set([1, 2], 'Test');//we can also use arrays as keys in a map. It will return the value of the key if it exists, otherwise it will return undefined.
console.log(rest.get([1, 2]));//it will return undefined because the array [1, 2] is a different object in memory than the array [1, 2] that we used as a key in the map. We can use the same array as a key to get the value of the key.

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));//it will return 'Test' because we are using the same array as a key in the map.