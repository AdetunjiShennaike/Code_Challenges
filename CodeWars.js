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

/*A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.*/

function isPangram(string){
  let count = 25;
  while (count >= 0) {
    if(string.toLowerCase().includes(String.fromCharCode(97+count))){
      count--
    }
    else{return false}
  }
  return true
}

/*
The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
Example
abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
=== "e6t-r3s are r4y fun!"

*/

function abbreviate(string) {
  let temp = string.split(' ')
  for( let i = 0; i < temp.length; i++){
    if(temp[i].length > 3){
      if(temp[i].includes('-')){
        let temp2 = temp[i].split('-')
        temp2[0] = `${temp2[0][0]}${temp2[0].length - 2}${temp2[0][temp2[0].length-1]}`
        temp2[1] = `${temp2[1][0]}${temp2[1].length - 2}${temp2[1][temp2[1].length-1]}`
        temp[i] = temp2.join('-')
      }
      else if(temp[i].includes(',')){
        temp[i] = `${temp[i][0]}${temp[i].length - 3}${temp[i][temp[i].length-2]}${temp[i][temp[i].length-1]}`
      }
      else{
        temp[i] = `${temp[i][0]}${temp[i].length - 2}${temp[i][temp[i].length-1]}`
      }
    }
  }
  string = temp.join(' ')
  return string
}


/*
Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'

*/

function dashatize(num) {
  if(isNaN(num)){return 'NaN'}
  let sprt = [], ans = ""
  num > 0 ? sprt = num.toString().split('') : sprt = Math.abs(num).toString().split('')
  
  if(sprt.length == 1) {return sprt[0]}
  //add a dash before and after all odd numbers
  for(let i = 0; i < sprt.length;i++){
    if (i == 0 && parseInt(sprt[i]) % 2 != 0) {
      ans += (`${sprt[i]}-`)
    }
    else if(i == (sprt.length-1) && parseInt(sprt[i]) % 2 != 0) {
      if(ans[ans.length-1].includes('-')){
        ans += (`${sprt[i]}`) 
      }
      else {
        ans += (`-${sprt[i]}`)
      }
    }
    else if(parseInt(sprt[i]) % 2 != 0) {
      if(ans[ans.length-1].includes('-')){
        ans += (`${sprt[i]}-`)
      }
      else {
        ans += (`-${sprt[i]}-`)
      }
    }
    else {
      ans += (`${sprt[i]}`)
    }
  }
  //remove dashes from beginning and end
  //remove double dashes
  return ans
}



/*
Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric keypads.

------- ------- -------
|     | | ABC | | DEF |
|  1  | |  2  | |  3  |
------- ------- -------
------- ------- -------
| GHI | | JKL | | MNO |
|  4  | |  5  | |  6  |
------- ------- -------
------- ------- -------
|PQRS | | TUV | | WXYZ|
|  7  | |  8  | |  9  |
------- ------- -------
------- ------- -------
|     | |space| |     |
|  *  | |  0  | |  #  |
------- ------- -------
Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values.

For example, to type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7). A character is "locked in" once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.

In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. No wonder they abbreviated.

For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).

Hint: While it wouldn't take too long to hard code the amount of keypresses for all 26 letters by hand, try to avoid doing so! (Imagine you work at a phone manufacturer who might be testing out different keyboard layouts, and you want to be able to test new ones rapidly.)
*/

function presses(phrase) {
  // Map out the different key pad options and make an array 
  let two = ['a','b','c','2'], 
  three = ['d','e','f','3'],
  four = ['g','h','i','4'],
  five = ['j','k','l','5'],
  six = ['m','n','o','6'],
  seven = ['p','q','r','s','7'],
  eight = ['t','u','v','8'],
  nine = ['w','x','y','z','9'],
  zero = [' ','0'],
  keypad = ['1', two, three, four, five, six, seven, eight, nine, zero, '#', '*'],
  //separate the phrases to individual characters
  sentence = phrase.toLowerCase().split(''),
  ans = 0
  //search for the character and then break once its found to have a better runtime making it O(n log n)
  for(let i = 0;i < sentence.length;i++){
    for(let j = 0;j < keypad.length;j++){
      if(keypad[j].includes(sentence[i])){ 
        ans += (1 + keypad[j].indexOf(sentence[i]))
        break
      }
    }
  }
  return ans
}



/*
Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/


function findOdd(A) {
  let ans = [], amount = []
  //Make two lists 1 for inputs and other for the amount of appearance
  A.forEach( e => {
    if(ans.includes(e)){amount[ans.indexOf(e)]++}
    else {
      ans.push(e)
      amount.push(1)
    }
  })
  //check for the odd amount and return its corresponding value
  for(let i = 0;i < amount.length;i++){
    if(amount[i] % 2 != 0){ return ans[i] }
  }
}


//helping kimberly
function order(words){
  if(words.length == 0){ return words}
  let newString = [], split = words.split(' ')
  for(i = 1; i< 10; i++){
    split.forEach( n => {
      if(n.includes(`${i}`)){
        newString.push(n)
        break
      }
    })
  }
  return newString.join(' ')
}


/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

var moveZeros = function (arr){
  let count = 0
  for(let i = 0;i < arr.length;i++){
    if(arr[i] === 0){
      count++
      arr.splice(i, 1)
      i--
    }
  }
  while(count > 0){
    arr.push(0)
    count--
  }
  return arr
}


/*
Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If we change the first number to something else, comp may not return true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be [] (all languages except R, Shell). a or b might be nil or null or None or nothing (except in Haskell, Elixir, C++, Rust, R, Shell, PureScript).

If a or b are nil (or null or None), the problem doesn't make sense so return false.

If a or b are empty then the result is self-evident.

a or b are empty or not empty lists.
*/

