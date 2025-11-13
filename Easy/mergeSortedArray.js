var merge = function (nums1, m, nums2, n) {
  let merged = nums1
    .slice(0, m)
    .concat(nums2)
    .sort(function (a, b) {
      return a - b;
    });
  for (let i = 0; i < merged.length; i++) {
    nums1[i] = merged[i];
  }
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
