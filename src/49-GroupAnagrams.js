// Given an array of strings, group anagrams together.
//  Example:
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
//     Output:
// [
//     ["ate","eat","tea"],
//     ["nat","tan"],
//     ["bat"]
// ]
// Note:
//     All inputs will be in lowercase.
//     The order of your output does not matter.
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//顺序遍历
var groupAnagrams = function(strs) {
    let result=[];
    let stringMap={}
    for(let i=0;i<strs.length;i++){
        let str = strs[i];
        let sorted=str.split("").sort().join("")
        if(!stringMap[sorted]){
            stringMap[sorted]=[str]
        }else{
            stringMap[sorted].push(str)
        }
    }
    for(let key in stringMap){
        result.push(stringMap[key])
    }
    return result
};
console.log(groupAnagrams( ["eat", "tea", "tan", "ate", "nat", "bat"]))
