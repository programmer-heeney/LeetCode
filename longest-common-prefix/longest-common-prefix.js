/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const words = [...strs];
    if(words.length < 2) return words[0] ?? '';
    words.sort((a, b) => a < b ? -1 : 1);
    if(words[0].length < 1) return '';

    let common = ''
    for(let i=0; i<words[0].length; i++) {
        common += words[0][i];
        let regex = new RegExp(`^${common}`);
        if(!regex.test(words[words.length - 1])) return common.slice(0, -1);
    }
    return common;
};