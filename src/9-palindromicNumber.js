// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
//
// Example 1:
//
// Input: 121
// Output: true
// Example 2:
//
// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
//     Example 3:
//
// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
    if(x<0) return false;
    if(x>=0&&x<=9) return true;
    if(x%10===0) return false;
    let result =false;
    let right = 0;
    while(x>=right){
        let index = x%10;
        x = Math.floor(x/10);
        right = right*10+index;
        if(x===right||(x>=10?Math.floor(x/10):x)===right){
            result = true;
            break;
        }
    }
    return result;
}
console.log(isPalindrome(21120))
//注意：这道题目简单，但是边界条件较多，要注意考虑全面。