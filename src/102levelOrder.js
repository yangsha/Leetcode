//二叉树的层次遍历
//方法1 ： BFS
//宽度优先搜索
//队列
var levelOrder = function(root) {

   let result =[];
   let queueList = [];
   if(root===null){
       return result
   }
   queueList.push(root);
   while(queueList.length!==0){
       let list  = [];
       let size = queueList.length;
       for(let i = 0;i<size;i++){
           let node = queueList[0];
           queueList.shift();
           list.push(node.val);
           if(node.left!==null){
               queueList.push(node.left);
           }
           if(node.right!==null){
               queueList.push(node.right);
           }
       }
       result.push(list)
   }
   return result;

};
