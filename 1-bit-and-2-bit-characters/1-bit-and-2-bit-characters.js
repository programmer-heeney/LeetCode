/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let index = null;
    let finalArray = [];
    
    do{
        index = bits.indexOf(1);
        if(index !== -1) {
            bits.splice(0, index+2);
        } else {
            return true;
        }
    }while(bits.length > 1);
    
    return bits.length === 0 ? false : true;
};