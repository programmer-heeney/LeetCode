/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    if (deck.length < 2) 
        return false;
    
    const dupleObj = deck.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1
        return acc;
    }, {});
    const arr = [];
    for (let key in dupleObj) {
        arr.push(dupleObj[key]);
    }
    
    const gcd = arr.reduce((acc, cur) => {
        let check = null;
        for(let i = 2; i <= Math.min(acc, cur); i++){
            if(acc % i === 0 && cur % i === 0) {
                check = i;
            }
        }
        return check !== null ? check : 1;
    });
    
    if(gcd === 1) {
        return false;
    }
    return true;
};