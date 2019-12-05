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