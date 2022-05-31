const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	return nums.reduce(add, 0);
};

const multiply = function(nums) {
  return nums.reduce((num1, num2) => num1 * num2);
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(num) {
	if(num === 0 || num === 1) return 1;
  let total = 1;
  for(let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
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
