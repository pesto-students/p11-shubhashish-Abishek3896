class Queue {
  constructor() {
    this.head;
    this.queue = [];
    this.length = 0;
  }
  enqueue(value) {
    this.queue.push(value);
    if (!this.head) {
      this.head = value;
    }
    this.length = this.queue.length;
    return;
  }
  dequeue() {
    if (this.queue.length > 0) {
      this.queue.shift();
      if (this.queue.length > 0) {
        this.head = this.queue[0];
      } else {
        this.head = 0;
      }
    } else {
      return null;
    }
    this.length = this.queue.length;
    return;
  }
  reversefirstK(limit) {
    if (this.length === 0) {
      return null;
    }
    let tempStack = [];
    for (let i = 0; i < limit; i++) {
      tempStack.push(this.queue.shift());
    }
    //console.log('beforeReversing', this.queue, tempStack);
    for (let i = 0; i < limit; i++) {
      let value = tempStack.shift();
      this.queue.unshift(value);
    }
    this.head = this.queue[0];
    //console.log('AfterReversing', this.queue);
    return;
  }
}
const Queue1 = new Queue();
Queue1.enqueue(1);
Queue1.enqueue(2);
Queue1.enqueue(3);
Queue1.enqueue(4);
Queue1.enqueue(5);
Queue1.enqueue(6);
Queue1.enqueue(7);
Queue1.reversefirstK(3);
console.log(Queue1.queue);
