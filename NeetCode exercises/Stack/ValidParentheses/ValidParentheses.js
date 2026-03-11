function isValid(s) {
  const openBracketsStack = [];
  const openBrackets = new Set(["(", "[", "{"]);

  const correspondingBracketsHash = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of s) {
    if (openBrackets.has(char)) {
      openBracketsStack.push(char);
    } else {
      const lastOpen = openBracketsStack.pop();
      if (lastOpen !== correspondingBracketsHash[char]) {
        return false;
      }
    }
  }

  return openBracketsStack.length === 0;
}

console.log("isValid('()'):", isValid("()")); // true
console.log("isValid('()[]{}'):", isValid("()[]{}")); // true
console.log("isValid('(()[]{}'):", isValid("(()[]{}")); // false
