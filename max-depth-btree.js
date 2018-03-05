/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @return {number}
 */

 // Problem Here: https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

var maxDepth = function (node) {
    if (!node) return 0;
    let leftHeight = maxDepth(node.left);
    let rightHeight = maxDepth(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
};

