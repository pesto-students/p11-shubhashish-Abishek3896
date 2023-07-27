class Node {
  constructor(value, nextNode) {
    this.data = value;
    this.next = nextNode;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertAtEnd(value) {
    let temp = new Node(value, null);
    if (this.head == null) {
      this.head = temp;
    } else {
      let start = this.head;
      let end = null;
      while (start) {
        end = start;
        start = start.next;
      }
      end.next = temp;
    }
    this.size += 1;
    return;
  }
}

function findIntersection(list1, list2) {
  if (list1.size >= list2.size) {
    let diff = list1.size - list2.size;
    let start = list1.head;
    let list2Start = list2.head;
    for (let i = 0; i < diff; i++) {
      start = start.next;
    }
    while (start && list2Start) {
      if (start === list2Start) {
        return start;
      }
      start = start.next;
      list2Start = list2Start.next;
    }
  } else {
    let diff = list2.size - list1.size;
    let start = list2.head;
    let list1Start = list1.head;
    for (let i = 0; i < diff; i++) {
      start = start.next;
    }
    while (start && list1Start) {
      if (start === list1Start) {
        return start;
      }
      start = start.next;
      list1Start = list1Start.next;
    }
  }
  return 'No Intersection point';
}

const l1 = new LinkedList();
const node1 = new Node(3, null);
const node2 = new Node(6, null);
const node3 = new Node(9, null);
const node4 = new Node(10, null);
const node5 = new Node(11, null);
node4.next = node5;
node3.next = node4;
node2.next = node3;
node1.next = node2;
l1.head = node1;
l1.size = 5;

// Create and populate the second linked list
const l2 = new LinkedList();
const node6 = new Node(2, null);
node6.next = node4; // Set the next node to be the same as in the first list
l2.head = node6;
l2.size = 3;
console.log(findIntersection(l1, l2));
