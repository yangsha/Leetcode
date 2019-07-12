//题目
/*
Reverse a linked list from position m to n. Do it in one-pass.

    Note: 1 ≤ m ≤ n ≤ length of list.

    Example:

Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

var reverseBetween = function(head, m, n) {
    if(m === n){
        return head
    }
    let dummy = new ListNode(null)
    dummy.next = head
    let prevNode = dummy
    let leftNode = new ListNode(null)
    let rightNode = new ListNode(null)
    let count = 0
    while (head!==null){
        count++
        if(count === m){
            leftNode = prevNode
            rightNode = head
        }
        if(count>m&&count<n){
            let temp = head.next
            head.next = prevNode
            prevNode = head
            head = temp
            continue
        }
        if(count===n){
            rightNode.next = head.next
            head.next = prevNode
            leftNode.next = head
            break
        }
        head = head.next
        prevNode = prevNode.next
    }
    return dummy.next
}
