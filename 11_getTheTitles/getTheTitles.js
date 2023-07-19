const getTheTitles = function(array) {
    var result = [];

    for(const element of array){
        result.push(element["title"]);
    };

    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
