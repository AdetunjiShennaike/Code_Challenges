//Question 1
/* 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for(let i = 1;i < nums.length;i++){
      for(let j = i-1;j>=0;j--){
          if(nums[i] + nums[j] == target){
              return [j, i]
          }
      }
  }
};