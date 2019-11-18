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
// 顺序遍历链表，当遇到m到n之间的节点时，将节点原地倒置，但是由于此时节点的指向发生变化，所以不能再继续
// 遍历，收手动设置下一个将要遍历到的节点实现遍历
var reverseBetween = function(head, m, n) {
    if(m===n) return head;
    let dummy = new ListNode(null);
    dummy.next = head;
    let point = head;
    let count = 0;
    let leftNode = new ListNode(null),rightNode = new ListNode(null),preNode = dummy;
    while(point!==null){
        count++;
        if(count===m){
            leftNode = preNode;
            rightNode = point;
        }
        if(count>m&&count<n){
            let temp = point.next;
            point.next = preNode;
            preNode = point;
            point = temp;
            continue;
        }
        if(count===n){
            rightNode.next = point.next;
            point.next = preNode;
            leftNode.next = point;
            break
        }
        preNode = preNode.next;
        point = point.next;
    }
    return dummy.next
    // if(m === n){
    //     return head
    // }
    // let dummy = new ListNode(null)
    // dummy.next = head
    // let prevNode = dummy
    // let leftNode = new ListNode(null)
    // let rightNode = new ListNode(null)
    // let count = 0
    // while (head!==null){
    //     count++
    //     if(count === m){
    //         leftNode = prevNode
    //         rightNode = head
    //     }
    //     if(count>m&&count<n){
    //         let temp = head.next
    //         head.next = prevNode
    //         prevNode = head
    //         head = temp
    //         continue
    //     }
    //     if(count===n){
    //         rightNode.next = head.next
    //         head.next = prevNode
    //         leftNode.next = head
    //         break
    //     }
    //     head = head.next
    //     prevNode = prevNode.next
    // }
    // return dummy.next
}
