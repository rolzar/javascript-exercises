const reverseString = function(string) {
    let reverseString ="";
    let len = string.length - 1
    for(let i = len; i >= 0; i--){
        reverseString += string[i]
    }
    
    return reverseString
};

// Do not edit below this line
module.exports = reverseString;
