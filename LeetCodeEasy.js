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

