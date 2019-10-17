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


//Question 7 Reverse Integer
var reverse = function(x) {
  let int = x.toString().split('')
  let ans = []
  if(int[0] == '-'){ ans.push(int[0])}
  for(i=int.length-1; i>=0; i--){
      ans.push(int[i])
  }
  if(parseInt(ans.join('')) > (Math.pow(2, 31)-1) || parseInt(ans.join('')) < (Math.pow(-2, 31))){
      return 0
  }
  return parseInt(ans.join(''))
};

//Question 9 Palindrome Number
var isPalindrome = function(x) {
  if(x >= 0 && parseInt(x.toString().split('').reverse().join('')) == x) {
      return true
  } 
  return false
};