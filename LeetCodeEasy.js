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


//Question 20 Valid Parentheses
var isValid = function(s) {
  if(!s){return true}
  let test = []
  for(let i = 0;i< s.length;i++){
    if((s[i].includes(')') && test[test.length-1] === '(') || (s[i].includes(']') && test[test.length-1] === '[') ||(s[i].includes('}') && test[test.length-1] === '{')){test.pop()}
    else if(s[i].includes('(') || s[i].includes('{') || s[i].includes('[')){test.push(s[i])}
    else{return false}
  }
  if(test.length>0){return false}
  return true
};


// Question 21 Merge Two Sorted Lists
function Node(val){
  this.val = val;
  this.next = null;
}
var mergeTwoLists = function(l1, l2) {
  if(l1 == null){return l2}
  else if(l2 == null){return l1}
  let ans, tail
  if(l1.val < l2.val){
    ans =  new Node(l1.val) 
    ans.next = new Node(l2.val)
    tail = ans.next
  }
  else{
    ans =  new Node(l2.val) 
    ans.next = new Node(l1.val)
    tail = ans.next
  }
  while(l1.next !== null || l2.next !== null){
    if(l1.next == null){
      l2 = l2.next
      tail.next = new Node(l2.val)
      tail = tail.next
    }
    else if(l2.next == null){
      l1 = l1.next
      tail.next = new Node(l1.val)
      tail = tail.next
    }
    else if(l1.next.val < l2.next.val){
      if(l1.next != null){
        l1 = l1.next
        tail.next = new Node(l1.val)
        tail = tail.next
      }
      if(l2.next != null){
        l2 = l2.next
        tail.next = new Node(l2.val)
        tail = tail.next
      }
    }
    else{
      if(l2.next != null){
        l2 = l2.next
        tail.next = new Node(l2.val)
        tail = tail.next
      }
      if(l1.next != null){
        l1 = l1.next
        tail.next = new Node(l1.val)
        tail = tail.next
      }
    }
  }
  return ans
};

//lists are not sorted at all and you have to sort them even past the parallel values, the entire new list node has to be sorted, description for this is super bad, especially for an easy question 
//just realized its just a merge sort 

var mergeTwoLists = function(l1, l2) {
  if(l1 == null){return l2}
  else if(l2 == null){return l1}
  let ans, tail, list=[l1.val,l2.val]
  while(l1.next != null || l2.next != null){
    if(l1.next == null){
      l2 = l2.next
      list.push(l2.val)
    }
    else if(l2.next == null){
      l1 = l1.next
      list.push(l1.val)
    }
    else {
      l1 = l1.next
      l2 = l2.next
      list.push(l1.val)
      list.push(l2.val)
    }
  }
  list.sort((a,b) => a-b)
  ans = new Node(list[0])
  tail = ans
  for(let i = 1;i < list.length;i++){ 
    tail.next = new Node(list[i])
    tail = tail.next
  }
  return ans
};

//this works but isn't the best way

function Head(){
  this.head = null;
}
var mergeTwoLists = function(l1, l2) {
  if(l1 == null){return l2}
  else if(l2 == null){return l1}
  let ans = new Head, tail = ans, cont = true
  while(cont){
    if(l1 == null && l2 == null){ cont = false }
    else if(l1 == null){
      tail.next = l2
      tail = tail.next
      l2 = l2.next
    }
    else if(l2 == null){
      tail.next = l1
      tail = tail.next
      l1 = l1.next
    }
    else if(l1.val < l2.val){
        tail.next = l1
        tail = tail.next
        l1 = l1.next
    }
    else{
        tail.next = l2
        tail = tail.next
        l2 = l2.next
    }
  }
  return ans.next
};
// uses less memory and is faster by 8 ms


// Question 26 Remove Duplicates from Sorted Array
var removeDuplicates = function(nums) {
  for(let i = 1;i < nums.length;i++){
    if(nums[i] == nums[i-1]){
      nums.splice(i,1)
      i--
    }
  }
  return nums.length
};


// Question 27 Remove Element
var removeElement = function(nums, val) {
  for(let i = 0;i < nums.length;i++){
      if(nums[i] == val){
          nums.splice(i,1)
          i--
      }
  }
  return nums.length
};


// Question 28 Implement strStr()
var strStr = function(haystack, needle) {
  let ans = 0
  haystack.includes(needle) ? ans = haystack.indexOf(needle) : ans = -1
  return ans
};


