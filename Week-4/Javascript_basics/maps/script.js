const calcWordFrequencies = () => {
  let question = prompt('Enter the input');
  if (question) {
    const questionArray = question.split(' ');
    var freq = {};
    questionArray.map(word => {
      if (freq[word]) {
        freq[word] += 1;
      } else {
        freq[word] = 1;
      }
    });
    let OutputArr = Object.entries(freq);
    for ([key, value] of OutputArr) {
      console.log(key, value);
    }
    return 'Frequencies returned';
  } else {
    return 'No input';
  }
};
