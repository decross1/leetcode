// Problem Here: https://leetcode.com/problems/sort-characters-by-frequency/description/

/*
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    var tempObj = {};
    var tempArr = [];
    var result = '';

    for (var i = 0; i < s.length; i++) {
        let letter = s[i];
        tempObj[letter] === undefined ? tempObj[letter] = 1 : tempObj[letter]++;
    }

    for (var letter in tempObj) {
        tempArr.push([letter, tempObj[letter]])
    }

    tempArr.sort((a, b) => { return b[1] - a[1]; })

    tempArr.forEach((item) => {
        for (var i = 0; i < item[1]; i++) {
            result = result + item[0];
        }
    })
    return result;
};