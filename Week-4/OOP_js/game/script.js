const game = {
  lives: 3,
  coins: 0,
};
const points = ({ lives, coins }) => {
  return coins * 10;
};
const playerDies = ({ lives, coins }) => {
  if (lives > 0) {
    lives -= 1;
  }
  game.lives = lives;
  return game;
};
const newGame = ({ lives, coins }) => {
  game.lives = 3;
  game.coins = 0;
};
console.log(`lives = ${game.lives}`);
console.log(`coins = ${game.coins}`);
let point = points(game);
console.log(`points = ${point}`);
game.coins = 2;
point = points(game);
console.log(`points = ${point}`);
playerDies(game);
console.log(`lives = ${game.lives}`);
playerDies(game);
playerDies(game);
console.log(`lives = ${game.lives}`);
newGame(game);
console.log(`lives = ${game.lives}`);
console.log(`coins = ${game.coins}`);
