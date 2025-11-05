var buildArray = function (nums) {
  var ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]];
  }
  const distinctArr = new Set(ans);
  return [...distinctArr];
};
console.log(buildArray([0, 2, 1, 5, 3, 4]));