function comp(array1, array2){
  //if either is null its false
  if(!array1 || !array2) return false
  //if they are both empty strings its true
  if(array1.length == 0 && array2.length == 0) return true
  //put the numbers in order
  array1.sort((a,b) => a-b)
  array2.sort((a,b) => a-b)
  //check 1 by 1 if they are squared accurately if not false
  for(let i = 0;i < array1.length;i++){
    if(array1[i]*array1[i] != array2[i]) return false
  }
  return true
}


/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

function domainName(url){
  let arr, str, ans
    //search the url to see if it has www or http(s)
    if(url.toLowerCase().includes('www')){
      arr = url.split('.'), ans = arr[1]
    }
    else if(url.includes('//')){
      arr = url.split('//'), str = arr[1].split('.'), ans = str[0]
    }
    else {
      arr = url.split('.'), ans = arr[0]
    }
    console.log(url, str)
    return ans
  }

/*
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is: " *\n ***\n*****\n ***\n *\n"
*/

function diamond(n){
  //make if statement for less than 1 and even numbers
  if(n <= 0 || n % 2 == 0){ return null }
  //create the middle point for when the stars decrease
  let mid = Math.ceil(n/2), ans = '', space = ' ', star = '*', count = 1
  //use case for n = 1 
  if(n == 1){ return '*\n' }
  //make more stars till the middle
  for(let i = 1;i <= n;i += 2){
    if(i == n) { ans += `${star.repeat(i)}\n`}
    else { ans += `${space.repeat(mid - count)}${star.repeat(i)}\n` }
    count++
  }
  //at the middle start taking away stars
  count = mid - 1
  for(let i = n - 1;i > 0;i -= 2){
    if(i % 2 == 0){ i-- }
    ans += `${space.repeat(mid - count)}${star.repeat(i)}\n`
    count--
  }
  return ans;
}



/*
Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a multiplication table sized according to the given dimensions. **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.

Example:

multiplication_table(3,3)

1 2 3
2 4 6
3 6 9

-->[[1,2,3],[2,4,6],[3,6,9]]

Each value on the table should be equal to the value of multiplying the number in its first row times the number in its first column.
*/


function multiplicationTable(row,col){
  let ans = []
  for(let i = 0;i < row;i++){
    let temp = []
    for(let j = 0;j < col;j++){
      let cur = (j+1) * (i+1)
      temp.push(cur)
    }
    ans.push(temp)
  }
  return ans
}


// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution("camelCasing")  ==  "camel Casing"


// complete the function
function solution(string) {
  // Create variable to hold the ans and to hold the position of the camel case
  let ans = '', hold = 0
  // Loop through the string to look at every character
  for(let i = 0;i < string.length;i++){
    // If the character is a capital we add up until that point to the string 
    // along with a space for the next word
    if(string[i] != string[i].toLowerCase()){
      ans += string.slice(hold, i) + ' ' 
      hold = i
    }
    // If we are at the end of the string we simply add the last word with no space
    if(i == string.length - 1){
      ans += string.slice(hold)
    }
  }
  return ans
}


// I always thought that my old friend John was rather richer than he looked, but I never knew exactly how much money he actually had. One day (as I was plying him with questions) he said:

// "Imagine I have between m and n Zloty..." (or did he say Quetzal? I can't remember!)
// "If I were to buy 9 cars costing c each, I'd only have 1 Zloty (or was it Meticals?) left."
// "And if I were to buy 7 boats at b each, I'd only have 2 Ringglets (or was it Zloty?) left."
// Could you tell me in each possible case:

// how much money f he could possibly have ?
// the cost c of a car?
// the cost b of a boat?
// So, I will have a better idea about his fortune. Note that if m-n is big enough, you might have a lot of possible answers.

// Each answer should be given as ["M: f", "B: b", "C: c"] and all the answers as [ ["M: f", "B: b", "C: c"], ... ]. "M" stands for money, "B" for boats, "C" for cars.

// Note: m, n, f, b, c are positive integers, where 0 <= m <= n or m >= n >= 0. m and n are inclusive.

// Examples:
// howmuch(1, 100)      => [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"]]
// howmuch(1000, 1100)  => [["M: 1045", "B: 149", "C: 116"]]
// howmuch(10000, 9950) => [["M: 9991", "B: 1427", "C: 1110"]]
// howmuch(0, 200)      => [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"], ["M: 163", "B: 23", "C: 18"]]
// Explanation of the results for howmuch(1, 100):

// In the first answer his possible fortune is 37:
// so he can buy 7 boats each worth 5: 37 - 7 * 5 = 2
// or he can buy 9 cars worth 4 each: 37 - 9 * 4 = 1
// The second possible answer is 100:
// he can buy 7 boats each worth 14: 100 - 7 * 14 = 2
// or he can buy 9 cars worth 11: 100 - 9 * 11 = 1



function howmuch(m, n) {
  // Check which number is higher and mark accordingly
  let high, low
  if(m < n){
    high = n
    low = m
  }
  else{
    high = m 
    low = n
  }
  // Create an ans array and temp array to set the current match 
  let ans = [], temp = []
  // Loop through from low to high
  for(let i = low;i <= high;i++){
    // If the number can be divided by 7 and remainder 2 and divided by 9
    // remain 1 then we have a match
    if(i % 7 == 2 && i % 9 == 1){
      // subtract the ramainder and divide for the price of a car and boat
      let c = (i - 1)/9, b = (i - 2)/7
      temp = [`M: ${i}`, `B: ${b}`, `C: ${c}`]
      ans.push(temp)
    }
  }
  return ans
}