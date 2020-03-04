// Warmup tests
function compareTriplets(a, b) {
  let countA = 0
  let countB = 0
  for( let i = 0;i < a.length;i++ ){
    if(a[i]>b[i]) countA++ 
    if(a[i]<b[i]) countB++ 
  }
return [countA, countB]
}

function aVeryBigSum(ar) {
  let ans = 0
  ar.forEach(e => {
    ans += e
  })
  return ans
}

function diagonalDifference(arr) {
  let left = 0 
  let right = 0
  let count = 0
  for(let i = 0;i < arr.length; i++){
    left += arr[i][count]
    right += arr[i][arr[i].length-(count+1)]
    count++
  }
  return Math.abs(left - right)
}


function plusMinus(arr) {
  let neg = 0, pos = 0, zero = 0
  for(let i = 0;i < arr.length;i++){
      if(arr[i] == 0){zero++}
      else if(arr[i] > 0){pos++}
      else{neg++}
  }
  let ans = `${(pos/arr.length).toFixed(6)}\n${(neg/arr.length).toFixed(6)}\n${(zero/arr.length).toFixed(6)}`
  console.log(ans)
}


function staircase(n) {
  let space = n-1, count = 0, ans = ''
  for(let i=1;i<=n;i++){
      while(count < space){
          ans += ' '
          count++
      } 
      space--
      count = 0
      for(let j=i+i;j>i;j--){
          ans += '#'
          if(j == i+1){ans += '\n'}
      }
  }
  console.log(ans)
}


function miniMaxSum(arr) {
  let min = 0,max = 0, check
  for(let i=0;i <arr.length;i++){
      check = (arr.slice(0,i).reduce((acc, cV) => acc + cV, 0) + arr.slice(i+1, (arr.length)).reduce((acc, cV) => acc + cV, 0))
      if(check > max){max = check}
      if( i === 0 || check < min){min = check}
  }
  console.log(`${min} ${max}`)
}


function birthdayCakeCandles(ar) {
  let count = 0, high = 0
  ar.forEach(e => {
      if(e > high){(high = e) && (count = 0)}
      if(e == high){count++}
  })
  return count
}


function timeConversion(s) {
  if(s.includes('12:00:00AM')){return '00:00:00'}
  let time = s.split(':')
  if(!(time[0].includes('12')) && time[2].includes('PM')){
      let temp = parseInt(time[0]) 
      temp += 12
      time[0] = temp + ''
      return time.join(':').slice(0,(s.length-2))
  }
  else if(time[0].includes('12') && time[2].includes('AM')){
      time[0] = '00'
      return time.join(':').slice(0,(s.length-2))
  }
  return s.slice(0,(s.length-2)) 
}


function simpleArraySum(ar) {
  return ar.reduce((acc, val) => acc + val, 0)
}


function gradingStudents(grades) {
  for(let i =0;i<grades.length;i++){
      if(grades[i] < 38){grades[i]}
      else{
          let count = 0
          let temp = grades[i]
          while(!(temp.toString().includes('0')) && !(temp.toString().includes('5'))){
              count++
              temp++
          }
          while((52 < temp && temp < 55) || (57 < temp && temp < 60)){temp++}
          if(count < 3){grades[i] = temp}
      }
  }
  return grades
}


function slowestKey(keyTimes) {
  let ans = [0, 0], temp = 0
  for(let i = 0;i < keyTimes.length;i++){
      i == 0 ? temp = keyTimes[i][1] : temp = keyTimes[i][1] - keyTimes[i-1][1]
      if(temp > ans[1]) ans = [keyTimes[i][0], temp]
  }
  return String.fromCharCode(97+ans[0])
}


function numberOfWays(queries) {
  let ans = [], temp = 0
  for(let i = 0;i < queries.length;i++){
      ans.push(0)
      queries[i][0] > queries[i][1] ? temp = queries[i][1] : temp = queries[i][0]
      while(temp >= 0){
          ans[i] += ((queries[i][1]-temp) * (queries[i][0]-temp))
          temp--
      }
  }
  return ans
}


function numofPrizes(k, marks) {
  // let ans = 0
  // for(let i = 0;i < marks.length;i++){
  //     if(marks[i] > 0){
  //         let count = 0, temp = 1
  //         while(count < marks.length){ marks[i] < marks[count] ? temp++ && count++ : count++ }
  //         if(temp <= k){ans++}
  //     }
  // }
  // return ans

  //  Initial attempt took too long 
  let end = marks.sort().sort((a,b) => a - b).reverse()
  for(let i = 0;i <= end.length-1; i++){
      if(i >= k && end[i] != end[i-1]){ end = end.slice(0, i) }
  }
  while(end.includes(0)){end.pop()}
  return end.length
}