// Question 35 Search Insert Position
var searchInsert = function(nums, target) {
  if(nums.includes(target)){ return nums.indexOf(target) }
  for(let i = 0;i < nums.length;i++){
      if(nums[i] > target){ return i }
      if(i == nums.length - 1){ return nums.length}
  }
};


// Question 38 Count and Say
var countAndSay = function(n) {
  if(n == 1){
      return '1'
  }
  let arr = [], count = [], ans = ""
  countAndSay(n-1).split('').forEach((e,i) => {
      if(arr.includes(e) && arr[arr.indexOf(e)+1] != e){
          count[arr.length - 1] += 1
      }
      else{
          arr.push(e)
          count.push(1)
      }
  })
  for(let i = 0;i < arr.length;i++){
      ans += `${count[i]}${arr[i]}`
  }
  return ans
};

//doesn't output the right info yet, figuring out how to skip to insert a value when the previous is different 

var countAndSay = function(n) {
  if(n == 1){
      return '1'
  }
  let arr = [], count = [], ans = ""
  countAndSay(n-1).split('').forEach((e,i) => {
      if(arr.includes(e) && arr[arr.length - 1] == e){
          count[arr.length - 1] += 1
      }
      else{
          arr.push(e)
          count.push(1)
      }
  })
  for(let i = 0;i < arr.length;i++){
      ans += `${count[i]}${arr[i]}`
  }
  return ans
};
//just changed the if statement


// Question 53 Maximum Subarray
var maxSubArray = function(nums) {
  let ans = nums[0], temp = 0
  for(let i = 0;i < nums.length;i++){
      temp += nums[i]
      if(temp > ans){ ans = temp }
      if(temp < 0){ temp = 0 }
  }
    return ans
};


// Question 58 Length of Last Word
var lengthOfLastWord = function(s) {
  let ans = s.trimEnd().split(' ')
  if(ans.length == 0){ return 0 }
  return ans[ans.length-1].length
};


// Question 66 Plus One
var plusOne = function(digits) {
  let count = digits.length - 1
  while(digits[count] == 9){
      digits[count] = 0
      count--
  }
  count < 0 ? digits.unshift(1) : digits[count]++
  return digits
};


// Question 67 Add Binary

var addBinary = function(a, b) {
  let arrA = a.split('').reverse(), arrB = b.split('').reverse(), length, output = [], temp
  arrA.length > arrB.length ? length = arrA.length : length = arrB.length
  for(let i =0;i <= length;i++){
    if(!arrA[i] && !arrB[i] && temp != '1'){
      return output.reverse().join('')
    }
    else if(!arrA[i] && temp != '1'){
      output.push(arrB[i])
    }
    else if(!arrB[i] && temp != '1'){
      output.push(arrA[i])
    }
    else if(temp == '1'){
      if(arrA[i] == '1' && arrB[i] == '1'){
        output.push('1')
        temp = '1'
      }
      else if((arrA[i] == '0'|| !arrA[i]) && arrB[i] == '1'){
        output.push('0')
        temp = '1'
      }
      else if(arrA[i] == '1' && (arrB[i] == '0'|| !arrB[i])){
        output.push('0')
        temp = '1'
      }
      else{
        output.push('1')
        temp = '0'
      }
    }
    else if(arrA[i] != arrB[i]){
      output.push('1')
    }
    else if(arrA[i] == arrB[i] && arrA[i] != '0'){
      output.push('0')
      temp = '1'
    }
    else{
      output.push('0')
    }
  }
  return output.reverse().join('')
};


// Question 69 Sqrt(x)
var mySqrt = function(x) {
  return Math.floor(Math.sqrt(x))
};

var mySqrt = function(x) {
  if(x == 0){ return x }
  for(let i = 0;i <= x;i++){
    if((i*i) == x){
      return i
    }
    if((i*i) > x){
      return i-1
    }
  }
};// without math library


// Question 70 Climbing Stairs
var climbStairs = function(n, cache = null) {
  if (cache == null){ 
    cache = []
    for(let i = 0;i <= n;i++){ 
      cache.push[0]
    } 
  }
                     
  if(n == 0){ return 0 }
  if(n == 1){ return 1 }
  if(n == 2){ return 2 }
  
  if(cache[n] == undefined) {
    cache[n] = climbStairs(n-1, cache) + climbStairs(n-2, cache)
  }
  
  return cache[n]
};


