//Question 1
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

//Question 13 Roman to Integer
var romanToInt = function(s) {
  let arr = []
  s.split('').forEach(e => {
      if (e.includes('I')) {arr.push(1)}
      else if(e.includes('V')) {arr.push(5)}
      else if(e.includes('X')) {arr.push(10)}
      else if(e.includes('L')) {arr.push(50)}
      else if(e.includes('C')) {arr.push(100)}
      else if(e.includes('D')) {arr.push(500)}
      else if(e.includes('M')) {arr.push(1000)}
  })
  let number = 0
  for(i=0;i<arr.length;i++){
      arr[i] < arr[i+1] ? (number += (arr[i+1] - arr[i])) && (i++) : number += arr[i]
  }
  return number
};

//Question 14 Longest Common Prefix
var longestCommonPrefix = function(strs) {
  strs.length == 0 ? ans = '' : ans = strs[0]
  for(let i = 1;i < strs.length;i++){
     while(strs[i].indexOf(ans) != 0){
         if(ans.length == 0) return "" 
         ans = ans.substring(0, ans.length - 1)
     }
  }
  return ans
};