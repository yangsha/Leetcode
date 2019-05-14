// Given a linked list, swap every two adjacent nodes and return its head.
//You may not modify the values in the list's nodes, only nodes itself may be changed.
// Example:
//
// Given 1->2->3->4, you should return the list as 2->1->4->3.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//递归
var swapPairs = function(head) {
    //边界条件
    if(!head||!head.next){
        return head;
    }
    let v1=head,v2=head.next,v3=v2.next;
    v1.next=swapPairs(v3);
    v2.next=v1;
    return v2;
}
