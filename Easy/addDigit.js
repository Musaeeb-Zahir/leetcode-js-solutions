/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  do {
    var result = 0; //result 0
    let a = num.toString().split(""); // a=["3","8"]
    for (let i = 0; i < a.length; i++) {
      // 0 1
      result += Number(a[i]); //  result 3+8=11
    }
    num = result; //num=11
  } while (num.toString().split("").length !== 1); //["1","1"]
  return result;
};
console.log(addDigits(999));
