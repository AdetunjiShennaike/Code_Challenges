/*In a factory a printer prints labels for boxes. 
For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
The colors used by the printer are recorded in a control string. 
For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. 
Don't reduce this fraction to a simpler expression.

#Examples:

s="aaabbbbhaijjjm"
error_printer(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
error_printer(s) => "8/22"*/

function printerError(s) {
  let count = 0
  let arr = s.toLowerCase().split('')
  arr.forEach(e => {if(e > 'm'){count++}})
  return `${count}/${s.length}`
}

/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case*/

function isIsogram(str){
  for(let i = 0; i < str.length; i++){
    for(let j = i+1; j < str.length; j++){
      if(str[i].toLowerCase().includes(str[j].toLowerCase())){
        return false
      }
    }
  }
  return true
}

//optimal code
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}


/*Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like this sessions, since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit during the session if they show the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task
Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. 
For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

Example
  deleteNth ([1,1,1,1],2) // return [1,1]

  deleteNth ([20,37,20,21],1) // return [20,37,21]*/


function deleteNth(arr,n){
  for(let i = 0;i < arr.length; i++){
  let count = 1
    for(let j = i+1;j < arr.length; j++){
      if(arr[i] === arr[j] && count !== n){
        count++
      }else if(arr[i] === arr[j] && count >= n){
        arr.splice(j,1) && j--
      }
    }
  }
  return arr
}

/*The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.*/


var maxSequence = function(arr){
  let sum = 0
  let test = 0
  for(let i = 0; i<arr.length; i++){
    test < 0 && arr[i] > 0 ? test = arr[i] : test += arr[i]
    if(test > sum){sum = test}
  }
  if(sum <= 0){return 0}
  return sum 
}