class Stack {
  constructor() {
    this.head;
    this.stack = [];
    this.length = 0;
  }
  push(value) {
    this.stack.push(value);
    this.head = value;
    this.length = this.stack.length;
    return;
  }
  pop() {
    if (this.length > 1) {
      this.stack.pop();
      this.length = this.stack.length;
      this.head = this.stack[this.length - 1];
    } else if (this.length === 1) {
      this.head = this.stack.pop();
      this.length = this.stack.length;
    } else {
      return 'No elements to pop';
    }
    return;
  }
  popAll() {
    this.stack = [];
    this.head = -1;
    this.length = this.stack.length;
    return;
  }
}
function NextGreaterElement(input) {
  let tempStack = new Stack();
  let output = [];
  for (let i = input.length - 1; i >= 0; i--) {
    if (tempStack.length === 0) {
      output.push(-1);
      tempStack.push(input[i]);
      continue;
    } else {
      if (input[i] > tempStack.head) {
        output.push(-1);
        tempStack.pop();
        tempStack.push(input[i]);
      } else {
        output.push(tempStack.head);
      }
    }
  }
  return output.reverse();
}

console.log(NextGreaterElement([5, 4, 3, 2, 1]));
console.log(NextGreaterElement([5, 3, 8, 4, 2, 7, 1]));
