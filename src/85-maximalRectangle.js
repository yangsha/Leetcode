// Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.
// //
// // Example:
// //
// //     Input:
// //         [
// //             ["1","0","1","0","0"],
// //             ["1","0","1","1","1"],
// //             ["1","1","1","1","1"],
// //             ["1","0","0","1","0"]
// //         ]

/**
 * @param {character[][]} matrix
 * @return {number}
 */

// 方法：遍历数组，并用另外的一个一维数组记录每一行有多少个连续1，表示宽度，并且每次遍历到的时候如果该位子为1，计算一下上下周围宽度不小于该宽度的长度
// 计算出此时的面积并与最大值比较
var maximalRectangle = function (matrix) {
    let m = matrix.length
    if(m===0) return 0
    let n = matrix[0].length
    let max = 0
    let temp = new Array(m).fill(0)
    for(let j=0;j<n;j++){
        for(let i=0;i<m;i++){
            if(matrix[i][j] === '1'){
                temp[i]++
            }else{
                temp[i]=0
            }
        }
        for(let i=0;i<m;i++){
            if(temp[i]>0){
                let k1 = i - 1;
                while (k1 >= 0 && temp[i] <= temp[k1]) k1--;
                let k2 = i + 1;
                while (k2 < m && temp[i] <= temp[k2]) k2++;
                max = Math.max(max, temp[i] * (k2 - k1 - 1));
            }
        }
    }
    return max
}
console.log(maximalRectangle([
    ['0','1'],
    ['1','0']
]))
