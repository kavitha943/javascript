const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza'
]);
console.log(ordersSet);//Set is a collection of unique values. It can be used to store unique values of any type, whether primitive values or object references.

console.log(new Set('kavitha'));//Set(7) {'k', 'a', 'v', 'i', 't', 'h', 'a'}

console.log(ordersSet.size);//size property returns the number of unique values in the set.
console.log(ordersSet.has('Pizza'));//has() method returns a boolean indicating whether an element with the specified value exists in the Set or not.
console.log(ordersSet.has('Bread'));//false

ordersSet.add('Garlic Bread');//add() method adds a new element with the given value to the Set. If the value already exists, it will not be added again.

ordersSet.add('Garlic Bread');//it will not be added again because it already exists in the set.

ordersSet.delete('Risotto');//delete() method removes the specified element from the Set. It returns true if the element was successfully removed, and false if the element was not found in the Set.

ordersSet.clear();//clear() method removes all elements from the Set. It does not take any parameters and returns undefined.

console.log(ordersSet);

for (const order of ordersSet) console.log(order);//we can iterate over the set using for...of loop. It will return the unique values in the set.

//Example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef'];
const staffUnique = new Set(staff);//we can create a set from an array to get the unique values in the array. It will return a set of unique values .
const staffUniqueArray = [...new Set(staffUnique)];//we can also create an array from a set to get the unique values in the array. It will return an array of unique values.
console.log(staffUnique);//