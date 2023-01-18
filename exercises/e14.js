// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

const findDepositSum = (acct) => {
  let tempDepositSum = 0;
  if (acct.deposits !== undefined) {
    for (let depositAmounts of acct.deposits) {
      let calc = depositAmounts + tempDepositSum;
      tempDepositSum = calc;
    }
  }
  return tempDepositSum;
};

const findWithdrawalSum = (acct) => {
  let tempWithdrawelSum = 0;
  if (acct.withdrawals !== undefined) {
    for (let withdrawalAmount of acct.withdrawals) {
      let calc = withdrawalAmount + tempWithdrawelSum;
      tempWithdrawelSum = calc;
    }
  }
  return tempWithdrawelSum;
};

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  if (array.length) {
    for (let acct of array) {
      const depositSum = findDepositSum(acct);
      const withdrawalSum = findWithdrawalSum(acct);
      if (depositSum - withdrawalSum !== acct.balance) {
        return [acct];
      }
    }
  }
  return [];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
