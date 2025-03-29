const convertToCelsius = function(tempInFah) {
  let tempInCel = (tempInFah - 32) * (5/9);
  // rounded to one decimal place
  tempInCel = Math.round(tempInCel * 10) / 10;
  return tempInCel;
};

const convertToFahrenheit = function(tempInCel) {
  let tempInFah = (tempInCel * (9/5)) + 32;
  // rounded to one decimal place
  tempInFah = Math.round(tempInFah * 10) / 10;
  return tempInFah;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
