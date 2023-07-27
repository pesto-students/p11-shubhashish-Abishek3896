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
function simplify(input) {
  let inputArr = input.split('/');
  let tempStack = new Stack();
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === '..') {
      if (tempStack.length > 0) {
        tempStack.pop();
      } else {
        return 'Invalid Path';
      }
    } else if (inputArr[i] == '.' || inputArr[i] == '') {
      continue;
    } else {
      tempStack.push(inputArr[i]);
    }
  }
  let output = '';
  if (tempStack.length > 0) {
    for (let i = 0; i < tempStack.length; i++) {
      output += `/${tempStack.stack[i]}`;
    }
    return output;
  } else {
    return null;
  }
}

console.log(simplify('/home/.././user//foo/../../bar'));
console.log(simplify('/a/b/c'));
