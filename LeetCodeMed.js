// Question 2. Add Two Numbers

var addTwoNumbers = function(l1, l2) {
  let head = new ListNode(1), temp, rmd = 0, tail = head
  while(l1 != null && l2 != null){
    temp = 0
    temp = l1.val + l2.val
    if(rmd > 0){ temp += rmd }
    rmd = 0
    if(temp > 9) { 
      rmd = Math.floor(temp / 10)
      temp = temp % 10
    }
    tail.next = new ListNode(temp)
    tail = tail.next
    l1 = l1.next
    l2 = l2.next
  }
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
  if(rmd > 0) { tail.next = new ListNode(rmd) }
  return head.next
};

// Question 3. Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function(s) {
  let sub = ''
  for(let i = 0;i < s.length;i++){
    let temp = ''
    if(sub.length > (s.length - (i+1))) { return sub.length }
    for(let j = i;j < s.length;j++){
      if(!temp.includes(s[j])){ temp += s[j] }
      else{ break }
    }
    if(temp.length > sub.length) { sub = temp }
  }
  return sub.length
};