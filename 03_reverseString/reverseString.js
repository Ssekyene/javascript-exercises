const reverseString = function(string) {
  const arr = string.split('');
  const revArr = [];
  let j = 0;
  for (let i = arr.length-1; i >= 0 ; i--) {
    revArr[j++] = arr[i];
  }
  const revString = revArr.join('');
  return revString;
};

// Do not edit below this line
module.exports = reverseString;
