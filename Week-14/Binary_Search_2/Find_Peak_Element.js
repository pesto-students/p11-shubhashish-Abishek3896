function findPeak(k, arr) {
  let start = 0;
  let end = arr.length - 1;
  let answer = k + 1;
  while (start <= end) {
    let median = Math.floor((start + end) / 2);
    if (arr[median] > arr[median - 1] && arr[median] > arr[median + 1]) {
      answer = median;
      return answer;
    }
    if (arr[median] < arr[median + 1]) {
      start = median + 1;
    } else {
      end = median - 1;
    }
  }
  return answer < arr.length ? answer : -1;
}

//console.log(findPeak(4, [1, 2, 3, 4, 5]))
