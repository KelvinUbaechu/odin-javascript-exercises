function positiveMod(num, divisor) {
    // always return positive integer
    return (num % divisor + divisor) % divisor;
}

function isAlpha(char) {
    return char && char.toUpperCase() !== char.toLowerCase();
}

function shiftAlphaChar(char, offset) {
    if(!isAlpha(char)) {
        return char;
    }
    let aCode;
    let zCode;
    if(char === char.toUpperCase()) {
        aCode = 'A'.charCodeAt(0);
        zCode = 'Z'.charCodeAt(0);
    } else {
        aCode = 'a'.charCodeAt(0);
        zCode = 'z'.charCodeAt(0);
    }
    let numOfAlpha = zCode - aCode + 1;
    let newCode = positiveMod((char.charCodeAt(0) - aCode + offset), numOfAlpha) + aCode;
    return String.fromCharCode(newCode);

}

const caesar = function(string, offset) {
    return string.split('').map((char) => shiftAlphaChar(char, offset)).join('');
};

// Do not edit below this line
module.exports = caesar;
