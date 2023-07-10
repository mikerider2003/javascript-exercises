const repeatString = function(string, n) {
    if (n < 0) {
        return "ERROR";
    }

    let newstring = "";
    for(let i=1; i <= n; i++) {
        newstring += string;
    }
    return newstring;
};

// Do not edit below this line
module.exports = repeatString;
