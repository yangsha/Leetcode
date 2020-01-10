//求根到叶子节点数字之和
//DFS
var sumNumbers = function(root) {
    if(root === null){
        return 0
    }
    let result = [];
    function getValue(root,num) {
         let current = num*10+root.val;
         if(root.left===null&&root.right===null){
             result.push(current);
             return
         }
         if(root.left!==null){
             getValue(root.left,current);
         }
         if(root.right!==null){
             getValue(root.right,current)
         }
    }
    getValue(root,0);
    let sum = 0;
    for(let i=0;i<result.length;i++){
        sum+=result[i];
    }
    return sum;
};
