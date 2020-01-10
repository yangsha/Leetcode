

//给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
//BfS
var levelOrderBottom = function(root) {

    let result =[];
    let queueList = [];
    if(root===null){
        return result
    }
    queueList.push(root);
    while(queueList.length!==0){
        let list  = [];
        let size = queueList.length;
        for(let i = 0;i<size;i++){
            let node = queueList[0];
            queueList.shift();
            list.push(node.val);
            if(node.left!==null){
                queueList.push(node.left);
            }
            if(node.right!==null){
                queueList.push(node.right);
            }
        }
        result.push(list)
    }

    let start = 0;
    let end = result.length-1;

    while(start<end){
        let temp = result[start];
        result[start] = result[end];
        result[end] = temp;
    }
    return result;


};
