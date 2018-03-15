/*
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let len = n;
    let temp = [];

    for (let i = 0; i <= len; i++) {
        temp.push(0);
    }

    for (let i = 0; i < temp.length; i++) {
        if (i <= 2) {
            temp[i] = i;
        } else {
            temp[i] = temp[i - 1] + temp[i - 2];
        }
    }

    return temp[temp.length - 1];
};