function reverseEveryK(head, k) {
  let current = head;
  let previous = null;
  let second;
  let counter = 0;
  while (current && counter < k) {
    second = current.next;
    current.next = previous;
    previous = current;
    current = second;
  }
  if (second) {
    head.next = reverse(second, k);
  }
  return previous;
}
