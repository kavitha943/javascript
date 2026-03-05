'use strict';

const italianFood = new Set(['Pizza', 'Pasta', 'tomatoes', 'Risotto', 'gnocchi', 'garlic']);

const mexicanFood = new Set(['Tacos', 'Burrito', 'Quesadilla', 'garlic', 'tomatoes']);

const commonFoods = italianFood.intersection(mexicanFood);//intersection of two sets : it will return a new set with the common elements of the two sets.
console.log('Intersection:', commonFoods);
console.log([...commonFoods]);//we can also create an array from a set to get the unique values in the array. It will return an array of unique values.

const italianMexicanFusion = italianFood.union(mexicanFood);//union of two sets : it will return a new set with all the elements of the two sets.
console.log('Union:', italianMexicanFusion);
console.log([...italianMexicanFusion]);//we can also create an array from a set to get the unique values in the array. It will return an array of unique values.

console.log([...italianFood, ...mexicanFood]);//we can also create an array from a set to get the unique values in the array. It will return an array of unique values.
console.log([...new Set([...italianFood, ...mexicanFood])]);//returns an array of unique values by creating a set.

const uniqueItalianFoods = italianFood.difference(mexicanFood);//difference of two sets : it will return a new set with the elements of the first set that are not in the second set.
console.log('Difference italian:', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFood.difference(italianFood);
console.log('Difference mexican:', uniqueMexicanFoods);

const uniqueItalianAndMexicanFoods = italianFood.symmetricDifference(mexicanFood);//symmetric difference of two sets : it will return a new set with the elements of the first set that are not in the second set and the elements of the second set that are not in the first set.
console.log('Symmetric Difference:', uniqueItalianAndMexicanFoods);

console.log(italianFood.isDisjointFrom(mexicanFood));//disjoint sets : it will return true if the two sets have no common elements, and false otherwise.



