//方法1 ：顺序遍历链表，把遍历到的点都存在集合里，然后判断当前遍历到的点在不在集合里，在的话就说明有环
//如果遍历到最后为null ,说明没环，时间复杂度O(N),空间复杂度O(N).
//方法2：快慢指针 有环总会相遇，时间复杂夫o(n),空间复杂度o(1).
var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    while(fast!==null){
        if(fast.next===null){
            return false
        }
        fast = fast.next.next;
        slow = slow.next;
        if(fast===slow){
            return true
        }
    }
    return false
};
