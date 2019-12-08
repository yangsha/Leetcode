
//验证链表是否回文链表，要求0（1）的空间复杂度
//借助数组来存储链表中的值的话，空间复杂度为0（n），如果想要O（1）的空间复杂度，那么就不能借助数组
//快慢指针先确定链表的中间位置，再分别向前向后遍历链表判断是否相等
var isPalindrome = function(head) {
    if(head===null||head.next===null){
        return true;
    }
   let fast = head;
   let slow = head;
   let pre = new ListNode(null);
   let prepre = new ListNode(null);
   while(fast!==null&&fast.next!==null){
       pre = slow;
       fast = fast.next.next;
       slow = slow.next;
       pre.next = prepre;
       prepre = pre;
   }
   let p1 = new ListNode(null);
   let p2 = new ListNode(null);
    if(fast===null){
         p1 = pre;
         p2 = slow;
    }else if(fast.next===null){
         p1 = pre;
         p2 = slow.next;
    }
    while(p1!==null&&p2!==null){
        if(p1.val!==p2.val){
            return false;
        }
        p1 = p1.next;
        p2 = p2.next;
    }
    return true;
}



// public boolean isPalindrome(ListNode head) {
//     if(head == null || head.next == null) return true;
//     ListNode slow = head, fast = head.next, pre = null, prepre = null;
//     while(fast != null && fast.next != null) {
//         //反转前半段链表
//         pre = slow;
//         slow = slow.next;
//         fast = fast.next.next;
//         //先移动指针再来反转
//         pre.next = prepre;
//         prepre = pre;
//     }
//     ListNode p2 = slow.next;
//     slow.next = pre;
//     ListNode p1 = fast == null? slow.next : slow;
//     while(p1 != null) {
//         if(p1.val != p2.val)
//             return false;
//         p1 = p1.next;
//         p2 = p2.next;
//     }
//     return true;
// }

