'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  //3.ES6 enhanced object literals : we can use computed property names in object literals by using square brackets [] and writing an expression inside them. The expression will be evaluated and the result will be used as the property name.
  [weekdays[3]]: {
    open: 12,
    close: 22
  },
  [weekdays[4]]: {
    open: 11,
    close: 23
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  }
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //1.ES6+ enhanced object literals
  openingHours, //enhanced object literals : we can use variable name as property name and assign value to it without writing openingHours: openingHours

  //2.ES6+ Enhanced method definition : we can write method without function keyword and colon(:)
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);

  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }

};

//properties NAMES
const properties = Object.keys(openingHours);//Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would. In this case, it will return an array of the keys of the openingHours object, which are the days of the week that the restaurant is open.
console.log(properties);

let openStr = `We are open on ${properties.length} days : `;
for (const day of properties) {
  openStr += `${day}, `;
}

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

//property VALUES
const values = Object.values(openingHours);
console.log(values);

//entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {//we can use destructuring to extract the values of open and close from the value of each entry, which is an object with open and close properties. We can also use computed property names to create a string that includes the key (day of the week) and the open and close times.
  /* console.log(x); */
  const openStr = `On ${key} we open at ${open} and close at ${close}`;//
  console.log(openStr);
}