

//二叉树的锯齿形遍历
//检测到是第偶数行时，就倒置列表数组。
var zigzagLevelOrder = function(root) {
    let result =[];
    let queueList = [];
    if(root===null){
        return result
    }
    queueList.push(root);
    let count = 0;
    while(queueList.length!==0){
        count++;
        let list  = [];
        let size = queueList.length;
        for(let i = 0;i<size;i++){
            let node = queueList[0];
            queueList.shift();
            list.push(node.val);
            if(count%2===0){
                list = reverse(list);
            }
            if(node.left!==null){
                queueList.push(node.left);
            }
            if(node.right!==null){
                queueList.push(node.right);
            }
        }
        result.push(list)
    }

    function reverse(list){
        let start=0;
        let end = list.length-1;
        while(start<end){
            [start,end] = [end,start];
            start++;
            end--;
        }
        return list;
    }

    return result;
};
