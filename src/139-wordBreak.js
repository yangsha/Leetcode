
//单词拆分
//给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
//递归 但是会超时
var wordBreak1 = function(s, wordDict) {
     function isValidString(string) {
         if(string===''){
             return true
         }
         for(let word of wordDict){
             let left = '';
             let right = '';
             let index = 0;
             if(string.indexOf(word)!==-1){
                  index = string.indexOf(word);
                  left = string.slice(0,index);
                  right = string.slice(index+word.length)
                  if(isValidString(left)&&isValidString(right)){
                      return true
                  }
             }
         }
         return false
     }
    return (isValidString(s))
};


// 方法2 分治
// 用dp[i，j)表示从s的第i个字符开始，到第j个字符的前一个结束的字符串能否由wordDict构成；
// 遍历字符串 如果该字符后的字符串包含在字典中并且之前的字符串可以由字典中的字符构成，则返回true
// 该方法同样遇到复杂测试用例时会超时
const wordBreak2 = function (s,wordDict) {

    function isValid(s){
        if(s===''){
            return true
        }
        for(let i=0;i<s.length;i++){
            if(wordDict.includes(s.slice(i,s.length))&&isValid(s.slice(0,i))){
                return true
            }
        }
        return false
    }

    return isValid(s)
}
//console.log(wordBreak2("catsandog",["cats", "dog", "sand", "and", "cat"]))

//两种递归方法都超时，那么是时候使用额外内存把已经出现过的结果存储起来了，方法1改编后如下：
//还是超时
var wordBreak3 = function(s, wordDict) {
    let map = {};//用来存储已经出现过的字符串的性质
    function isValidString(string) {
        if(string===''){
            return true
        }
        if(Object.keys(map).includes(s)){
            return map[string]
        }
        for(let word of wordDict){
            let left = '';
            let right = '';
            let index = 0;
            if(string.indexOf(word)!==-1){
                index = string.indexOf(word);
                left = string.slice(0,index);
                right = string.slice(index+word.length)
                if(isValidString(left)&&isValidString(right)){
                     map[string] = true;
                     return true
                }
            }
        }
        map[string] = false;
        return false
    }
    return (isValidString(s))
};
//方法2改编后如下,终于通过
const wordBreak4 = function (s,wordDict) {
    let map = {};
    function isValid(s){
        if(s===''){
            return true
        }
        if(Object.keys(map).includes(s)){
            return map[s]
        }
        for(let i=0;i<s.length;i++){
            if(wordDict.includes(s.slice(i,s.length))&&isValid(s.slice(0,i))){
                map[s] = true;
                return true
            }
        }
        map[s] = false;
        return false
    }

    return isValid(s)
}

//方法5：动态规划

let wordBreak5 = function (s,wordDict){
    let dp = [];
    dp[0] = true;
    for(let i=0;i<=s.length;i++){
        for(let j=0;j<i;j++){
            dp[i] = dp[j]&&wordDict.includes(s.slice(j,i))
            if(dp[i]){
                break;
            }
        }
    }
    return dp[s.length]
}

console.log(wordBreak5("leetcode",["let", "code"]))



















