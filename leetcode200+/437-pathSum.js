
// 给定一个二叉树，它的每个结点都存放着一个整数值。
//
// 找出路径和等于给定数值的路径总数。
//
// 路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
//
// 二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。


var pathSum = function(root, sum) {

    if(root===null){
        return 0;
    }
    let result = 0;
    function pathSumHelper(root,current){
        if(current===sum){
            result+=1
        }
        if(root===null){
            return
        }
        pathSumHelper(root.left,current);
        pathSumHelper(root.right,current)
    }
    pathSumHelper(root.left,root.val);
    pathSumHelper(root.right,root.val)
    return result;
};
