/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    var sum = numBottles;
    var rest = 0;
    
    while(numBottles > 0) {
        rest = numBottles % numExchange;
        numBottles = Math.floor(numBottles/numExchange);
        sum = sum + numBottles;
        if(numBottles <= 0) return sum;
        numBottles = numBottles + rest;
    }
};