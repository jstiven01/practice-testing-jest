import reverseString from '../src/reverseString';

test('throwing an error when the parameter is not a string', () => {
  const noStringCase = () => {
    reverseString(4);
  };
  expect(noStringCase).toThrow('A string is expected');
});
test('Reversing a string', () => {
  const reversedString = reverseString('jest');
  expect(reversedString).toBe('tsej');
});