class LinkedList {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}
function removeDuplicates(head) {
  let uniqueMap = {};
  let previous = null;
  let current = head;
  while (current) {
    if (uniqueMap[current.val]) {
      let temp = current.next;
      previous.next = temp;
      current = temp;
    } else {
      uniqueMap[current.val] = true;
      previous = current;
      current = current.next;
    }
  }
  return head;
}
