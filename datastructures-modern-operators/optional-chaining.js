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

if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);//without optional chaining : we have to check if openingHours exists and then check if mon exists before accessing open property

console.log(restaurant.openingHours.mon.open);//without optional chaining : if mon does not exist, it will throw an error

//with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);//with optional chaining : we can check if mon exists and then access open property if it exists, otherwise it will return undefined

//example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';//with optional chaining : we can check if openingHours[day] exists and then access open property if it exists, otherwise it will return undefined, and then we can use nullish coalescing operator to return 'closed' if open is undefined or null
  console.log(`On ${day}, we open at ${open}`);
}

//optional chaining on methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');//with optional chaining : we can check if order method exists and then call it if it exists, otherwise it will return undefined, and then we can use nullish coalescing operator to return 'Method does not exist' if order is undefined or null

console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');//with optional chaining : we can check if orderRisotto method exists and then call it if it exists, otherwise it will return undefined, and then we can use nullish coalescing operator to return 'Method does not exist' if orderRisotto is undefined or null

//optional chaining on arrays
const users = [
  { name: 'John', email: 'john@example.com' },
  { name: 'Jane', email: 'jane@example.com' },
];
console.log(users[0]?.name ?? 'User does not exist');//with optional chaining : we can check if users[0] exists and then access name property if it exists, otherwise it will return undefined, and then we can use nullish coalescing operator to return 'User does not exist' if users[0] is undefined or null