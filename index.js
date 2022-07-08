function isPalindrome(word) {
  // Write your algorithm here
  const words = `${word}`
  const splitString = words.split("")
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join("");
  if(joinArray === words){
    return true
  } else{
    return false
  }
}

/* 
  Add your pseudocode here
  assign word to variable
  use split
  use reverse 
  use join
  if statement
     return true or false
*/

/*
  Add written explanation of your solution here
  puts string into an array
  reverses the string
  conditional check if same statement 
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
