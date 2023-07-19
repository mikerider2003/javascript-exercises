const fibonacci = function(num) {
    if(num <= 0){
        return "OOPS";
    };

    const NUM_ARRAY = [1, 1];

    for(let i = 0; i < num - 2; i++){
        NUM_ARRAY.push(NUM_ARRAY[i] + NUM_ARRAY[i + 1]);
    };

    return NUM_ARRAY[NUM_ARRAY.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
