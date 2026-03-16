var recursiveDepth = function (root) {
  if (root === null) {
    return 0;
  }
  const leftDepth = recursiveDepth(root.left);
  const rightDepth = recursiveDepth(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
};

var iterativeDepth = function (root) {
  if (root === null) {
    return 0;
  }
  const stack = [[root, 1]];
  let maxDepth = 1;
  while (stack.length > 0) {
    const [node, depth] = stack.pop();
    maxDepth = Math.max(maxDepth, depth);
    if (node.left) {
      stack.push([node.left, depth + 1]);
    }
    if (node.right) {
      stack.push([node.right, depth + 1]);
    }
  }
  return maxDepth;
};

// Example usage:
// 5
// / \
//3   7
//   / \
//  6   15
//     /
//    8

const tree = {
  val: 5,
  left: {
    val: 3,
    left: null,
    right: null,
  },
  right: {
    val: 7,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 15,
      left: {
        val: 8,
        left: null,
        right: null,
      },
      right: null,
    },
  },
};

console.log(recursiveDepth(tree)); // Output: 4
console.log(iterativeDepth(tree)); // Output: 4
