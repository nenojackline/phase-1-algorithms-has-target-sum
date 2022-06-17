function hasTargetSum(array, target) {
  // Write your algorithm here

  //n 
for (let i = 0; i < array.length; i++){

  let compliment = target-array[i];
  for (let j = i+1; j < array.length; j++) {
    if (array[j] === compliment){return true;}
  //nested loop n*2
 
  for (let j = 0; j < array.length; j++) {
    if (array[j] === compliment  && i!=j){
      return true;
    }
  }
  return false;
  }
}
}

// hasTargetSum([3, 8, 12, 4, 11, 7],10)
// hasTargum([22, 19, 4, 6, 30], 25)
// hasTargetSum([1, 2, 5], 4)
// hasTargetSum([-7, 10, 4, 8], 3)
// hasTargetSum([1, 2, 3, 4], 5)
// hasTargetSum( [2, 2, 3, 3], 4)
// hasTargetSum([4], 4)
console.log(hasTargetSum([22, 19, 4, 6, 30],25));
/* 
  Write the Big O time complexity of your function here
  time complexity:0(n^2)
  space complexity: 0(n)
*/

/* 
  Add your pseudocode here
  function
  loop 1
  loop 2
  write a condition to find the other number
  return array with the position
*/

/*
  Add written explanation of your solution here
  take one argument from array, subtract it from target then compare it 
  to the other values in array. if it matches return true if not
  go to another value and repeat till you run out of 
  values in array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25))

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
