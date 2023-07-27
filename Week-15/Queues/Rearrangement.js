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
}

function Rearrangement(input) {
  let oddQueue = new Queue();
  let evenQueue = new Queue();
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) {
      evenQueue.enqueue(input[i]);
    } else {
      oddQueue.enqueue(input[i]);
    }
  }
  for (let i = oddQueue.length; i > 0; i--) {
    value = oddQueue.head;
    evenQueue.enqueue(value);
    oddQueue.dequeue();
  }
  return evenQueue;
}

console.log(Rearrangement([5, 2, 8, 3, 9, 4]));
