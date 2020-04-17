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


// Question 1338. Reduce Array Size to The Half

var minSetSize = function(arr) {
  // Select the minimum number of values in the array to dispose of half of the array
  // Return for 2 length array input
  if(arr.length == 2) return 1
  // Create a hash for the number of appearances of each value, a counter, and new length
  let theHash = {}, count = 0, curLength = arr.length
  // Loop through the arr to fill in the hash
  for(let i = 0;i < arr.length;i++){
    if(theHash[arr[i]]){
      theHash[arr[i]] += 1
    }
    else {
      theHash[arr[i]] = 1
    }
  }
  // Create an arr for the hash entries and sort it from highest to lowest
  let hashE = Object.entries(theHash).sort((a,b) => b[1] - a[1])
  while(curLength > arr.length/2){
    // Subtract that count from the original array length and add 1 to the counter
    curLength -= hashE[count][1]
    count++  
  }
  // If the new length is less than half return count, else redo last two steps
  return count
};
// Refactoring to 93.37% faster and 100% less space
var minSetSize = function(arr) {
  // Select the minimum number of values in the array to dispose of half of the array
  // Return for 2 length array input
  if(arr.length == 2) return 1
  // Create a hash for the number of appearances of each value, a counter, and new length
  let theHash = {}, count = 0, curLength = arr.length
  // Loop through the arr to fill in the hash
  for(let i = 0;i < arr.length;i++){
    if(theHash[arr[i]]){
      theHash[arr[i]] += 1
    }
    else {
      theHash[arr[i]] = 1
    }
  }
  // Create an arr for the hash entries and sort it from highest to lowest
  let hashE = Object.values(theHash).sort((a,b) => b - a)
  while(curLength > arr.length/2){
    // Subtract that count from the original array length and add 1 to the counter
    curLength -= hashE[count]
    count++  
  }
  // If the new length is less than half return count, else redo last two steps
  return count
}; 


// Question 1079. Letter Tile Possibilities

var numTilePossibilities = function(tiles) {
  // Count the number of nonspace sequences
  // Set a hash variable
  let hash = [], temp = ''
  // Loop through the tiles and save all of the new tile combinations
  for(let i = 0;i < tiles.length;i++) {
    temp = tiles[i]
    // Check if the individual tile is used already
    if(!hash.includes(temp)) {
      hash.push(temp)
    }
    for(let j = 0;j < tiles.length;j++){
      if(j != i){
        temp = `${tiles[i]} + ${tiles[j]}`
        if(!hash.includes(temp)) {
          hash.push(temp)
        }
        for(let k = 0;k < tiles.length;k++) {
          if(k != i && k != j){
            temp = `${tiles[i]} + ${tiles[j]} + ${tiles[k]}`
            if(!hash.includes(temp)) {
              hash.push(temp)
            }
            for(let l = 0;l < tiles.length;l++){
              if(l != i && l != j && l != k){
                temp = `${tiles[i]} + ${tiles[j]} + ${tiles[k]} + ${tiles[l]}`
                if(!hash.includes(temp)) {
                  hash.push(temp)
                }
                for(let m = 0;m < tiles.length;m++) {
                  if(m != i && m != j && m != k && m != l){
                    temp = `${tiles[i]} + ${tiles[j]} + ${tiles[k]} + ${tiles[l]} + ${tiles[m]}`
                    if(!hash.includes(temp)) {
                      hash.push(temp)
                    }
                    for(let n = 0;n < tiles.length;n++){
                      if(n != i && n != j && n != k && n != l && n != m){
                        temp = `${tiles[i]} + ${tiles[j]} + ${tiles[k]} + ${tiles[l]} + ${tiles[m]} + ${tiles[n]}`
                        if(!hash.includes(temp)) {
                          hash.push(temp)
                        }
                        for(let o = 0;o < tiles.length;o++){
                          if(o != i && o != j && o != k && o != l && o != m && o != n) {
                            temp = `${tiles[i]} + ${tiles[j]} + ${tiles[k]} + ${tiles[l]} + ${tiles[m]} + ${tiles[n]} + ${tiles[o]}`
                            if(!hash.includes(temp)) {
                              hash.push(temp)
                            }
                          }
                        } 
                      }
                    }
                  }
                }
              }
            }
          }
        }  
      }
    }
  }
  return hash.length
};


// Question Product Of Array Except Self

var productExceptSelf = function(nums) {
  // Multiply all values except the current index and save to an array
  // Create an output variable, two hash tables and a shortcut for array length
  let hashL = {}, hashR = {}, len = nums.length, ans = []
  
  // Grab all mutiples to the right
  for(let i = 0;i < len-1;i++) { 
    if(i == 0) hashL[i] = nums[i]
    else {
      hashL[i] = hashL[i-1] * nums[i]
    }
  }
  
  // Grab all multiples to the left
  for(let i = len-1;i > 0;i--) { 
    if(i == len-1) hashR[i] = nums[i]
    else hashR[i] = hashR[i+1] * nums[i]
  }
  
  // Multiply the values next to I to get the output
  for(let i = 0;i < len;i++) { 
    if(i == 0) ans.push(hashR[i+1])
    else if(i == len-1) ans.push(hashL[i-1])
    else ans.push((hashL[i-1] * hashR[i+1]))
  }
  
  return ans
};