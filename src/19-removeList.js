// Given a linked list, remove the n-th node from the end of list and return its head.
// Example:
// Given linked list: 1->2->3->4->5, and n = 2.
// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:
//     Given n will always be valid.
//     Follow up:
//
//     Could you do this in one pass?
//
//     Accepted

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
//方法1：两次遍历，第一次遍历获取整个链表的长度l，然后顺序移动删除第l-n个元素即可，需要两次遍历；
//方法2：单次遍历，双指针，始终保持第一个指针比第二个多n个元素，那么第一个指针移动到末尾的时候，第二个指针就停留再倒数第n个
let removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode(null);
    dummyHead.next = head;
    let point1=dummyHead,point2 = dummyHead;
    while(n>0){
        point2=point2.next;
        n--;
    }
    while(point2.next!==null){
        point1=point1.next;
        point2=point2.next;
    }
    point1.next=point1.next.next;
    return dummyHead.next;
}
console.log(removeNthFromEnd([1,2,3.4]),2)