
//输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。

/**
 * @return {number}
 */
function NumberOf1(n)
{
    // write code here
    let count =0;
    for(let i=0;i<32;i++){
        if((n>>i)&1===1){
            count++
        }
    }
    return count
}
console.log(NumberOf1(3))
