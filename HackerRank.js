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