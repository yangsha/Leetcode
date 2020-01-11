//输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
//
/**
 * @return {boolean}
 */
function HasSubTree(pRoot1, pRoot2){

    let result = false;

    function hasSubTree(node1,node2){
        if(node2===null){
            return true
        }
        if(node1===null){
            return false
        }
        if(node1.val!==node2.val){
            return false
        }
        return hasSubTree(node1.left,node2.left)&&hasSubTree(node1.right,node2.right)
    }

    if(pRoot1!==null&&pRoot2!==null){
        if(pRoot1.val===pRoot2.val){
            result = hasSubTree(pRoot1,pRoot2)
        }
        if(!result){
            result = HasSubTree(pRoot1.left,pRoot2)
        }
        if(!result){
            result = HasSubTree(pRoot1.right,pRoot2)
        }
    }
    return result
}
