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
}
function reversePolish(input) {
  let output = new Stack();
  let integer = /[0-9]/g;
  let symbols = /[-+*/]/g;
  for (let i = 0; i < input.length; i++) {
    if (input[i].match(integer)) {
      output.push(input[i]);
    } else {
      if (output.length >= 2 && input[i].match(symbols)) {
        let var1 = output.head;
        output.pop();
        let var2 = output.head;
        output.pop();
        let varOutput = eval(`${var1} ${input[i]} ${var2}`);
        //console.log(varOutput);
        output.push(varOutput);
      } else {
        return 'Invalid Notation';
      }
    }
  }
  return output.head;
}
console.log(reversePolish(['2', '3', '4', '*', '+']));
console.log(reversePolish(['1', '2', '+', '3', '4', '5', '*', '+', '*']));
