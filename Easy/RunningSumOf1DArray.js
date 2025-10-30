var runningSum = function (nums) {
  var no = 0;
  for (let i = 0; i < nums.length; i++) {
    if(i==0){
      nums[i]=nums[i];
      no+=nums[i];
    }else{
      no+=nums[i]
      nums[i]=no;
    }
  }
  return nums;
};
console.log(runningSum([3,1,2,10,1]));
