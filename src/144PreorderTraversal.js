
//二叉树的先序遍历
//方法1：递归
var preorderTraveral = function(root){
    if(root === null){
        return [];
    }
    function getValue(root,result){
        if(root === null){
            return
        }
        result.push(root.val);
        getValue(root.left,result);
        getValue(root.right,result);
    }
    let result = [];
    getValue(root,result);
    return result;
}
//方法2：迭代
var preorderTraveral2 = function(root){
    if(root === null){
        return [];
    }
    let stack = [];
    let result = [];
    let current = root;
    while(stack.length!==0||current!==null){
         while(current!==null){
             stack.push(current);
             result.push(current.val);
             current = current.left;
         }
         let node = stack[stack.length-1];
         stack.pop();
         if(node.right!==null){
             current = node.right;
         }
    }
    return result;
}

