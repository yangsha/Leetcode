
//给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
// 和112题目类似，只是需要把遍历过的数组板保存下来，这个时候千万不能像数字一样直接传递，因为数组地址
//一旦固定，那么虽然是不同函数里的操作，那么都会对原数组进行改变，此时需要通过slice()进行拷贝，拷贝一份新的地址开始的数组。

var pathSum = function(root, sum) {

    let result = [];
    if(root===null){
        return result;
    }
    function pathSumHelper(root,currentValue,currentList){
        let list = currentList.slice();
        currentValue+=root.val;
        list.push(root.val);
        if(root.left===null&&root.right===null){
            if(currentValue===sum){
                result.push(list)
            }
            return
        }
        if(root.left!==null){
            pathSumHelper(root.left,currentValue,list)
        }
        if(root.right!==null){
            pathSumHelper(root.right,currentValue,list)
        }
    }

    pathSumHelper(root,0,[])
    return result;
};

