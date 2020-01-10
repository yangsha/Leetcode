//循环赋值
function reConstructBinaryTree(pre, vin)
{
    // write code here
    if(pre.length===0){
        return null;
    }
    let root = 0;
    let preLeft = [];
    let preRight = [];
    let inLeft = [];
    let inRight = [];
    let head = new TreeNode(pre[0]);
    while(vin[root]!==pre[0]){
        root++;
    }
    for(let i=0;i<root;i++){
        preLeft.push(pre[i+1]);
        inLeft.push(vin[i])
    }
    for(let j = root+1;j<vin.length;j++){
        preRight.push(pre[j]);
        inRight.push(vin[j]);
    }
    head.left = reConstructBinaryTree(preLeft,inLeft);
    head.right = reConstructBinaryTree(preRight,inRight);
    return head
}
