/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  console.log("function runnign");

  let sum = 0;
  let product = 1;
  const numberArr = n.toString().split("");
  let i = 0;
  while (i < numberArr.length) {
    sum += Number(numberArr[i]);
    product *= Number(numberArr[i]);
    i++;
  }

  const result = product - sum;
  return result;
};
console.log(subtractProductAndSum(4421));
