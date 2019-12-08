//判断一棵树是否是对称二叉树
//方法1：递归，主要判断左右两个节点是否对称相等，即左子树得左节点和右子树得右节点相等，右子树得左节点和左子树的右节点相等
var isSymmetric = function(root) {
    if(root===null){
        return true
    }
    return isSameTree(root.left,root.right)
};
function isSameTree(left,right) {
    if(left===null&&right===null){
        return true
    }else if(left===null||right===null){
        return false
    }else{
        if(left.val!==right.val){
            return false
        }
        return (isSameTree(left.left,right.right)&&isSameTree(left.right,right.left))
    }
}