function shortestSubstring(s) {
  let ans = s.length, temp = s.length, needed = Array.from(new Set(s.split(''))).sort()
  for(let i = 0;i < s.length;i++){ 
      let count = (needed.length) + i
      for(let j = 0;j < needed.length;j++){
          if(s.slice(i,count).length < needed.length || count > s.length){
              return ans
          }
          if(s.slice(i,count).length > ans){
              break
          }
          if(!s.slice(i,count).includes(needed[j])){
              j -= 1
              count++
          }
          if(j == needed.length-1){
              temp = s.slice(i,count).length
          }
      }
      if(temp < ans){ans = temp}
  }
  return ans
}


function priceCheck(products, productPrices, productSold, soldPrice) {
  let ans = 0
  for(let i =0;i < productSold.length;i++){
      let count = 0
      while(productSold[i] != products[count]){
          count++
      }
      if(soldPrice[i] != productPrices[count]){
          ans++
      }
  }
  return ans
}



function subsetA(arr) {
  let setA = [0], setB = arr.sort((a,b) => a - b).reverse()
  while(setA.reduce((a,c) => a+c) <  setB.reduce((a,c) => a+c)){
  setA.push(setB[0]) 
  setB = setB.slice(1, setB.length)
  }
  return setA.sort((a,b) => a - b).slice(1,setA.length)
}

function subsetA(arr) {
  arr.sort((a,b) => a - b)
  let setA = arr.splice(0, arr.length/2)
  let a = arr.reduce((a,c) => a+c), b = setA.reduce((a,c) => a+c)
  while(a > b){
    a -= arr[0]
    b += arr[0]
    setA.push(arr[0])
    arr.shift()
  }
  while(a <= b){
    a += arr[0]
    b -= arr[0]
    arr.unshift(setA[setA.length-1]) 
    setA.pop()
  }
  console.log(arr.length, setA.length, a, b)
  return arr
}//much better time complexity and passes all test


function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let app = 0, ora = 0
  for(let i =0;i < apples.length;i++){
    if(t >= (a + apples[i]) && (a + apples[i]) >= s){ app++ }
  }
  for(let i =0;i < oranges.length;i++){
    if(s <= (b + oranges[i]) && (b + oranges[i]) <= t){ ora++ }
  }
  console.log(`${app}\n${ora}`)
}


function kangaroo(x1, v1, x2, v2) {
  if((x1<x2 && v1<=v2) || (x1>x2 && v1>=v2)){ return "NO" }
  if(x1 == x2){ return "YES" }
  return kangaroo((x1 + v1), v1, (x2 + v2), v2)
}


function getTotalX(a, b) {
  let ans = 0
  if(Number.isInteger(a[1]/a[0])){ ans++ }
  if(Number.isInteger(b[b.length - 1]/(a[0]*a[1]))){ ans += (b[0]/(a[0]*a[1])) }
  return ans
}
// refactor for hidden test cases


function getTotalX(a, b) {
  let check = [], ans = [], count
  for(let i = a[0]; i <= b[0];i++){
    count = 0
    for(let j = 0;j < a.length;j++){
      if(i % a[j] == 0){
        count++
      }
    }
    if(count == a.length){
      check.push(i)
    }
  }
  for(let i = 0;i < check.length;i++){
    count = 0
    for(let j = 0;j < b.length;j++){
      if(b[j] % check[i] == 0){
        count++
      }
    }
    if(count == b.length){
      ans.push(check[i])
    }
  }
  return ans.length
}



function breakingRecords(scores) {
  let low = scores[0], high = scores[0], la = [], ha = []
  for(let i = 1;i < scores.length;i++){
    if(scores[i] > high){ 
      ha.push(scores[i])
      high = scores[i]
    }
    if(scores[i] < low){ 
      la.push(scores[i]) 
      low = scores[i]
    }
  }
  return [ha.length, la.length]
}



function birthday(s, d, m) {
  let ans = 0, temp, count
  if(m == 1) { 
    s.forEach(e => {if(e == d){ ans++ }})
    return ans
  }
  for(let i = 0;i < s.length;i++){
    count = 1
    temp = s[i]
    for(let j = i+1;j < s.length;j++){
      if(count == m && temp == d){
        ans++
        break
      }
      if(temp + s[j] > d){
        break  
      }
      temp += s[j]
      count++
    }
  }
  return ans
}
// works but wont pass the submit, even though copying and pasting the same exact test into the custom input passes

