var mostWordsFound = function (sentences) {
let noOfWords=sentences.map(Element=>Element.split(" ").length);
return Math.max(...noOfWords);
};
console.log(
  mostWordsFound(["please wait", "continue to fight", "continue to win"])
);
