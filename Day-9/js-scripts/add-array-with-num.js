function addNum(array, num) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray[i] = array[i] + num;
  }
  return newArray;
}
console.log(addNum([1, 2, 3], 2));
console.log(addNum([-2, -1, 0, 99], 2));
console.log(addNum([1, 2, 3], 3));