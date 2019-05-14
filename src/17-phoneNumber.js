// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
//
// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
// Example:
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

//方法 回溯
var letterCombinations = function(digits) {
    if(digits==="") return[]
    const numberMap = {
        2:'abc',
        3:'def',
        4:'ghi',
        5:'jkl',
        6:'mno',
        7:'pqrs',
        8:'tuv',
        9:'wxyz'
    }
    let result = [];
    function backtrack(str1,str2){
        if(str2.length===0) {
            result.push(str1)
        }else{
            for(const letter of numberMap[str2[0]]){
                backtrack(str1+letter,str2.slice(1,str2.length))
            }
        }
    }
    backtrack("",digits)
    return result;
};
console.log(letterCombinations("234"))
//递归回溯，首先确定起始条件，即只有一个数字的时候，将所有的对应字母罗列一遍，如果不止一个数字的话，
//不断地取数字字符串中的数字，罗列其对应的字母并与之前已经形成的字符串相加。
