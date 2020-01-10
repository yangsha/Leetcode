
//给定一个二叉树，返回所有从根节点到叶子节点的路径。
//DFS

var binaryTreePaths = function(root) {

    let result = [];
    if(root===null){
        return result;
    }
    function binaryTreePathsHelper(root,currentString) {
         if(currentString===""){
            currentString+=root.val
          }else{
            currentString+="->"+root.val
          }
         if(root.left===null&&root.right===null){
              result.push(currentString);
              return
         }
         if(root.left!==null){
             binaryTreePathsHelper(root.left,currentString)
         }
         if(root.right!==null){
             binaryTreePathsHelper(root.right,currentString)
         }
    }

    binaryTreePathsHelper(root,"")
    return result;

};
