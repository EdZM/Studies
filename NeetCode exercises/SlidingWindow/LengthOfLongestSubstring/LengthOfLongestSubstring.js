const fullString = "abcabcbb";

var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let left = 0;
  let right = 0;
  const set = new Set();

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      longest = Math.max(longest, right - left + 1);
      right++;
    } else {
      set.delete(s[left]);
      left++;
    }
  }

  return longest;
};

console.log(lengthOfLongestSubstring(fullString));
