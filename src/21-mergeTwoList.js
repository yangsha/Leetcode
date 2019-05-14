// Merge two sorted linked lists and return it as a new list.
// The new list should be made by splicing together the nodes of the first two lists.
// Example:
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4
//方法1：依次取到两个链表中的每个数到数组中，然后排序，再形成一个新的链表，时间复杂度较高；
//方法2：同时遍历两个数组...
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
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var mergeTwoLists = function(l1, l2) {
    let newList=new ListNode(null);
    let point = newList;
    while(l1!==null||l2!==null){
        if(l1===null){
            point.next=l2;
            break;
        }else if (l2 === null) {
            point.next = l1;
            break;
        }
        if (l1.val < l2.val) {
            point.next = new ListNode(l1.val)
            point = point.next;
            l1=l1.next;
        }else {
            point.next = new ListNode(l2.val)
            point = point.next;
            l2=l2.next;
        }
    }
    return newList.next;
}
console.log(mergeTwoLists())