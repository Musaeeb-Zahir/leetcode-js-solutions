/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  while (n > 2) {
    n = n / 2;
    n / 2;
  }
  if (n == 2 || n == 1) return true;
  return false;
};
console.log(isPowerOfTwo(1));
