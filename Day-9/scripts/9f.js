function addOne(array) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray[i] = array[i] + 1;
  }
  return newArray;
}
console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));