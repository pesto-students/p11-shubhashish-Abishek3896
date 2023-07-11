function findMin(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let median = Math.floor((left + right) / 2);
    if (arr[median] > arr[right]) {
      left = median + 1;
    } else {
      right = median;
    }
  }
  return arr[left];
}

//console.log(findMin([4, 5, 6, 7, 0, 1, 2]))
