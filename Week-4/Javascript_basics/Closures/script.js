const Counter = () => {
  let Count = 1;
  return function incrementbyOne() {
    return Count++;
  };
};
const firstCounter = Counter();
const secondCounter = Counter();
const firstValues = [
  firstCounter(),
  firstCounter(),
  firstCounter(),
  firstCounter(),
  firstCounter(),
];
const secondValues = [secondCounter(), secondCounter(), secondCounter()];
console.log(
  `FirstValues Array: [${firstValues}] SecondValues Array: [${secondValues}]`
);
