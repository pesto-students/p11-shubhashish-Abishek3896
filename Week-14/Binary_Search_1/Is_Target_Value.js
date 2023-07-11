function isPresent(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let isTarget = false;
  while (start <= end) {
    let median = Math.floor((start + end) / 2);
    if (arr[median] > target) {
      end = median - 1;
    } else {
      if (arr[median] === target) {
        isTarget = true;
        return isTarget;
      }
      start = median + 1;
    }
  }
  return isTarget;
}

//console.log(isPresent([1, 3, 5, 7, 9], 10))
