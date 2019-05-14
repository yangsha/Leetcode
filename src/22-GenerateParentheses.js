// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//     For example, given n = 3, a solution set is:
//     [
//         "((()))",
//         "(()())",
//         "(())()",
//         "()(())",
//         "()()()"
//     ]
//回溯

var generateParenthesis = function(n) {
    if(n===0) return [];
    let result=[];
    backtrack('',n,n);
    function backtrack(str,left,right){
        if(!left&&!right&&str.length){
            result.push(str)
        }
        if(left>0) backtrack(str+'(',left-1,right);
        if(right>left) backtrack(str+')',left,right-1)
    }
    return result
}
console.log(generateParenthesis(0))
