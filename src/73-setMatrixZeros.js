// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.
//
//     Example 1:
//
// Input:
//     [
//         [1,1,1],
//         [1,0,1],
//         [1,1,1]
//     ]
// Output:
//     [
//         [1,0,1],
//         [0,0,0],
//         [1,0,1]
//     ]
// Example 2:
//
// Input:
//     [
//         [0,1,2,0],
//         [3,4,5,2],
//         [1,3,1,5]
//     ]
// Output:
//     [
//         [0,0,0,0],
//         [0,4,5,0],
//         [0,3,1,0]
//     ]
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

    let m = matrix.length;
    let n = matrix[0].length;
    let row = [];
    let col = [];

    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j]===0){
                if(!row.includes(i)){
                    row.push(i)
                }
                if(!col.includes(j)){
                    col.push(j)
                }
            }
        }
    }
    for(let i=0;i<row.length;i++){
        for(let j=0;j<n;j++){
            matrix[row[i]][j] = 0
        }
    }
    for(let j=0;j<col.length;j++){
        for(let i=0;i<m;i++){
            matrix[i][col[j]] = 0
        }
    }

    // let m = matrix.length;
    // let n = matrix[0].length;
    // let row = [];
    // let col =[];
    // for(let i=0;i<m;i++){
    //     for(let j=0;j<n;j++){
    //         if(matrix[i][j]===0){
    //             if(!row.includes(i)){
    //                 row.push(i)
    //             }
    //             if(!col.includes(j)){
    //                 col.push(j)
    //             }
    //         }
    //     }
    // }
    // for(let i=0;i<row.length;i++){
    //     for(let j=0;j<n;j++){
    //         matrix[row[i]][j]=0
    //     }
    // }
    // for(let j=0;j<col.length;j++) {
    //     for (let i = 0; i < m; i++) {
    //         matrix[i][col[j]] = 0
    //     }
    // }
};
console.log(setZeroes([
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
]))
