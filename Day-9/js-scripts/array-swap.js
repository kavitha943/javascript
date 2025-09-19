function arraySwap(array){
  const lastValue = array[array.length-1];
  //console.log(lastValue);
  const firstValue=array[0];
  //console.log(firstValue);
  array[0]=lastValue;
  array[array.length-1]=firstValue;
  return array;

}
console.log(arraySwap([1,20,22,24,5]));
console.log(arraySwap(['hi','hello','good']));