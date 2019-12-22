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
