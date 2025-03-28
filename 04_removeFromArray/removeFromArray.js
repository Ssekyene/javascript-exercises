const removeFromArray = function(arr, ...args) {
  const filteredArray = [];
  let i = 0;
  for (let element of arr) {
    if (!args.includes(element))
      filteredArray[i++] = element;
  }
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
