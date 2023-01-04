function isPalindrome(word) {
  // Write your algorithm here

  if (word.length < 2) return true;

  let start = 0;
  let end = word.length - 1;

  while (start <= end) {
    if (word[start] != word[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

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
