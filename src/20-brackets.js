// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//An input string is valid if:
// Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Note that an empty string is also considered valid.
//     Example 1:
// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:
//
// Input: "(]"
// Output: false
// Example 4:
//
// Input: "([)]"
// Output: false
// Example 5:
//
// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
//栈，先进后出，后进先出
var isValid = function(s) {
    if(s==="") return true;
    const brackets ={
        '{':'}',
        '[':']',
        '(':')'
    }
    let bracketArray = [];
    for(let i=0;i<s.length;i++){
        if(bracketArray.length===0){
            bracketArray.push(s[i])
        }else{
            if(brackets[bracketArray[bracketArray.length-1]]===s[i]){
                bracketArray.pop();
            }else{
                bracketArray.push(s[i])
            }
        }
    }
    return (bracketArray.length===0);
}
console.log(isValid("()[]{[]}}"))