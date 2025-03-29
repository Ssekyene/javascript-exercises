const sumAll = function(a, n) {
  if (!Number.isInteger(a) || !Number.isInteger(n)) return 'ERROR';
  if (a < 0 || n < 0) return 'ERROR';
  let sum = a;
  if (n > a) {
    for (i = a+1; i <= n; i++) {
      sum += i;
    }
  } else {
    for (i = a-1; i >= n; i--) {
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
