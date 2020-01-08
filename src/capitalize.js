const capitalize = (string) => {
  if (typeof string !== 'string') throw new Error('A string is expected');
  return string.charAt(0).toUpperCase() + string.slice(1);
};
export default capitalize;