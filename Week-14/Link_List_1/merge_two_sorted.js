function mergeTwolist(list1, list2) {
  const mergedNode = new ListNode(0);
  let tempNode = mergedNode;
  while (list1 != null && list2 != null) {
    if (list1.val < list2.val) {
      tempNode.next = list1;
      list1 = list1.next;
    } else {
      tempNode.next = list2;
      list2 = list2.next;
    }
    tempNode = tempNode.next;
  }
  if (list1 != null) {
    tempNode.next = list1;
    list1 = list1.next;
  }
  if (list2 != null) {
    tempNode.next = list2;
    list2 = list2.next;
  }
  return mergedNode.next;
}
