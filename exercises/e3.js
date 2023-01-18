// EXERCISE 3
// Return the average value for the given array of numbers, f.i.
// getAverage([22, 45, 4, 65]) => 34

export function getAverage(array) {
  // Your code goes here...
  let minNumber = array[0]
  let maxNumber = array[0]
  for (let num of array) {
    if (num < minNumber) {
      minNumber = num
    }
  }
  for (let num of array) {
    if (num > maxNumber) {
      maxNumber = num
    }
  }
  return (minNumber + maxNumber) / 2
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
