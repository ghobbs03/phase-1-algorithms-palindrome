function isPalindrome(word) {
  // Write your algorithm here
  const backwardWord = word.split('').reverse().join('');
  console.log(backwardWord)

  if (word === backwardWord) {
    return true
  }

  return false;
}

/* 
  Add your pseudocode here

  1. Flip the string
  3. Iterate through flipped string
  2. Check if each reversed letter matches forward letter
  3. return according boolean


*/

/*
  Add written explanation of your solution here

  String.split('') treats each letter as a value in an array.
  Then Array.reverse() is used to reverse order of letters in array.
  Lastly we use Array.join() to put it back into a string (backwardWord).
  Then we compare the parameter to backwardWord.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
