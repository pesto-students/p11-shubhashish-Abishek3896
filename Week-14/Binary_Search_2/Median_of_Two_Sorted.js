function findMedian(size1, arr1, size2, arr2) {
  let m;
  let n;
  let nums1;
  let nums2;
  let answer = 0.0;
  if (size1 > size2) {
    m = size2;
    nums1 = arr2;
    n = size1;
    nums2 = arr1;
  } else {
    m = size1;
    nums1 = arr1;
    n = size2;
    nums2 = arr2;
  }
  let start = 0;
  let end = m;
  while (start <= end) {
    let mid1 = Math.floor((start + end) / 2);
    let mid2 = Math.floor((m + n + 1) / 2) - mid1;
    let maxLeft1 = mid1 === 0 ? -Infinity : nums1[mid1 - 1];
    let maxLeft2 = mid2 === 0 ? -Infinity : nums2[mid2 - 1];
    let minRight1 = mid1 === m ? Infinity : nums1[mid1];
    let minRight2 = mid2 === n ? Infinity : nums2[mid2];
    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((m + n) % 2 === 0) {
        answer =
          (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
        return answer;
      } else {
        answer = Math.max(maxLeft1, maxLeft2);
        return answer;
      }
    } else if (maxLeft1 > minRight2) {
      end = mid1 - 1;
    } else if (maxLeft2 > minRight1) {
      start = mid1 + 1;
    }
  }
  return answer ? answer : 0;
}

//console.log(findMedian(4,[1, 1, 3, 4],4,[2, 2, 5, 6]))
