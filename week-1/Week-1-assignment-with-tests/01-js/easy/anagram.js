/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  
  //split to array because cant sort string
  var array1 = str1.toLowerCase().split("");  //make it caseinsensitive BY (toLowerCase)
  var array2 = str2.toLowerCase().split("");   //means (Dead Body = DeAD BOdY)=>SAME

  //sort the arrays
  array1 = array1.sort();
  array2 = array2.sort();

  //join 
  var String1 = array1.join("");
  var String2 = array2.join("");

  return String1==String2;

}

module.exports = isAnagram;
