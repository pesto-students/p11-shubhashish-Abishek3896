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
function LargestRectangle(input) {
  let indexStack = new Stack();
  let outputArr = [];
  let minimum = input[0];
  indexStack.push(minimum);
  for (let i = 1; i < input.length; i++) {
    if (input[i] >= minimum) {
      indexStack.push(input[i]);
    } else {
      rectArea = minimum * indexStack.length;
      outputArr.push(rectArea);
      indexStack.popAll();
      minimum = input[i];
      indexStack.push(minimum);
    }
  }
  rectArea = minimum * indexStack.length;
  outputArr.push(rectArea);
  indexStack.popAll();
  return Math.max(outputArr);
}
console.log(LargestRectangle([2, 1, 5, 6, 2, 3]));
