function kthElement(arr1, arr2, k) {
  let i = 0;
  let j = 0;
  let mergedArr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArr.push(arr1[i]);
      mergedArr.push(arr2[j]);
      i += 1;
      j += 1;
      continue;
    } else {
      mergedArr.push(arr2[j]);
      mergedArr.push(arr1[i]);
    }
    i += 1;
    j += 1;
  }
  if (j < arr2.length) {
    for (let k1 = j; k1 < arr2.length; k1++) {
      mergedArr.push(arr2[k1]);
    }
  }
  if (i < arr1.length) {
    for (let k1 = i; k1 < arr1.length; k1++) {
      mergedArr.push(arr1[k1]);
    }
  }
  return mergedArr[k - 1];
}

//console.log(kthElement([2, 4, 6, 8, 10], [1, 3, 5, 7, 9, 11], 8));
