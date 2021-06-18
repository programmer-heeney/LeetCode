/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let max = words[0];
    let length = 0;
    order = order.split('');
    const result = words.reduce((acc, cur) => {
        if(acc === null) return null;
        length = Math.min(acc.length, cur.length);
        for(let i=0; i<length; i++){
            max = cur;
            const accIndex = order.findIndex(item => item === acc[i]);
            const curIndex = order.findIndex(item => item === cur[i]);
            if(accIndex < curIndex) {
                max = cur;
                break;
            }
            if(accIndex > curIndex) {
                max = null;
                break;
            }
        }
        if(acc.substring(0, length) === cur.substring(0, length) && acc.length > cur.length) {
            max = null;
        }
        return max;
    });
    return max === null ? false : true;
};