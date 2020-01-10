// 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
// 相比于数组的移动，这个更简单些，不需要移动元素的位置，只需要控制开始和结束指针的位置。
var rotateRight = function(head, k) {
    if(head === null||head.next===null){
        return head;
    }
    let dummy  = new ListNode(null);
    let point1  = head;
    let point2 = head;
    let count = 1;
    while(point1.next!==null){
        count++;
        point1 = point1.next;
    }
    k = k%count;
    point1.next = point2;
    for(let i=0;i<count-k-1;i++){
        point2 = point2.next
    }
    dummy.next = point2.next;
    point2.next = null;
    return dummy.next;
};
