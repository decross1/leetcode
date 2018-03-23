var maxProduct = function (nums) {
    if (nums.length === 0 || nums === null) {
        return 0;
    } else if (nums.length === 1) {
        return nums[0];
    }

    let max = nums[0], min = max, result = max;

    for (let i = 1; i < nums.length; i++) {

        let tempMax = nums[i] * max;
        let tempMin = nums[i] * min;
        max = Math.max(Math.max(tempMax, nums[i]), tempMin);
        min = Math.min(Math.min(tempMax, nums[i]), tempMin)
        result = Math.max(result, max)
    }

    return result;
};