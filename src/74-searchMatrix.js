// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
//     Integers in each row are sorted from left to right.
//     The first integer of each row is greater than the last integer of the previous row.
//     Example 1:
//
// Input:
//     matrix = [
//         [1,   3,  5,  7],
//         [10, 11, 16, 20],
//         [23, 30, 34, 50]
//     ]
// target = 3
// Output: true
// Example 2:
// Input:
//     matrix = [
//         [1,   3,  5,  7],
//         [10, 11, 16, 20],
//         [23, 30, 34, 50]
//     ]
// target = 13
// Output: false
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//二分查找
var searchMatrix = function(matrix, target) {
    if(matrix.length===0) return false
    if(matrix.length===1&&matrix[0].length===1){
        return target===matrix[0][0] ;
    }
    let m = matrix.length;
    let n = matrix[0].length;
    let result = false
    let left = 0,right = m*n-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        let row = Math.floor(mid/n)
        let col = mid%n
        if(matrix[row][col]===target){
            return true
        }else if(matrix[row][col]<target){
            left = mid+1
        }else{
            right = mid-1
        }
    }
    return result
};
console.log(searchMatrix([],13))