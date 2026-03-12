function maxArea(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const currentArea = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, currentArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

console.log(
  "maxArea([1,8,6,2,5,4,8,3,7]):",
  maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]),
); // 49
console.log("maxArea([1,1]):", maxArea([1, 1])); // 1
