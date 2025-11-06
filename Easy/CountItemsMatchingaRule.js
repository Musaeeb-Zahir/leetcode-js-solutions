var countMatches = function (items, ruleKey, ruleValue) {
  let match = 0;
  for (let i = 0; i < items.length; i++) {
    if (ruleKey == "color" && items[i][1] == ruleValue) {
      match += 1;
    }
    if (ruleKey == "type" && items[i][0] == ruleValue) {
      match += 1;
    }
    if (ruleKey == "name" && items[i][2] == ruleValue) {
      match += 1;
    }
  }
  return match;
};
console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "phone"],
      ["phone", "gold", "iphone"],
    ],
    (ruleKey = "type"),
    (ruleValue = "phone")
  )
);
