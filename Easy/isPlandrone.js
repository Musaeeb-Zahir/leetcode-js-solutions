/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const regex = /[\W\_]/g;
  const sentence = s.replace(regex, "");
const sentenceArr=sentence.split("").reverse();
  let reverseString = "";
  sentenceArr.forEach(function (ch) {
    reverseString += ch;
  });
return sentence.toLowerCase()==reverseString.toLowerCase();
};
console.log(isPalindrome("0P"));
