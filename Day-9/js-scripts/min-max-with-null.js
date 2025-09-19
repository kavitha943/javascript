function minMax(nums){
   // We'll set the starting values of min and max
   // to null this time.
  const result={min:null,max:null};

  for(i=0;i<nums.length;i++){
    const value=nums[i];
    // If the min is null OR the value is
    // less than the min, update the min.
    if(result.min===null|| value<result.min){
      result.min=value;
    }
    // If the max is null OR the value is
    // greater than the max, update the max.
    if(result.max===null|| value>result.max){
      result.max=value;
    }
    // We have to use 2 if-statements above instead of
    // an if-else statement. This makes sure both the
    // min and max are set if they are null.
  }
  return result;
}
console.log(minMax([1,-3,5]));
console.log(minMax([]));
console.log(minMax([3]));