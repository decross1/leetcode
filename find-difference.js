// Problem Here: https://leetcode.com/problems/find-the-difference/description/

/*
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

var findTheDifference = function (s, t) {
    var sStorage = {};
    var tStorage = {};

    for (var i = 0; i < s.length; i++) {
        var char = s[i]
        if (sStorage[char] === undefined) {
            sStorage[char] = 1;
        } else {
            sStorage[char] += 1;
        }
    }

    for (var j = 0; j < t.length; j++) {
        var char = t[j]
        if (tStorage[char] === undefined) {
            tStorage[char] = 1;
        } else {
            tStorage[char] += 1;
        }
    }

    for (var key in tStorage) {
        if (tStorage[key] !== sStorage[key] || sStorage[key] === undefined) {
            return key;
        }
    }
};