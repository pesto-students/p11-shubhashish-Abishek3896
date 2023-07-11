class LinkedList {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}
var isPalindrome = function (head) {
  let x = head;
  let y = head;
  let previous = null;
  while (x != null && x.next != null) {
    x = x.next.next;
    previous = y;
    y = y.next;
  }
  if (previous) {
    previous.next = null;
  }
  let tail = reverse(y);
  while (head != null && tail != null) {
    if (head.val === tail.val) {
      head = head.next;
      tail = tail.next;
      continue;
    } else {
      return false;
    }
  }
  return true;
};
function reverse(start) {
  if (!start.next) {
    return start;
  }
  let first = start;
  let second = first.next;

  while (second) {
    const temp = second.next;
    second.next = first;
    first = second;
    second = temp;
  }
  start.next = null;
  return first;
}
