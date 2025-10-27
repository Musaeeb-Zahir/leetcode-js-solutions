var lengthOfLastWord = function(s) {

   stringArr=s.trim().split(" ");
   return stringArr[stringArr.length-1].length;
};
console.log(lengthOfLastWord("   fly me   to   the moon  "));
