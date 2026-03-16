class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? -1 : val;
    this.next = next === undefined ? null : next;
  }
}

var addTwoNumbers = function (list1, list2) {
  const dummy = new ListNode();
  let sentinel = dummy;
  let carry = 0;

  while (list1 || list2 || carry > 0) {
    let sum = (list1?.val ?? 0) + (list2?.val ?? 0) + carry;
    let sumRightDigit = Math.floor(sum / 10);
    let sumLeftDigit = sum % 10;
    carry = sumRightDigit;

    const sumNode = new ListNode();
    sumNode.val = sumLeftDigit;
    sentinel.next = sumNode;
    sentinel = sumNode;

    if (list1) {
      list1 = list1.next;
    }
    if (list2) {
      list2 = list2.next;
    }
  }

  if (carry > 0) {
    const carryNode = new ListNode(carry);
    sentinel.next = carryNode;
  }

  return dummy.next;
};

var addTwoNumbers_More_Efficient_Answer = function (l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    let sum = carry;

    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }

  return dummy.next;
};

const printResult = function () {
  const resultList = addTwoNumbers(list1, list2);
  let currentNode = resultList;
  let resultString = "";
  while (currentNode) {
    resultString += currentNode.val + " -> ";
    currentNode = currentNode.next;
  }
  resultString += "null";

  return resultString;
};

const list1 = new ListNode(
  2,
  new ListNode(4, new ListNode(6, new ListNode(5))),
);
const list2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(printResult()); // Output: 7 -> 0 -> 8 -> null
