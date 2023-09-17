/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = new Map([['(', ')'], ['{', '}'], ['[', ']']])
    const temp = [];
    for(const bracket of s.split('')){
        if(Array.from(map.keys()).includes(bracket)){
            temp.push(bracket);
        }else if(Array.from(map.values()).includes(bracket)){
            if(map.get(temp.pop()) !== bracket ) return false;
        }
    }
    return temp.length === 0;
};