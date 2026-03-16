class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? -1 : val;
    this.next = next === undefined ? null : next;
  }
}

var reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current) {
    let nextNode = current.next; // Store the next node
    current.next = prev; // Reverse the current node's pointer
    prev = current; // Move prev to the current node
    current = nextNode; // Move to the next node
  }

  return prev; // At the end, prev will be the new head of the reversed list
};
