// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

const calcDeposits = (acct) => {
  let tempSum = 0;
  if (acct.deposits !== undefined) {
    for (let depositAmounts of acct.deposits) {
      let calc = depositAmounts + tempSum;
      tempSum = calc;
    }
  }
  return tempSum;
};

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  // Your code goes here...
  let totalDeposits = [];
  for (let acct of array) {
    const deposits = calcDeposits(acct);
    if (deposits < 2000) {
      totalDeposits.push(acct);
    }
  }
  return totalDeposits;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