// Question 83 Remove Duplicates from Sorted List
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var deleteDuplicates = function(head) {
  if(!head){ return head }
  let temp = head.next, check = head
  while(temp != null){
    if(temp.val == check.val){
      temp = temp.next
      check.next = temp
    }
    else{
      check = temp
      temp = temp.next
    }
  }
  return head
};


// Question 88 Merge Sorted Array
var merge = function(nums1, m, nums2, n) {
  let count = 0, trace = 0, check = m
  while(count < (m + n)){
    if(nums1[count] > nums2[trace]){
      nums1.splice(count, 0, nums2[trace])
      nums1.pop()
      count++
      trace++
      check++
    }
    else if(nums1[count] == 0 && count >= check){
      nums1.splice(count, 0, nums2[trace])
      nums1.pop()
      count++
      trace++
      check++
    }
    else{
      count++
    }
  }
};


// Question 121. Best Time to Buy and Sell Stock

var maxProfit = function(prices) {
  let ans = 0, low = prices[0]
  for(let i = 1;i < prices.length;i++){
    if(prices[i] < low){
      low = prices[i]
    }
    if(prices[i] - low > ans && prices[i] > low){
      ans = prices[i] - low
    }
  }
  return ans
};


// Question 1275 Find Winner on a Tic Tac Toe Game
var tictactoe = function(moves) {
  let A = [], B = []
  for(let i = 0;i < moves.length;i++){
      if(i == 0 || i % 2 == 0){
          if(moves[i][0] == 0 && moves[i][1] == 0){
              A.push(1)
          }
          else if(moves[i][0] == 0 && moves[i][1] == 1){
              A.push(2)
          }
          else if(moves[i][0] == 0 && moves[i][1] == 2){
              A.push(3)
          }
          else if(moves[i][0] == 1 && moves[i][1] == 0){
              A.push(4)
          }
          else if(moves[i][0] == 1 && moves[i][1] == 1){
              A.push(5)
          }
          else if(moves[i][0] == 1 && moves[i][1] == 2){
              A.push(6)
          }
          else if(moves[i][0] == 2 && moves[i][1] == 0){
              A.push(7)
          }
          else if(moves[i][0] == 2 && moves[i][1] == 1){
              A.push(8)
          }
          else {
              A.push(9)
          }
      }
      else {
          if(moves[i][0] == 0 && moves[i][1] == 0){
              B.push(1)
          }
          else if(moves[i][0] == 0 && moves[i][1] == 1){
              B.push(2)
          }
          else if(moves[i][0] == 0 && moves[i][1] == 2){
              B.push(3)
          }
          else if(moves[i][0] == 1 && moves[i][1] == 0){
              B.push(4)
          }
          else if(moves[i][0] == 1 && moves[i][1] == 1){
              B.push(5)
          }
          else if(moves[i][0] == 1 && moves[i][1] == 2){
              B.push(6)
          }
          else if(moves[i][0] == 2 && moves[i][1] == 0){
              B.push(7)
          }
          else if(moves[i][0] == 2 && moves[i][1] == 1){
              B.push(8)
          }
          else {
              B.push(9)
          }
      }
  }
  if(A.includes(1) && A.includes(2) && A.includes(3)){
      return 'A'
  }
  else if(A.includes(1) && A.includes(4) && A.includes(7)){
      return 'A'
  }
  else if(A.includes(1) && A.includes(5) && A.includes(9)){
      return 'A'
  }
  else if(A.includes(3) && A.includes(5) && A.includes(7)){
      return 'A'
  }
  else if(A.includes(4) && A.includes(5) && A.includes(6)){
      return 'A'
  }
  else if(A.includes(7) && A.includes(8) && A.includes(9)){
      return 'A'
  }
  else if(A.includes(2) && A.includes(5) && A.includes(8)){
      return 'A'
  }
  else if(A.includes(3) && A.includes(6) && A.includes(9)){
      return 'A'
  }
  else if(B.includes(1) && B.includes(2) && B.includes(3)){
      return 'B'
  }
  else if(B.includes(1) && B.includes(4) && B.includes(7)){
      return 'B'
  }
  else if(B.includes(1) && B.includes(5) && B.includes(9)){
      return 'B'
  }
  else if(B.includes(3) && B.includes(5) && B.includes(7)){
      return 'B'
  }
  else if(B.includes(4) && B.includes(5) && B.includes(6)){
      return 'B'
  }
  else if(B.includes(7) && B.includes(8) && B.includes(9)){
      return 'B'
  }
  else if(B.includes(2) && B.includes(5) && B.includes(8)){
      return 'B'
  }
  else if(B.includes(3) && B.includes(6) && B.includes(9)){
      return 'B'
  }
  else if(moves.length == 9) {
      return "Draw"
  }
  else {
      return "Pending"
  }
};


