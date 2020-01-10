//输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
/**
 * @return {boolean}
 */
function HasSubtree(pRoot1, pRoot2)
{
    // write code here
     if(pRoot1===null&&pRoot2===null){
         return true
     }else if(pRoot1===null||pRoot2===null){
         return false
     }

     function isSameTree(node1,node2){
         if(node1===null&&node2===null){
             return true
         }
         if(node1===null||node2===null){
             return false
         }
         return isSameTree(node1.left,node2.left)&&(node1.val===node2.val)&&isSameTree(node1.right,node2.right)
     }

     function search(root){
         if(root===null){
             return
         }
         if(root.val === pRoot2.val){
             return isSameTree(root,pRoot2)
         }else{
             return search(root.left)||search(root.right)
         }
     }
     return search(pRoot1)
}
//
