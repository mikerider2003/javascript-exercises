const sumAll = function(number1, number2) {
    if (number1 < 1 || number2 < 1) {
        return "ERROR";
    }

    if (typeof(number1) != "number" || typeof(number2) != "number") {
        return "ERROR";
    }

    let sum = 0;
    if (number1 < number2) {
        for(let i = number1; i <= number2; i++) {
            sum += i
        }
    }
    else {
        for(let i = number2; i <= number1; i++) {
            sum += i
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
