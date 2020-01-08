import calculator from '../src/calculator';

test('adding two numbers', () => {
  const result = calculator.add(4, 5);
  expect(result).toBe(9);
});

test('subtracting two numbers', () => {
  const result = calculator.subtract(9, 3);
  expect(result).toBe(6);
});

test('dividing two numbers', () => {
  const result = calculator.divide(8, 2);
  expect(result).toBe(4);
});

test('dividing by 0', () => {
  const divisionBy0 = () => {
    calculator.divide(4, 0);
  };
  expect(divisionBy0).toThrow('You are dividing by 0');
});

test('multiplying two numbers', () => {
  const result = calculator.multiply(4, -3);
  expect(result).toBe(-12);
});