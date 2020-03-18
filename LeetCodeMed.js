// Question 2. Add Two Numbers

var addTwoNumbers = function(l1, l2) {
  //create the variables for a new linked list for the answer and a remainder for the addition
  let head = new ListNode(1), temp, rmd = 0, tail = head
  //while the .next is not null we loop through the linked list adding all amounts together
  while(l1 != null && l2 != null){
    temp = 0
    temp = l1.val + l2.val
    if(rmd > 0){ temp += rmd }
    //reset the remainder
    rmd = 0
    //calculate the remainder
    if(temp > 9) { 
      rmd = Math.floor(temp / 10)
      temp = temp % 10
    }
    tail.next = new ListNode(temp)
    tail = tail.next
    l1 = l1.next
    l2 = l2.next
  }
  //we pick up the remaining amounts from either node that still has a valid .next
  while(l1 != null){
    temp = 0
    temp += rmd
    rmd = 0
    temp += l1.val
    if(temp > 9) { 
      rmd = Math.floor(temp / 10)
      temp = temp % 10
    }
    tail.next = new ListNode(temp)
    tail = tail.next
    l1 = l1.next
  }
  while(l2 != null){
    temp = 0
    temp += rmd
    rmd = 0
    temp += l2.val
    if(temp > 9) { 
      rmd = Math.floor(temp / 10)
      temp = temp % 10
    }
    tail.next = new ListNode(temp)
    tail = tail.next
    l2 = l2.next
  }
  //check if there is still any remainder left over from the last node value
  if(rmd > 0) { tail.next = new ListNode(rmd) }
  return head.next
};

// Question 3. Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function(s) {
  //creat a variable to house the answer for checking at the end
  let sub = '', temp
  //loop through the string 
  for(let i = 0;i < s.length;i++){
    //make the temp variable reset here
    temp = ''
    //if the largest current answer is bigger than the remainder of the string stop
    if(sub.length > (s.length - (i+1))) { return sub.length }
    //make a second loop to start finding the substring
    for(let j = i;j < s.length;j++){
      //if its a new character add it if not reset form the next spot in the string
      if(!temp.includes(s[j])){ temp += s[j] }
      else{ break }
    }
    //if the temp built up string is larger than whats saved replace it
    if(temp.length > sub.length) { sub = temp }
  }
  return sub.length
};


// Question 260. Single Number III

var singleNumber = function(nums) {
  // Make a 2 variable for counting and a return variable
  let countN = [], count = [], ans =[] 
  // Make a loop of the input
  for(let i = 0;i < nums.length;i++) {    
    // During the loop, we will check if the current item exist in the count variable
    if(countN.includes(nums[i])){
      // If a value does exist increase the count
      count[countN.indexOf(nums[i])]++
    }
    else{
      // If it does we push to to the first count array and input 1 in the second
      countN.push(nums[i])
      count.push(1)
    }
  }
  // Loop through the count
  for(let c = 0;c < count.length;c++){
    // Check the count variable for items that only have 1
    if(count[c] == 1){
      // Push the elements with 1 to the return variable and return it
      ans.push(countN[c])
    }
  }
  return ans
};
// Hash Solution
let count = {}, ans = []
for(let i = 0;i < nums.length;i++){
  if(count[nums[i]]){
    count[nums[i]]++
  }
  else{
    count[nums[i]] = 1
  }
}
for(let i = 0;i < nums.length;i++){
  if(count[nums[i]] == 1){
    ans.push(nums[i])
  }
}
return ans


// Question 162. Find Peak Element

var findPeakElement = function(nums) {
  // The edgecase of an empty array
  if(nums.length == 0) return nums
  // The edgecase of either the first or last index being the peak or if there is only 1 item
  if(nums[0] > nums[1] || nums.length == 1) return 0
  let len = nums.length - 1
  if(nums[len] > nums[len-1]) return len
  // Start a for loop of the input starting with an index of 1 and skip the last index
  for(let i = 1;i < len;i++){
    // Check if the current index is greater than 1 prior and 1 later
    if(nums[i] > nums[i-1] && nums[i] > nums[i+1]){
      // If yes return the index
      return i
    }
  }
};