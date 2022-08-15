const palindromes = function (e) {
    let eFixed =  e.replace(/[^\w\s\']|_/g, "").toLowerCase().replace(/\s+/g, "");

    let reverse = eFixed.split('').reverse().join('');
    return reverse === eFixed

};

// Do not edit below this line
module.exports = palindromes;
