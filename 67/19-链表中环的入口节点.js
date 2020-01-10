
//给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。
//1.顺序遍历链表 把遍历到的每一个节点都存储起来 如果遇到相同的节点 那么说明有环 而且该相同的节点即为环的入口节点
//2.双指针遍历链表 一个指针快 一个指针慢  两指针相遇 说明有环
function EntryNodeOfLoop(pHead)
{
    // write code here
    if(pHead===null||pHead.next===null){
        return null
    }

    let point1 = pHead;
    let point2 = pHead;
    let isHaveCircle = false;
    while(point1!==null&&point1.next!==null){
        point1 = point1.next.next;
        point2 = point2.next
        if(point1===point2){
            isHaveCircle =  true
            break
        }
    }
    if(!isHaveCircle){
        return null
    }else{
        let temp = point1;
        let circleNumber = 1;
        while(point1.next!==temp){
            circleNumber++;
            point1 = point1.next;
        }
        point1 = pHead;
        point2 = pHead;
        for(let i=0;i<circleNumber;i++){
            point1 = point1.next;
        }
        while(point1!==point2){
            point1 = point1.next;
            point2 = point2.next;
        }
        return point2
    }

}