// Question 231. Power of Two
const isPowerOfTwo = function(n) {
  // Take the given input and return true or false
  // Set up the edgecase of n = 2 and n = 1
  if(n == 2 || n == 1) return true
  // Set up a for loop with the max value being half of the input
  for(let i = 2;i <= (n/2);i++){
    // Check all values of 2 to the power of the iterator excluding 0 and 1
    if(2**i == n){
      // If any return true stop all and return true, else false
      return true
    }
  }
}

const isPowerOfTwo = function(n) {
  // Time complexity to slow refactored version
  // Set up the edgecase of n = 2 and n = 1
  if(n == 2 || n == 1) return true
  // Divide by two until the number is too small or the value is 2
  else if(n > 2){
  return  isPowerOfTwo(n/2)
  }
  return false
}


// Question 290. Word Pattern

var wordPattern = function(pattern, str) {
  // Make a hash to hold the pattern, string combinations
  // Edge case if both inputs are empty return false
  if(!pattern && !str) return false
  // Make variables for the split and the test string and used strings
  let patternHash = {}, alpha = pattern.split(''), beta = str.split(' '), used = '', test = []
  // Use a for loop to fill the hash whenever a new character in the pattern appears
  for(let i = 0;i < alpha.length;i++){
    if(!patternHash[alpha[i]] && !used.includes(beta[i])){
      patternHash[alpha[i]] = beta[i]
      used += beta[i] + ' '
    }
  }
  // Output from the hash the same sequence as the pattern
  for(let i = 0;i < alpha.length;i++){
    test.push(patternHash[alpha[i]])
  }
  // Check the pattern versus the str
  if(test.join(' ') == str){
    // If its the same return true, else return false
    return true
  }
  return false
};

// Question 949. Largest Time for Given Digits

