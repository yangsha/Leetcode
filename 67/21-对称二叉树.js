//判断一颗二叉树是否对称二叉树

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot)
{
    // write code here
    function isSymmetricalHelper(root1,root2){
        if(root1===null&&root2===null){
            return true
        }
        if(root1===null||root2===null){
            return false
        }
        if(root1.val!==root2.val){
            return false
        }
        return isSymmetricalHelper(root1.left,root2.right)&&isSymmetricalHelper(root1.right,root2.left)
    }
    if(pRoot===null){
        return true
    }
    if(pRoot.left===null&&pRoot.right===null){
        return true
    }
    if(pRoot.left===null||pRoot.right===null){
        return false
    }
    return isSymmetricalHelper(pRoot.left,pRoot.right)
}

