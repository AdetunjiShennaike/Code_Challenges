// Question 4. Median of Two Sorted Arrays

var findMedianSortedArrays = function(nums1, nums2) {
  // create the total of the 2 arrays and then find the half point
  // create counters for each array and a container to hold the numbers
  let total = nums1.length + nums2.length, half = Math.ceil(total/2), c1 = 0, c2 = 0, temp = []
  // edge case of if there is only 1 value, simply return that value 
  if(total == 1 && nums1.length == 1) return nums1
  if(total == 1 && nums2.length == 1) return nums2
  // while we are not at the half way point add numbers in the temp arr
  while(temp.length != half + 1){
    // check which is smaller, or if one no longer has numbers to give
    if(nums1[c1] <= nums2[c2] || nums2[c2] == undefined){
      temp.push(nums1[c1])
      c1++
    }
    else{
      temp.push(nums2[c2])
      c2++
    }
  }
  // check if the half +1 point is 0, if it is all before it is also 0, return 0
  if(temp[half] == 0) { return 0 }
  // check if the length is even if it is add the two middle numbers and divide
  if(total % 2 == 0){ return (temp[half - 1] + temp[half])/2 }
  // if not return just the middle number
  else return temp[half - 1]
};