var lengthOfLIS = function (nums) {
    var len = nums.length;

    if (len === 0) {
        return 0;
    }

    let temp = [];

    for (let i = 0; i < len; i++) {
        temp.push(1);
    }

    for (var i = 1; i < len; i++) {
        for (var j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                temp[i] = Math.max(temp[i], temp[j] + 1);
            }
        }
    }

    return Math.max.apply(null, temp);
};