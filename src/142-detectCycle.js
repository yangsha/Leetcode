// 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
// 说明：不允许修改给定的链表。

//方法1:顺序遍历链表中的节点，并用集合存下来经过的点，当遇到第一个相同的点时，即入环的点
var detectCycle = function(head) {
    let hashSet = new Set();
     while(head!==null){
        hashSet.add(head);
        head = head.next;
        if(hashSet.has(head)){
            return head
        }
    }
    return null
};
