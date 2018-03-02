/*
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
    let result = {}

    nums.forEach(num => {
        if (!result[num]) {
            result[num] = 1;
        } else {
            result[num]++;
        }
    });

    for (number in result) {
        if (result[number] === 1) {
            return parseInt(number);
        }
    }

};