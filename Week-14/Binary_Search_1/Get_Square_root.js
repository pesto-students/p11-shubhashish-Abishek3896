function getSquareRoot(number) {
  let start = 0;
  let end = number;
  let beta = 0.000001;
  let median;
  if (number === 0 || number === 1) {
    return number;
  }
  while (start <= end) {
    median = (start + end) / 2;
    let midSquared = median * median;
    if (midSquared < number) {
      start = median + beta;
    } else {
      end = median - beta;
    }
    console.log(median, midSquared, start, end);
  }
  return median.toFixed(6);
}

//console.log(getSquareRoot(9));
