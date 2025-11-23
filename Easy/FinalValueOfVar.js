var finalValueAfterOperations = function(operations) {
  let X=0;
  operations.forEach(e=> {
  if(e.includes("++")) X++;
  else{
    X--;
  }
  });
  return X;
};
console.log(finalValueAfterOperations(["++X","X++","X++"]));
