/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let node1 = l1;
    let node2 = l2;
    let newList = new ListNode(null);
    let list = newList;

    while (node1 && node2) {
        if (node1.val >= node2.val) {
            list.next = node2;
            node2 = node2.next
        } else {
            list.next = node1;
            node1 = node1.next
        }

        list = list.next;
    }

    if (node1) {
        list.next = node1;
    } else {
        list.next = node2;
    }

    return newList.next;
};