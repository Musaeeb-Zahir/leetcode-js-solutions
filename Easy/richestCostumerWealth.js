var maximumWealth = function (accounts) {
  var arr = [];
  var sum = 0;
  for (let i = 0; i < accounts.length; i++) {
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    arr[i]=sum;
    sum=0;
  }
  
};
console.log(
  "the richest person has",
  maximumWealth(
    (accounts = [
      [
        [1, 5],
        [7, 3],
        [3, 5],
      ],
    ])
  ),
  "in account"
);
