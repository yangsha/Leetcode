/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
//方法1：递归
//给定一个数n，求1，，n构成的所有二叉查找树，那么
//遍历1到n，将其作为根节点，左边的节点都比该节点小，右边的节点都比该节点大，左右两边的节点采用同样的遍历方法
//左右两边遍历返回的结果分别作为根节点的左右节点

var generateTrees = function(n) {
    if(n===0) return []
    function getResult(start,end){
        let result = []
        if(start>end){
            result.push(null)
            return result
        }
        if(start === end){
            let tempNode = new TreeNode(start)
            result.push(tempNode)
            return result
        }
        for(let i= start;i<=end;i++){
            let leftNode = getResult(start,i-1)
            let rightNode = getResult(i+1,end)
            for(const left of leftNode){
                for(const right of rightNode){
                    let root = new TreeNode(i)
                    root.left = left
                    root.right = right
                    result.push(root)
                }
            }
        }
        return result
    }
    return getResult(1,n)
};

