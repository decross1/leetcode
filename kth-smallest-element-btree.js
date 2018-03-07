// Problem Here: https://leetcode.com/problems/kth-smallest-element-in-a-bst/

/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/*
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    var kth = root.val;

    var recurse = function (root, k) {
        if (!root) {
            return 0
        }

        var left = recurse(root.left, k);
        if (left === k - 1) {
            kth = root.val
        }

        return 1 + left + recurse(root.right, k - 1 - left)
    }

    recurse(root, k);
    return kth;
};