function birthday(s, d, m) {
  //set variables
  let ans = 0, temp, count
  //edge case where the number of squares is 1
  if(m == 1) { 
    s.forEach(e => {if(e == d){ ans++ }})
    return ans
  }
  for(let i = 0;i < s.length;i++){
    //set a counter for the number of squares
    count = 1
    temp = s[i]
    for(let j = i+1;j < s.length;j++){
      //if you exceed the target value end the loop to save time
      if(temp + s[j] > d){
        break  
      }
      temp += s[j]
      count++
      //if you find a matching consecutive amount with the right number of squares end the loop to save time
      if(count == m && temp == d){
        ans++
        break
      }
    }
  }
  return ans
}
//had to change the order to count when j is at the end of the 


function divisibleSumPairs(n, k, ar) {
  let ans = 0
  //check for all values that divide by the target evenly(not decimal) by double looping through the array
  for(let i = 0;i < n;i++){
    for(let j = i + 1;j < n;j++){
      if((ar[i] + ar[j]) % k == 0){ ans++ }
    }
  }
  return ans
}



function migratoryBirds(arr) {
  //set variables for counting the different types of birds
  let type = [], num = [], high = 0, low = 5
  //set a loop that will add which birds were spotted and how many 
  arr.forEach( e => {
    if(type.includes(e)){
      num[type.indexOf(e)]++
    }
    else{
      type.push(e)
      num.push(1)
    }
  })
  //find the bird(s) with the highest occurrence and return it
  for(let i = 0;i < num.length;i++){
    if(num[i] > high){
      high = num[i]
      low = type[i]
    }
    if(num[i] == high && type[i] < low){
      low = type[i]
    }
  }
  return low
}



function dayOfProgrammer(year) {
  //set variables for the output and for adding months while looking for the 256th day
  let count = 0, day = 0, month = 0 
  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  //set february specifically for 1918
  if(year == 1918){ months[1] = 15 }
  //make a loop for all year aside from 1918
  while(count + months[month] < 256){
    count += months[month]
    month++
  }
  //the remaining days left from adding months is the day of that month, add 1 to month to match
  day = 256 - count
  month++
  //check for leap years
  if(((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) && year > 1918){ day-- }
  if(year % 4 == 0 && year < 1918){ day-- }
  //print the date
  if(month < 10){
    return `${day}.0${month}.${year}`
  }
  else{
    return `${day}.${month}.${year}`
  }
}



function bonAppetit(bill, k, b) {
  let ans = 0
  // loop through the bill and check how much should be divided by the two
  for(let i = 0;i < bill.length;i++){
    if(i != k){ ans += bill[i]}
  }
  //divide the sum in two
  ans = ans / 2
  //if the bill is correct print, if not return what is owed
  if(ans == b){ console.log('Bon Appetit') }
  else { console.log(b - ans) }
}


function sockMerchant(n, ar) {
  // setup variables for finding the pairs
  let type = [], amt = [], pairs = 0
  // loop through the socks and find how many times a type of sock shows
  ar.forEach( e => {
    if(type.includes(e)){
      amt[type.indexOf(e)]++
    }
    else{
      type.push(e)
      amt.push(1)
    }
  })
  // add all of the pairs
  amt.forEach( e => {
    pairs += Math.floor(e/2)
  })
  return pairs
}

function countingValleys(n, s) {
  let level = 1, ans = 0
  for( let i = 0;i < n;i++ ){
      if(level == 1 && s[i].includes('D')) { ans++ }
      s[i].includes('U') ? level++ : level--
  }
  return ans
}

function pageCount(n, p) {
  let temp = 0, low = n
  if(n % 2 == 0){
    temp = Math.ceil((n - p)/2) 
    if(temp < low) low = temp
  }
  else {
    temp = Math.floor((n-p)/2)
    if(temp < low) low = temp
  }
  temp = Math.ceil((p-1)/2)
  if(temp < low) low = temp
  return low
}


function getMoneySpent(keyboards, drives, b) {
  let high = 0
  for(let i = 0;i < keyboards.length;i++){
    for(let j = 0;j < drives.length;j++){
      if((drives[j] + keyboards[i]) > high && (drives[j] + keyboards[i]) <= b){
        high = drives[j] + keyboards[i]
      }
    }
  }
  if(high == 0) return -1
  else return high
}