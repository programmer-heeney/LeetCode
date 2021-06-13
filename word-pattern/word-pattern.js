/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    var patternArr = pattern.split('');
    var sArr = s.split(' ');
    var obj = {};
    
    if(patternArr.length !== sArr.length) return false;
    
    for(let i=0; i<sArr.length; i++){
        if(obj[patternArr[i]] === undefined){
            obj[patternArr[i]] = []; 
        }
        obj[patternArr[i]].push(sArr[i]);
        if(obj[patternArr[i]].findIndex(item => item === sArr[i]) !== 0)
            { return false; }
    };
    var checkArr = [];
    for(let key in obj) {
        checkArr.push(obj[key][0]);
    }
    
    const setPattern = new Set(patternArr);
    const setS = new Set(checkArr);
    const checkPattern = [...setPattern];
    const checkS = [...setS];
    if(checkPattern.length !== checkS.length) {
        return false;
    }
    return true;
};