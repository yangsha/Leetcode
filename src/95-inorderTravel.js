/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//中序遍历一棵树的所有节点
//方法1 递归遍历 但是时间复杂度较高，有没有可能用迭代？
var inorderTraversal = function(root) {
    if(root === null) return []

    function getValue(root,result){
        if(root === null){
            return
        }
        getValue(root.left,result)
        result.push(root.val)
        getValue(root.right,result)
    }

    let result = []
    getValue(root,result)
    return result
};

//方法2 堆栈，利用栈，去模拟递归，
