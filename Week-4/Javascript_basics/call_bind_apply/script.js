class Calculator {
  add(number1, number2) {
    return number1 + number2;
  }
  subtract(number1, number2) {
    return Math.abs(number1 - number2);
  }
  multiply(number1, number2) {
    return number1 * number2;
  }
  divide(number1, number2) {
    return number1 / number2;
  }
}

class ScientificCalculator extends Calculator {
  square(number) {
    return Math.pow(number, 2);
  }

  cube(number) {
    return Math.pow(number, 3);
  }

  power(number, power) {
    return Math.pow(number, power);
  }
}

const sciCalc = new ScientificCalculator();
const callAdd = sciCalc.add.call(this, 10, 5);
const applySub = sciCalc.subtract.apply(this, [10, 5]);
function multiplybyTwo(value) {
  return this.multiply(value, 2);
}
function powerofThree(value) {
  return this.power(value, 3);
}
const bindfn = multiplybyTwo.bind(sciCalc, 5);
const bindfn2 = powerofThree.bind(sciCalc, 2);
console.log(callAdd, applySub, bindfn(), bindfn2());
