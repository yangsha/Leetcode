//删除链表中重复的节点

function deleteDuplication(pHead)
{
    // write code here
    if(pHead===null||pHead.next === null){
        return pHead
    }

    let point = pHead;
    let dummy = new ListNode(null);
    dummy.next = pHead;
    let prePoint = dummy;
    while(point!==null&&point.next!==null){
        let needDelete = false;
        while(point.next!==null&&point.val===point.next.val){
            point = point.next;
            needDelete = true;
        }
        if(!needDelete){
            prePoint = point;
            point = point.next;
        }else{
            prePoint.next = point.next;
            point = point.next;
        }
    }
    return dummy.next
}
//
