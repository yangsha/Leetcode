// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
// Example 1:
//
// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:
//
// Input: num1 = "123", num2 = "456"
// Output: "56088"
// Note:
//
//     The length of both num1 and num2 is < 110.
// Both num1 and num2 contain only digits 0-9.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
//解题思路：第一，最简单的思路便是将两个字符串都转化为数字，然后想乘。明显会溢出报错；第二，复制乘法的思路过程，用加法代替乘法，同样会
//溢出，所以最好的方法就是一直不让这个结果以Number的形式存在，那么便不会存在溢出的情况。先计算出每一位可能的存在，
var multiply = function(num1, num2) {
    if(num1==='0'||num2==="0")  return '0';
    let result = new Array(num1.length+num2.length).fill(0);;
    if(num1==='1') return num2;
    else if(num2 === '1') return num1
    else{
        for(let i=num1.length-1;i>=0;i--){
            for(let j=num2.length-1;j>=0;j--){
                result[i+j+1]+=Number(num1[i])*Number(num2[j])
            }
        }
        let carry = 0;
        for(let i=result.length-1 ;i>=0;i--){
            let temp = (result[i]+carry)%10;
            carry = Math.floor((result[i]+carry)/10);
            result[i] = temp;
        }
    }
    let index,str="";
    for(let i =0;i<result.length;i++){
        if(result[i]!==0)
        {
            index = i;
            break;
        }
    }
    for(let i=index;i<result.length;i++){
        str +=result[i].toString()
    }
    return str;
};
console.log(multiply("12","12"))
