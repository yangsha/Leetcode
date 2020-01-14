/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    // write code here
    let result = [];
    if(pRoot===null){
        return result;
    }
    let queueList = [];
    queueList.push(pRoot);
    while(queueList.length!==0){
        let size = queueList.length;
        let list = [];
        for(let i=0;i<size;i++){
            let current = queueList[0];
            list.push(current.val);
            if(current.left!==null){
                queueList.push(current.left)
            }
            if(current.right!==null){
                queueList.push(current.right)
            }
            queueList.shift()
        }
       result.push(list)
    }
    return result;
}
