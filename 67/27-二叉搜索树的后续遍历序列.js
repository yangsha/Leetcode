//输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。
// 假设输入的数组的任意两个数字都互不相同。

/**
 * @return {boolean}
 */
function VerifySequenceOfBST(sequence)
{
    // write code here
    if(sequence.length===0){
        return false
    }
    if(sequence.length===1){
        return true
    }
    function VerifySquenceOfBSTHelper(subSeq){
        if(subSeq.length===1||subSeq.length===0){
            return true
        }
        let root = subSeq[subSeq.length-1];
        let left = [];
        let right = [];
        let i=0;
        for(;i<subSeq.length-1;i++){
            if(subSeq[i]<root){
                left.push(subSeq[i])
            }else{
                break
            }
        }
        for(;i<subSeq.length-1;i++){
            if(subSeq[i]>root){
                right.push(subSeq[i])
            }else{
                break
            }
        }
        return (left.length+right.length+1)===subSeq.length&&VerifySquenceOfBSTHelper(left)&&VerifySquenceOfBSTHelper(right)
    }
    return VerifySquenceOfBSTHelper(sequence)?'Yes':'No';
}

console.log(VerifySequenceOfBST([7,4,6,5]))
