const palindromes = function (string) {
    let alphaChars = string.toLowerCase().split('').filter((c) => {
        return c !== ' ' && c !== c.toUpperCase();
    });
    let midIdx = Math.floor(alphaChars.length / 2);
    let endIdx = alphaChars.length - 1;
    for(let i = 0; i < midIdx; i++) {
        if(alphaChars[i] !== alphaChars[endIdx - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
