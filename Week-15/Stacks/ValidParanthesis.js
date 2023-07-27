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
function validParanthesis(input) {
  let inputArr = input.split('');
  let temp = new Stack();
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === '(' || inputArr[i] === '{') {
      temp.push(inputArr[i]);
    } else {
      if (temp.length > 0) {
        if (inputArr[i] === ')' && temp.head === '(') {
          temp.pop();
        } else if (inputArr[i] === '}' && temp.head === '{') {
          temp.pop();
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return temp.length === 0 ? true : false;
}

console.log(validParanthesis('(){}'));
console.log(validParanthesis('((()))'));