var largestTimeFromDigits = function(A) {
  // Change the input into a time, the largest possible
  // Make variable for the output
  let time
  
  // After every check we remove the number from the input
  // Check for the first hour digit between 0-2
  if(A.includes(2)) {
    time = '2'
    // Check for first minute possibility
    A[A.indexOf(parseInt(time[0]))] = -1
    if(A.includes(5)) true
    else if(A.includes(4)) true
    else if(A.includes(3)) {
      A[A.indexOf(3)] = -2
      if(A.includes(3)) A[A.indexOf(-2)] = 3
      else if(A.includes(2)) A[A.indexOf(-2)] = 3
      else if(A.includes(1)) A[A.indexOf(-2)] = 3
      else if(A.includes(0)) A[A.indexOf(-2)] = 3
      else {
        // Put back the 2 and go to the next if statement
        A[A.indexOf(-2)] = 3
        A[A.indexOf(-1)] = 2
        if(A.includes(1)) {
          time = '1'
          A[A.indexOf(parseInt(time[0]))] = -1
        }
        else if(A.includes(0)) {
          time = '0'
          A[A.indexOf(parseInt(time[0]))] = -1
        }
        else return ''
      }
    }
    else if(A.includes(2)) {
      A[A.indexOf(2)] = -2
      if(A.includes(3)) A[A.indexOf(-2)] = 2
      else if(A.includes(2)) A[A.indexOf(-2)] = 2
      else if(A.includes(1)) A[A.indexOf(-2)] = 2
      else if(A.includes(0)) A[A.indexOf(-2)] = 2
      else {
        // Put back the 2 and go to the next if statement
        A[A.indexOf(-2)] = 2
        A[A.indexOf(-1)] = 2
        if(A.includes(1)) {
          time = '1'
          A[A.indexOf(parseInt(time[0]))] = -1
        }
        else if(A.includes(0)) {
          time = '0'
          A[A.indexOf(parseInt(time[0]))] = -1
        }
        else return ''
      }
    }
    else if(A.includes(1)) {
      A[A.indexOf(1)] = -2
      if(A.includes(3)) A[A.indexOf(-2)] = 1
      else if(A.includes(2)) A[A.indexOf(-2)] = 1
      else if(A.includes(1)) A[A.indexOf(-2)] = 1
      else if(A.includes(0)) A[A.indexOf(-2)] = 1
      else {
        // Put back the 2 and go to the next if statement
        A[A.indexOf(-2)] = 1
        A[A.indexOf(-1)] = 2
        if(A.includes(1)) {
          time = '1'
          A[A.indexOf(parseInt(time[0]))] = -1
        }
        else if(A.includes(0)) {
          time = '0'
          A[A.indexOf(parseInt(time[0]))] = -1
        }
        else return ''
      }
    }
    else if(A.includes(0)) {
      A[A.indexOf(0)] = -2
      if(A.includes(3)) A[A.indexOf(-2)] = 0
      else if(A.includes(2)) A[A.indexOf(-2)] = 0
      else if(A.includes(1)) A[A.indexOf(-2)] = 0
      else if(A.includes(0)) A[A.indexOf(-2)] = 0
      else {
        // Put back the 2 and go to the next if statement
        A[A.indexOf(-2)] = 0
        A[A.indexOf(-1)] = 2
        if(A.includes(1)) {
          time = '1'
          A[A.indexOf(parseInt(time[0]))] = -1
        }
        else if(A.includes(0)) {
          time = '0'
          A[A.indexOf(parseInt(time[0]))] = -1
        }
        else return ''
      }
    }
  }
  else if(A.includes(1)) {
    time = '1'
    A[A.indexOf(parseInt(time[0]))] = -1
  }
  else if(A.includes(0)) {
    time = '0'
    A[A.indexOf(parseInt(time[0]))] = -1
  }
  else return ''
  
  // Check the first hour digit to see what the second hour can be  
  // Check for the second hour digit between 0-9, depending on the first hour could be 0-3
  if(time.includes(2)) {
    if(A.includes(3)) time += '3'
    else if(A.includes(2)) time += '2'
    else if(A.includes(1)) time += '1'
    else if(A.includes(0)) time += '0'
    else return ''
  }
  else {
    time += Math.max(...A)
  }
  
  A[A.indexOf(parseInt(time[1]))] = -1
  // Add the colon
  time += ':'
  
  // Check for the first minute digit between 0-5
  if(A.includes(5)) time += '5'
  else if(A.includes(4)) time += '4'
  else if(A.includes(3)) time += '3'
  else if(A.includes(2)) time += '2'
  else if(A.includes(1)) time += '1'
  else if(A.includes(0)) time += '0'
  else return ''
  
  A[A.indexOf(parseInt(time[3]))] = -1
  // Check for the second minute digit between 0-9
  time += Math.max(...A)
  
  // If any of the previous fail return an empty string, else return the time
  return time
};


// Question 605. Can Place Flowers

var canPlaceFlowers = function(flowerbed, n) {
  // Check if flowers can be planted
  // Make a count variable
  let count = 0, start
  
  // If the length of the flowerbed
  if(flowerbed.length == 1 && flowerbed[0] == 0) count++
  
  // Check if the first and second index have any planted flowers
  if(flowerbed[0] == 1) start = 2
  else if(flowerbed[1] == 1) start = 3
  else if(flowerbed[0] == 0 && flowerbed[1] == 0) {
    flowerbed[0] = 1
    count++
    start = 2
  }
  
  // Check the last index for a plant
  if(flowerbed[flowerbed.length-1] == 0 && flowerbed[flowerbed.length-2] == 0) {
    flowerbed[flowerbed.length-1] = 1
    count++
  }
  
  // Create a for loop
  for(let i = start;i < flowerbed.length;i++) {
    // If the previous and next plot are empty plant the flower and add one to count
    if(flowerbed[i] == 0 && flowerbed[i-1] == 0 && flowerbed[i+1] == 0) {
      flowerbed[i] = 1
      count++
    }
  }
  
  // Check if count is greater than or equal to n, if true, return true else false
  if(count >= n) return true 
  return false
};


// Question 1323. Maximum 69 Number

var maximum69Number  = function(num) {
  // Create the largest 69 possible
  // Create a variable to save the new number
  let ans = num.toString().split('')
  // Check all numbers to see with a loop
  for(let i = 0;i < ans.length;i++) {
    // If we find a 6 change it to 9 and return the new number
    if(ans[i] != '9'){
      ans[i] = '9'
      return parseInt(ans.join(''))
    }
  }
  // Return the original number
  return num
};