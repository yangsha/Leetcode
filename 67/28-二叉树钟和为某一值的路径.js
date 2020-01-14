//输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
// 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。(注意: 在返回值的list中，数组长度大的数组靠前)

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber)
{
    // write code here
    let result = [];
    if(root===null){
        return result
    }
    function DFS(root,currentList,currentValue){
        currentValue += root.val;
        currentList.push(root.val);
        if(root.left===null&&root.right===null){
            if(currentValue===expectNumber){
                result.push(currentList.slice());
                return
            }
        }
        if(currentValue>expectNumber){
            return
        }
        let left = currentList.slice();
        let right = currentList.slice();
        if(root.left!==null){
            DFS(root.left,left,currentValue)
        }
        if(root.right!==null){
            DFS(root.right,right,currentValue)
        }
    }
    DFS(root,[],0);
    return result;
}

