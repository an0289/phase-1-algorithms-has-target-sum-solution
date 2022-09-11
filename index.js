function hasTargetSum(array, target) {
  // create object to keep track of numbers we've already seen
  const seenNumbers = {}
  // iterate throuh each number in the array => can add a console.log for 'seenNumber' to see how it's working
  for (const number of array) {
  // for the current number, identify a complement that adds to the target
    const complement = target - number 
  // check if any key on our object is the complement 
  // if so, return true 
    if (complement in seenNumbers) return true 
  // otherwise, add that number to the object 
    seenNumbers[number] = true 
  }
  return false 
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
