const add = function(numbe1, numbe2) {
	return numbe1 + numbe2;
};

const subtract = function(numbe1, numbe2) {
	return numbe1 - numbe2;
};

const sum = function(array) {
  var result = 0;

  if (array.length === 0) {
    return 0;
  } 

	array.forEach(element => {
    result += element;
  });

  return result;
};

const multiply = function() {
  var result = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    result *= arguments[i];
  };

  return result;
};

const power = function(number, power) {
	return number ** power;
};

const factorial = function(factorial) {
  var result = arguments[0];

	if (factorial === 0) {
    return 1;
  };

  for (let i = factorial - 1; i > 0; i--) {
    result *= i;
  };

  return result;
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
