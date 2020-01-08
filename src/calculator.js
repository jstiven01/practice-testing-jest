const calculator = (() => {
  const add = (number1, number2) => number1 + number2;
  const subtract = (number1, number2) => number1 - number2;
  const multiply = (number1, number2) => number1 * number2;
  const divide = (number1, number2) => {
    if (number2 === 0) throw new Error('You are dividing by 0');
    return number1 / number2;
  };

  return {
    add, subtract, multiply, divide,
  };
})();

export default calculator;