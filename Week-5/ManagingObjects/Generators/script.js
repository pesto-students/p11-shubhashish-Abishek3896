function* generator(array) {
  yield* array;
}
const input = ['hello', 'world', 'test'];
const gen = generator(input);

console.log(Symbol(gen.next().value));
console.log(Symbol(gen.next().value));
console.log(Symbol(gen.next().value));
