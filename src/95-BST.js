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

//1.平台：人工反馈界面功能调整，加上提交审核之间的检查功能和提交审核之后的提示功能，修复之前存在的一些问题；
//2.阅读论文《Genre Separation Network with Adversarial Training for Cross-genre Relation Extraction 》，介绍了一种基于对抗学习的风格迁移神经网络用于交叉特征关系抽取。























