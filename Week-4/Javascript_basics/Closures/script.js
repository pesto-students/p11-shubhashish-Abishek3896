const counter = () => {
  let count = 1;
  return function incrementbyOne() {
    return count++;
  };
};
const firstCounter = counter();
const secondCounter = counter();
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
