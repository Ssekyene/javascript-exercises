const add = function(a=0, b=0) {
  return a + b;
};

const subtract = function(a=0, b=0) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let prdt = 0;
  if (arr.length) {
    prdt = 1;
    for (let i = 0; i < arr.length; i++) {
      prdt *= arr[i];
  }

  }
  return prdt;

};

const power = function(a=0, b=0) {
	return Math.pow(a, b);
};

const factorial = function(n) {
	if (n <= 1) return 1;
  else return n * factorial(n-1);

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
