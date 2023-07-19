const findTheOldest = function(array) {
    var oldestAge = 0;
    var result;

    for(const element of array){
        if(!("yearOfDeath" in element)){
            element["yearOfDeath"] = 2023;
        };

        if((element["yearOfDeath"] - element["yearOfBirth"]) > oldestAge){
            oldestAge = (element["yearOfDeath"] - element["yearOfBirth"]);
            result = element;
        };
    };

    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
