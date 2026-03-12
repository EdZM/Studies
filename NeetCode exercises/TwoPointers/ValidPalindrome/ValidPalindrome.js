function isPalindrome(s) {
  let formattedString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let start = 0;
  let end = formattedString.length - 1;

  while (start < end) {
    if (formattedString[start] !== formattedString[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

console.log(
  "isPalindrome('A man, a plan, a canal: Panama'):",
  isPalindrome("A man, a plan, a canal: Panama"),
); // true
console.log("isPalindrome('hello'):", isPalindrome("hello")); // false
