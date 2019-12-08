
//反转链表
//只需定义两个变量分别用来存储前一个以及前一个前一个节点即可
var reverseList = function(head) {
   let pre = null;
   let prepre = null;
   while(head!==null){
       pre = head;
       head = head.next;
       pre.next = prepre;
       prepre = pre;
   }
   return pre;
};
//快乐数
var isHappy = function(n) {
    let current = n;
    let currentList = [];
    while(current!==1){
        let temp = 0;
        while(current!==0){
            let number = current%10;
            temp+=number*number;
            current = Math.floor(current/10);
        }
        if(currentList.includes(temp)){
            return false
        }else{
            currentList.push(temp)
        }
        current = temp;
    }
    return true;
};
console.log(isHappy(19))
