const removeFromArray = function(numArray, ...args) {
    let fixed ="";
    
    fixed = numArray.filter(item => !args.includes(item));

    return fixed

};

// Do not edit below this line
module.exports = removeFromArray;
