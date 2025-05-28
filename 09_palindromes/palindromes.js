const palindromes = function (str) {
  const palindromeValidChars = 'abcdefghijklmnopqrstuvwxyz1234567890';
  const loweredCharArr = str.toLowerCase().split('');
  // filter for a new lowercase array containing only valid characters and turn it into a string
  const cleanedStr = loweredCharArr.filter(char => palindromeValidChars.includes(char)).join('');

  // convert the cleaned string into a an array which is reversed and them convert back to string
  const reversedCleanedStr = cleanedStr.split('').reverse().join('');

  return (reversedCleanedStr === cleanedStr);
};

// Do not edit below this line
module.exports = palindromes;
