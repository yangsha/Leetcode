// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
//
// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
//
// How many possible unique paths are there?
// Note: m and n will be at most 100.
//
// Example 1:
//
// Input: m = 3, n = 2
// Output: 3
// Explanation:
//     From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
//     1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right
// Example 2:
//
// Input: m = 7, n = 3
// Output: 28
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//动态规划，因为最后一步要么为right，要么为down，所以只需要知道down之前相对应的方法数，和
//right之前相对应的方法数，+1即可
var uniquePaths = function(m, n) {
    //if(m===1&&n===1) return 1;
    let result = new Array(m).fill(new Array(n).fill(null));
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(i===0) {
                result[i][j] = 1;
            }else if(j===0){
                result[i][j]=1;
            }else{
                result[i][j]=result[i-1][j]+result[i][j-1];
            }
        }
    }
    return result[m-1][n-1];
};
console.log(uniquePaths(7,3))