const reverseString = (string) => {
  if (typeof string !== 'string') throw new Error('A string is expected');
  return string.split('').reverse().join('');
};
export default reverseString;