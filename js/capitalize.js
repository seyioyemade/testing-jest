const capitalizeString = (str) => {
  const lowerCase = str.toLowerCase();
  const firstLetterToUpperCase = lowerCase[0].toUpperCase();
  const result = firstLetterToUpperCase + lowerCase.substring(1);

  return result;
}
module.exports = capitalizeString;