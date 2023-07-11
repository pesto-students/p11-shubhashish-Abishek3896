const divideArray = nums => {
  const evenArray = [];
  const oddArray = [];
  let answer = '';
  nums.forEach(num => {
    if (num % 2 === 0) {
      evenArray.push(num);
    } else {
      oddArray.push(num);
    }
    evenArray.sort();
    oddArray.sort();
    return evenArray, oddArray;
  });
  if (evenArray) {
    answer = 'Even numbers: ';
    for (let i = 0; i < evenArray.length; i++) {
      answer += ` ${evenArray[i]} `;
    }
  } else {
    answer = 'Even numbers: None';
  }
  if (oddArray) {
    answer += ' Odd numbers:';
    for (let i = 0; i < oddArray.length; i++) {
      answer += ` ${oddArray[i]} `;
    }
  } else {
    answer += ' Odd numbers: None';
  }
  return answer;
};
