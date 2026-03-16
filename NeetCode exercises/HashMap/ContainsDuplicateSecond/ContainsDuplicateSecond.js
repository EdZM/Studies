var containsNearbyDuplicate = function (nums, k) {
  let hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i]) && i - hashMap.get(nums[i]) <= k) {
      return true;
    }
    hashMap.set(nums[i], i);
  }
  return false;
};

var containsNearbyDuplicate2Optimized = function (nums, k) {
  // Using a sliding window approach with a Set to track duplicates within the window of size k
  let windowSet = new Set();
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (windowSet.has(nums[right])) {
      return true;
    }
    windowSet.add(nums[right]);

    if (right - left >= k) {
      windowSet.delete(nums[left]);
      left++;
    }
  }
  return false;
};

console.log(containsNearbyDuplicate2([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate2([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate2([1, 2, 3, 1, 2, 3], 2)); // false
console.log(containsNearbyDuplicate2Optimized([1, 2, 3, 4, 5], 3)); // false
