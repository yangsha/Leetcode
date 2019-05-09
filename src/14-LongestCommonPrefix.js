// Write a function to find the longest common prefix string amongst an array of strings.
//
//     If there is no common prefix, return an empty string "".
//
//     Example 1:
//
// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */

//方法1：水平搜索，首先假设第一个字符串即为最终字符串，然后逐个检测接下来的每个字符串是否以此为首
//如果否，则不断减少该字符串的长度，直至字符串的长度减为0或者扫描完整个字符串数组。
var longestCommonPrefix = function(strs) {
    if(strs.length===0) return "";
    if(strs.length===1) return strs[0];
    let result = strs[0];
    for(let i=1;i<strs.length;i++){
        while(strs[i].indexOf(result)!==0){
            result = result.slice(0,result.length-1)
            if(result==='') return "";
        }
    }
    return result;
}
console.log(longestCommonPrefix( ["flower","flow","flight"]))
//方法2：垂直方向搜索
var longestCommonPrefix2 = function(strs) {

}
