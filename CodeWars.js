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

//optimal code

function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
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

/*A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

###Arguments (Haskell)

First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
Second argument: the original string to be converted.
###Arguments (Other languages)

First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
###Example

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/

function titleCase(title, minorWords) {
  if(title === ''){return ''}
  let words = title.toLowerCase().split(' ')
  words[0].length == 1 ? words[0] = words[0].toUpperCase() : words[0] = (words[0].charAt(0).toUpperCase() + words[0].slice(-(words[0].length - 1)))
  if(minorWords){
    let skip = minorWords.toLowerCase().split(' ')
    for(let i=1;i<words.length;i++){
      for(let j=0;j<skip.length;j++){
        let temp = words[i].slice(-(words[i].length - 1))
        if(words[i].includes(skip[j]) && words[i].length == skip[j].length){ 
          break
        }
        else if(j >= (skip.length - 1)) {
          words[i].length == 1 ? words[i] = words[i].toUpperCase() : words[i] = words[i].charAt(0).toUpperCase() + temp
        }
      }
    }
  }
  else{
    for(let i=1;i<words.length;i++){
      let temp = words[i].slice(-(words[i].length - 1))
      words[i].length == 1 ? words[i] = words[i].toUpperCase() : words[i] = words[i].charAt(0).toUpperCase() + temp
    }
  }
  return words.join(' ')
}

//optimal code
function titleCase(title, minorWords) {
  var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
  return title.toLowerCase().split(' ').map(function(v, i) {
    if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {
      v = v.split('');
      v[0] = v[0].toUpperCase();
      v = v.join('');
    }
    return v;
  }).join(' ');
}

/*This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
	let ans = ''
  for(let i = 0;i < s.length;i++){
    ans += s[i].toUpperCase()
    for(let j = 0;j < i; j++){
      ans += s[i].toLowerCase()
    }
    i != s.length-1 ? ans += '-' : console.log('done')
  }
  return ans
}



/*Sum of Pairs
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.*/

var sum_pairs=function(ints, s){
  let ans = [0, ints.length]
  for(let i = 0; i < ans[1]; i++){
    for(let j = ans[1]-1; j > i; j--){ 
      if(ints[i] + ints[j] == s && (ans.length == 0 || j < ans[1])){ ans = [i, j] }
      console.log(ans[1], j)
    }
  }
  if(ints[ans[0]] + ints[ans[1]] != s){ return undefined }
  return [ints[ans[0]], ints[ans[1]]]
}

var sum_pairs=function(ints, s){
  let ans = [0, ints.length], c = 0, j =0
  while(c < ans[1]){
    for(let j = c+1; j < ans[1]; j++){ 
      if(ints[c] + ints[j] == s){ ans = [c, j] }
      console.log(c, ans[1], j)
    }
    c++
  }
  if(ints[ans[0]] + ints[ans[1]] == s) return [ints[ans[0]], ints[ans[1]]]
}
//refactored still fails the optimization 

var sum_pairs=function(ints, s){
  let ans = [0, ints.length], c = 0, j = 1
  while(j <= ans[1]){
    if(ints[c] + ints[j] == s){ 
      ans = [c, j]
      c++
      j = c
    }
    else if(j == ans[1]){
      c++
      j = c
    }
    j++
  }
  if(ints[ans[0]] + ints[ans[1]] == s) return [ints[ans[0]], ints[ans[1]]]
}
//refactored still fails even though there is now only 1 loop







/*Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. Square all numbers k (0 <= k <= n) between 0 and n. Count the numbers of digits d used in the writing of all the k**2. Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

#Examples:

n = 10, d = 1, the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in 1, 16, 81, 100. The total count is then 4.

nb_dig(25, 1):
the numbers of interest are
1, 4, 9, 10, 11, 12, 13, 14, 19, 21 which squared are 1, 16, 81, 100, 121, 144, 169, 196, 361, 441
so there are 11 digits `1` for the squares of numbers between 0 and 25.
Note that 121 has twice the digit 1. */

function nbDig(n, d) {
  let count = 0;
  for(let i =0; i<=n;i++){
    Math.pow(i,2).toString().split('').forEach( e => e.includes(d) ? count++ : count)
  }
  return count
}



/*The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

What if the string is empty ? Then the result should be empty object literal { }*/

function count (string) {
  if(string){
    let check = string.split(''), obj = {}
    check.forEach(e => { obj[e] ? obj[e] += 1 : obj[e] = 1 })
    return obj
  }
  return {};
}



/*Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum [1, 2, 3] 4 === (0, 2)*/

function twoSum(numbers, target) {
  for(let i = 0;i < numbers.length;i++){
    for(let j = (i + 1);j < numbers.length;j++){
      if((numbers[i] + numbers[j]) == target){ return [i, j] }
    }
  }
}

/*Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.*/

function list(names){
  if(names.length == 1){ return names[0]['name'] }
  if(names.length >= 2){
    let ans = ''
    for(let i = 0;i < names.length;i++){
      i == names.length-1 ? (ans = ans.slice(0,ans.length-2)) && (ans += ` & ${names[i]['name']}`) : ans += `${names[i]['name']}, `
    }
    return ans
  }
  return ''
}