
//二叉树的最大深度

var maxDepth = function(root) {

    if(root===null){
        return 0
    }
    let maxDepth = 0;
    function maxDepthHelper(root,current){
        current+=1;
        if(root.left===null&&root.right===null){
            maxDepth = Math.max(maxDepth,current)
        }
        if(root.left!==null){
            maxDepthHelper(root.left,current)
        }
        if(root.right!==null){
            maxDepthHelper(root.right,current)
        }
    }

    maxDepthHelper(root,0)
    return maxDepth;
    
};
