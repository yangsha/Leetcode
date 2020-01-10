
//二叉树的最小深度

var minDepth = function(root) {

    if(root===null){
        return 0
    }
    let maxDepth = 2147483647;
    function minDepthHelper(root,current){
        current+=1;
        if(root.left===null&&root.right===null){
            maxDepth = Math.min(maxDepth,current)
        }
        if(current>maxDepth){
            return
        }
        if(root.left!==null){
            minDepthHelper(root.left,current)
        }
        if(root.right!==null){
            minDepthHelper(root.right,current)
        }
    }
    minDepthHelper(root,0);
    return maxDepth;

};


