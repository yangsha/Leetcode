
//给定一个非空二叉树, 返回一个由每层节点平均值组成的数组.

var averageOfLevels = function(root) {

    let result = [];
    if(root === null){
        return result;
    }
    let queueList = [];
    queueList.push(root);
    while(queueList.length!==0){
        let sum = 0;
        let size = queueList.length;
        for(let i=0;i<size;i++){
            let node = queueList[0];
            queueList.shift();
            sum+=node.val;
            if(node.left!==null){
                queueList.push(node.left);
            }
            if(node.right!==null){
                queueList.push(node.right)
            }
        }
        result.push(sum/size)
    }
    return result

};
