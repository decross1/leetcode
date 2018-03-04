// Problem here: https://leetcode.com/problems/house-robber/

/*
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
    let temp = [];

    if (nums.length === 0) {
        return 0;
    } else if (nums.length <= 2) {
        return Math.max(...nums)
    }

    for (var i = 0; i < nums; i++) {
        temp.push(0);
    }

    for (var j = nums.length - 1; j >= 0; j--) {
        curElement = nums[j];
        if (temp[j + 2] !== undefined && temp[j + 1] !== undefined) {
            temp[j] = Math.max(curElement + temp[j + 2], temp[j + 1]);
        } else if (temp[j + 2] === undefined && temp[j + 1] !== undefined) {
            temp[j] = Math.max(curElement, temp[j + 1])
        } else {
            temp[j] = curElement
        }
    }

    return temp[0]
};