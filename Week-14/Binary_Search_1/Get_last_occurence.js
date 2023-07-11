function getLastOccurence(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let isAnswer = false;
  let answer = 0;
  while (start <= end) {
    let median = Math.floor((start + end) / 2);
    if (arr[median] > target) {
      end = median - 1;
    } else if (arr[median] === target) {
      answer = median;
      isAnswer = true;
      start = median + 1;
    } else {
      start = median + 1;
    }
  }
  return isAnswer ? answer : -1;
}

//console.log(getLastOccurence([1, 2, 3, 3, 5], 3));
