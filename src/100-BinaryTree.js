/*
* Given two binary trees, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
Example 1:
Input:     1         1
         / \       / \
        2   3     2   3

       [1,2,3],   [1,2,3]

Output: true
Example 2:
Input:     1         1
         /           \
        2             2

       [1,2],     [1,null,2]

Output: false
Example 3:
Input:     1         1
         / \       / \
        2   1     1   2

       [1,2,1],   [1,1,2]

Output: false
* */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    //中序遍历|先序遍历|后续遍历
    function preorderTraversal(p,q){
        if(p===null && q===null){
            return true
        }else if(p===null || q===null){
            return false
        }

        if(!preorderTraversal(p.left,q.left)){
            return false
        }
        if(!preorderTraversal(p.right,q.right)){
            return false
        }
        return (p.val === q.val)
    }
    return preorderTraversal(p,q)
};
