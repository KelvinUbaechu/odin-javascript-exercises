const fibonacci = function(index) {
    if(index <= 0) return 'OOPS';
    let cur = 0;
    let next = 1;
    for(let i = 0; i < index; i++) {
        let temp = cur;
        cur = next;
        next = temp + next;
    }
    return cur;
};

// Do not edit below this line
module.exports = fibonacci;
