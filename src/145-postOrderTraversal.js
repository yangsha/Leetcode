
//二叉树的后续遍历

//方法1：递归
var postorderTraversal = function(root) {
    if(root === null){
        return [];
    }
    function getValue(root,result){
        if(root === null){
            return
        }
        getValue(root.left,result);
        getValue(root.right,result);
        result.push(root.val);
    }
    let result = [];
    getValue(root,result);
    return result;
};
//方法2:迭代
var postorderTraversal2 = function(root) {
    if(root === null){
        return [];
    }

};
