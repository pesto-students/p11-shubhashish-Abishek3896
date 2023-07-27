class Node {
  constructor(value, nextNode) {
    this.data = value;
    this.next = nextNode;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
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
    return;
  }
  deleteWithoutHead(value) {
    if (!this.head) {
      return this.head;
    }
    if (value === this.head.data) {
      return this.head.next;
    }
    let current = this.head;
    let prev = this.head;
    while (current) {
      if (current.data === value) {
        prev.next = current.next;
        // break;
        return this.head;
      }
      prev = current;
      current = current.next;
    }
    // return this.head;
    return null;
  }
}

const list1 = new LinkedList();
list1.insertAtEnd(1);
list1.insertAtEnd(2);
list1.insertAtEnd(3);
console.log(list1.deleteNodeWithValue(2));
