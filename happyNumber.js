/*
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let iterations = 0;
    let sum = 0;
    let happy = false;

    while (sum !== 1 && iterations <= 10) {
        let split = (n + '').split('');
        sum = split.map(ele => ele *= parseInt(ele)).reduce((accum, ele) => { return accum + ele });
        n = sum;
        if (sum === 1) {
            happy = true;
            break;
        }

        iterations++;
    }

    return happy;
};