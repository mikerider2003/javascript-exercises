const removeFromArray = function() {

    let result = [];
    let remove = [];

    for(let i = 1; i < arguments.length; i++) {
        remove.push(arguments[i]);
    }

    for(let item of arguments[0]) {
        if (!(remove.includes(item))) {
            result.push(item);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
