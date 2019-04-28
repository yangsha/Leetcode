// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Example:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//解题思路：暴力得到第一个数，第二个数，然后求和，然后转化为链表，时间复杂度较高；可以直接加减，
//按照数学竖式做加减的方式来从左到右加；
let addTwoNumbers = function(l1, l2) {
    let p1=l1,p2=l2;
    let head = new ListNode(null);
    let current = head;
    let carry = 0;
    while(p1!==null||p2!==null){
        let x = (p1!==null?p1.val:0);
        let y = (p2!==null?p2.val:0);
        let node = new ListNode((x+y+carry)%10);
        current.next = node;
        current = current.next;
        if(p1!==null) p1 = p1.next;
        if(p2!==null) p2 = p2.next;
        carry = Math.floor((x+y+carry)/10);
    }
    if(carry>0){
        current.next = new ListNode(carry)
    }
    return head.next;
};
//注意点：加到最后一个数时，如果和大于0，这时候会将其/10所得的余数作为结果，这个时候
//不能结束，所以要最后check一下carry是否大于0，大于的话要重新建一个链表节点作为最后的节点。
