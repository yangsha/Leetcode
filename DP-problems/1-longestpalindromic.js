// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
//
// Example 1:
//
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
//     Example 2:
//
// Input: "cbbd"
// Output: "bb"
/**
 * @param {string} s
 * @return {string}
 */
//解法1：最长公共字串，正向和反向的最长公共字串，并且两个子串所在的位置相同，那么即为回文串
//解法2：暴力搜索
//解法3：动态规划
let longestPalindrome = function (s){
    const length = s.length;
    let dp = new Array(length).fill(new Array(length).fill(null));
    let result = '';
    for(let i=0;i<length;i++){
        for(let j=0;j<=i;j++){
            let distance = i-j;
            dp[i][j] =  distance < 3 ? s[i]===s[j]:s[i]===s[j]&&dp[i-1][j+1];
            //console.log(dp[i][j])
            if(dp[i][j]&&(i-j+1)>result.length){
                result = s.slice(j,i+1)
            }
        }
    }
    console.log(dp[0][1])
    return result
}
console.log(longestPalindrome('aba'))

