
//判断从根节点到叶子节点上是否存在和等于sum的提条路径

var hasPathSum = function(root, sum) {
    if(root===null){
        return sum===0
    }
    function hasPathSumHelper(root,num) {
        let current = num+root.val;
        if(root.left===null&&root.right===null){
             return current===sum
        }
        if(root.left=== null){
            return hasPathSumHelper(root.right,current)
        }
        if(root.right===null){
            return hasPathSumHelper(root.left,current)
        }
        return hasPathSumHelper(root.left,current)||hasPathSumHelper(root.right,current)
    }

    return hasPathSumHelper(root,0)
};

