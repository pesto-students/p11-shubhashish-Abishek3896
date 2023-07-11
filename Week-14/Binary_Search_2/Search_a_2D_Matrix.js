function findTarget(row, column, arr, target) {
  if (arr[row - 1][column - 1] < target) {
    return false;
  }
  let i = 0;
  let searchrow;
  let isFound = false;
  while (i < row) {
    if (arr[i][column - 1] === target) {
      isFound = true;
      break;
    } else if (arr[i][column - 1] < target) {
      i += 1;
      continue;
    } else {
      searchrow = i;
      break;
    }
  }
  let start = 0;
  let end = column - 1;
  while (start <= end && !isFound) {
    let mid = Math.floor((start + end) / 2);
    if (arr[searchrow][mid] === target) {
      isFound = true;
    } else if (arr[searchrow][mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    //console.log(searchrow,mid);
  }
  return isFound;
}
// console.log(
//   findTarget(
//     3,
//     4,
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     34
//   )
// );
