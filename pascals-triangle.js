// Problem Here: https://leetcode.com/problems/pascals-triangle/description/

/*
 * @param {number} numRows
 * @return {number[][]}
 */


var generate = function (numRows) {
    var result = [];
    if (numRows <= 0)
        return result;

    var previousArray = [];
    previousArray.push(1);
    result.push(previousArray);

    for (var i = 2; i <= numRows; i++) {
        var currentArray = [];

        currentArray.push(1);
        for (var j = 0; j < previousArray.length - 1; j++) {
            currentArray.push(previousArray[j] + previousArray[j + 1]);
        }
        currentArray.push(1);

        result.push(currentArray);
        previousArray = currentArray;
    }
    return result;
};