const palindromes = function (string) {
    var result;
    const size = Math.floor(string.length/2)
    
    string = string.toLowerCase();
    // string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"")
    
    const PUNCTUATION = ".,\/#!$%\^&\*;:{}=\-_`~() ";
    for (let i = 0; i < PUNCTUATION.length; i++) {
        string = string.replaceAll(PUNCTUATION[i], "")
    };

    for (let i = 0; i < size; i++) {
        if(string[i] != string[string.length - i - 1]){
            return false;
        };
    };

    return true;
};

// Do not edit below this line
module.exports = palindromes;
