const playGuessingGame = (numtoguess, totalGuesses = 10) => {
  let question = 'Enter a number between 1 and 100';
  for (let i = 0; i < totalGuesses; ++i) {
    let answer = prompt(question);
    if (isNaN(answer)) {
      question = `Please enter a number`;
      i -= 1;
    } else if (answer) {
      if (answer == numtoguess) {
        return 'Correct Answer';
      } else if (answer > numtoguess) {
        question = `${answer} is too large. Guess a smaller number.`;
      } else {
        question = `${answer} is too Small. Guess a larger number.`;
      }
    } else {
      return 0;
    }
  }
  return 'Game Over';
};
