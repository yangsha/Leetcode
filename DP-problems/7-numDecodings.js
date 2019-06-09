// A message containing letters from A-Z is being encoded to numbers using the following mapping:
//
//     'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given a non-empty string containing only digits, determine the total number of ways to decode it.
//
//     Example 1:
//
// Input: "12"
// Output: 2
// Explanation: It could be decoded as "AB" (1 2) or "L" (12).
//     Example 2:
//
// Input: "226"
// Output: 3
// Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
/**
 * @param {string} s
 * @return {number}
 */
//动态规划
var numDecodings = function(s) {
    if(s.length===0||s[0]==='0') return 0
    if(s.length===1) return 1
    let  result = new Array(s.length).fill(0);
    result[0] =1;
    result[-1]=1;
    for(let i=1;i<s.length;i++){
        if(Number(s[i])>=1&&Number(s[i])<=9){
            result[i]+=result[i-1]
        }
        if((Number(s[i-1])*10+Number(s[i]))<=26&&Number(s[i-1])*10+Number(s[i])>=10){
            result[i]+=result[i-2]
        }

    }
    return result[s.length-1]
};
console.log(numDecodings("27"))
