// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
// Example 1:
// Input:
//     [
//         [ 1, 2, 3 ],
//         [ 4, 5, 6 ],
//         [ 7, 8, 9 ]
//     ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:
//
// Input:
//     [
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9,10,11,12]
//     ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    // const nextPoint=(direction,point=[])=>{
    //     switch (direction){
    //         case "right":point[1]+=1;break;
    //         case "down":point[0]+=1;break;
    //         case "left":point[1]-=1;break;
    //         case "up":point[0]-=1;
    //     }
    //      return point
    // }
    if(matrix.length===0) return [];
    let m = matrix.length;
    let n = matrix[0].length;
    let seen=[];
    for(let i=0;i<m;i++) {
        seen[i] = [];
        for (let j = 0; j < n; j++) {
            seen[i][j] = false;
        }
    }
    let result=[]
    let dr=[0,1,0,-1]
    let dc=[1,0,-1,0]
    let row=0,col=0,di=0;
    for(let i=0;i<m*n;i++) {
        //console.log(seen)
        result.push(matrix[row][col])
        seen[row][col]=true;
        let rrow=row+dr[di]
        let ccol=col+dc[di]
        //console.log(row,col,rrow,ccol,seen[rrow][ccol])
        if(rrow>=0&&rrow<=m-1&&ccol>=0&&ccol<=n-1&&seen[rrow][ccol]===false){
            row=rrow
            col=ccol
        }else{
            di=(di+1)%4;
            row+=dr[di]
            col+=dc[di]
            //console.log(row,col,direction[dir])
        }
    }
    return result
};
console.log(spiralOrder([
    [1,2,3,10],
    [4,5,6,11],
    [7,8,9,12]]
))