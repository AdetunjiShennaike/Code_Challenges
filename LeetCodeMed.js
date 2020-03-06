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