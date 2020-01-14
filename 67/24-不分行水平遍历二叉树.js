/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    // write code here
    let result = [];
    if(root===null){
        return result;
    }
    let queueList = [];
    queueList.push(root);
    while(queueList.length!==0){
        let front = queueList[0];
        result.push(front.val);
        queueList.shift();
        if(front.left!==null){
            queueList.push(front.left)
        }
        if(front.right!==null){
            queueList.push(front.right)
        }
    }
    return result;
}
