// Given a string, find the length of the longest substring without repeating characters.
//  Example 1:
// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
//思路：1.暴力搜索，时间复杂度为O(n^2);2.sliding windows,时间复杂度o(n)
let lengthOfLongestSubstring = function(s) {
    if(s.length===0) return 0;
    let result = 0,i=0,j=0;
    let numberSet = [];
    while(i<s.length&&j<s.length){
        if(!(numberSet.includes(s[j]))){
            numberSet.push(s[j])
            result = result>numberSet.length ? result:numberSet.length;
            j++
        }
        else{
            numberSet.shift();
            i++;
        }
    }
    return result
};
console.log(lengthOfLongestSubstring("aaaaaa"))
//注意：最长子串不是最长子序列
