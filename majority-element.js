/*
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var store = {};
    var largest = [];

    nums.forEach(ele => {
        if (!store[ele]) {
            store[ele] = 1
        } else {
            store[ele]++;
        }
    })

    for (var key in store) {
        if (largest.length === 0) {
            largest = [key, store[key]]
        } else if (store[key] > largest[1]) {
            largest = [key, store[key]];
        }
    }

    return parseInt(largest[0]);
};