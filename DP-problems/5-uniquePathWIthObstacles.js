// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
// Now consider if some obstacles are added to the grids. How many unique paths would there be?
//     An obstacle and empty space is marked as 1 and 0 respectively in the grid.
//     Note: m and n will be at most 100.
// Example 1:
// Input:
//     [
//         [0,0,0],
//         [0,1,0],
//         [0,0,0]
//     ]
// Output: 2
// Explanation:
//     There is one obstacle in the middle of the 3x3 grid above.
//     There are two ways to reach the bottom-right corner:
//     1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
    //相对于没有障碍物的动态规划，增加了一个判断机制,有障碍的位置值设置为0；
var uniquePathsWithObstacles = function(obstacleGrid) {
        let m = obstacleGrid.length;
        let n = obstacleGrid[0].length;
        if(obstacleGrid[0][0]===1||obstacleGrid[m-1][n-1]===1){
            return 0;
        }
        obstacleGrid[0][0] =1;
        for(let i=1;i<n;i++){
            obstacleGrid[0][i] = obstacleGrid[0][i-1]===1&&obstacleGrid[0][i]===0? 1 :0;
        }
        for(let j=1;j<m;j++){
            obstacleGrid[j][0] = obstacleGrid[j-1][0]===1&&obstacleGrid[j][0]===0? 1 :0;
        }
        for(let i=1;i<m;i++){
            for(let j=1;j<n;j++){
                if(obstacleGrid[i][j]===1){
                    obstacleGrid[i][j]=0
                }else{
                    obstacleGrid[i][j]=obstacleGrid[i][j-1]+obstacleGrid[i-1][j];
                }
            }
        }
        return obstacleGrid[m-1][n-1]
    }
console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))

