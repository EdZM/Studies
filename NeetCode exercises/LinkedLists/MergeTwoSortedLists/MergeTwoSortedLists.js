class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? -1 : val;
    this.next = next === undefined ? null : next;
  }
}

var mergeTwoListsRecursive = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoListsRecursive(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoListsRecursive(list1, list2.next);
    return list2;
  }
};

var mergeTwoListsIterative = function (list1, list2) {
  const dummy = new ListNode();
  let current = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 || list2;

  return dummy.next;
};

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const resultList = mergeTwoListsIterative(list1, list2);
let currentNode = resultList;
let resultString = "";
while (currentNode) {
  resultString += currentNode.val + " -> ";
  currentNode = currentNode.next;
}
resultString += "null";
console.log("Merged List:", resultString); // Merged List: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> null
console.log("Merged List (Recursive):", mergeTwoListsRecursive(list1, list2)); // Merged List (Recursive): 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> null
