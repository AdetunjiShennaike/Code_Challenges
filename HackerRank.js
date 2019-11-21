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