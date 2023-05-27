const calcWordFrequencies = () => {
  let sentence = prompt('Enter the input');
  if (sentence.length > 1) {
    const sentenceArray = sentence.split(' ');
    var freq = {};
    sentenceArray.map(word => {
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

calcWordFrequencies();
