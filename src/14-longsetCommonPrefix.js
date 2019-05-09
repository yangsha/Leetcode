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
//方法1：水平搜索，假设第一个字符串即为公共起始字符串，然后依次判断接下来的字符串是否包含该字符串，如果不包含，则不断删除
//该假设字符串最后一个字母，直到该字符串为空或者搜索完所有字符串
//或者说找出前两个字符串的公共起始字符串，然后再找出该字符串于第三个字符串的公共起始字符串，然后依次类推
var longestCommonPrefix1 = function(strs) {
    if(strs.length===0) return "";
    if(strs.length===1) return strs[0];
    let result = strs[0];
    for(let i=1;i<strs.length;i++){
        while(strs[i].indexOf(result)!==0){
            result = result.slice(0,result.length-1)
            if(result==="") return result
        }
    }
    return result;
};
//方法2：垂直搜索，同样先假设第一个字符串为公共其实字符串，然后检查接下来的每一个字符串的第i个字符时候与该字符串的
//第i个字符相同，停止条件:1）查询到不相同的字符，结束，返回i之前的字符串；2）某一字符串被查询完，同样结束，返回i之前的字符串
var longestCommonPrefix2 = function(strs) {
    if(strs.length===0) return "";
    if(strs.length===1) return strs[0];
    let result = strs[0];
    for(let i=0;i<result.length;i++){
        for(let j=1;j<strs.length;j++){
            if(strs[j][i]!==result[i]||i===strs[j].length){
                return (result.slice(0,i))
            }
        }
    }
    return result;
}
//console.log(longestCommonPrefix2( ["flower","flow","flight"]))
//方法3 分治法
var longestCommonPrefix = function(strs) {
    if(strs.length===0) return "";
    if(strs.length===1) return strs[0];
    return longestCommonPre(strs,0,strs.length-1);
    function longestCommonPre(strs,head,tail) {
        if(head===tail) return strs[head];
        let mid=Math.floor((head+tail)/2);
        let leftString = longestCommonPre(strs,head,mid);
        let rightString = longestCommonPre(strs,mid+1,tail)
        return common(leftString,rightString)
    }
    function common(str1,str2) {
        if(str1.length>str2.length){
            let temp = str1;
            str1 = str2;
            str2 = temp;
        }
        while(str2.indexOf(str1)!==0&&str1!==""){
            str1=str1.slice(0,str1.length-1)
        }
        return str1
    }
}
console.log(longestCommonPrefix( ["flwower","flwow","flwight"]))