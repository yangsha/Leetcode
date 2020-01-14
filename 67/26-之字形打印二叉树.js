
//请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，
// 第三行按照从左到右的顺序打印，其他行以此类推。
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    // write code here
    let stack1 = [];
    let stack2 = [];
    let result = [];
    if(pRoot === null){
        return result
    }
    let level = 1;
    stack1.push(pRoot);
    while(stack1.length!==0||stack2.length!==0){
        let list = [];
        if(level%2===1){
            let size = stack1.length;
            for(let i=0;i<size;i++){
                let current = stack1.pop();
                list.push(current.val);
                if(current.left!==null){
                    stack2.push(current.left)
                }
                if(current.right!==null){
                    stack2.push(current.right)
                }
            }
        }else{
            let size = stack2.length;
            for(let i=0;i<size;i++){
                let current = stack2.pop();
                list.push(current.val);
                if(current.right!==null){
                    stack1.push(current.right)
                }
                if(current.left!==null){
                    stack1.push(current.left)
                }
            }
        }
        result.push(list);
        level++;
    }
    return result
}
