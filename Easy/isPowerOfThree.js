/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while(n>=3){
        n=n/3
        n/3;
    }
    if(n==3 || n==1) return true;
    return false; 
};