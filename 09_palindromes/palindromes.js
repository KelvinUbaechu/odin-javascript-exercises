const palindromes = function (string) {
    let alphaChars = string.split('').filter((c) => {
        return c !== ' ' && c.toUpperCase() !== c.toLowerCase();
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
