
//操作给定的二叉树，将其变换为源二叉树的镜像。
function Mirror(root)
{
    // write code here
    if(root === null){
        return
    }
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    if(root.left!==null){
        Mirror(root.left)
    }
    if(root.right!==null){
        Mirror(root.right)
    }
}
