var maximumWealth = function (accounts) {
  var m = 0;
  for (let i = 0; i < accounts.length; i++) {
    for (let j = 0; j < accounts[i].length; i++) {
      m += accounts[j];
    }
  }
};
console.log(
  "the richest person has",
  maximumWealth(
    (accounts = [
      [1, 5],
      [7, 3],
      [3, 5],
    ])
  ),
  "in account"
);
