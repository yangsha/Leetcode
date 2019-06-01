// Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.
// //
// //     Example:
// //
// // Input: 3
// // Output:
// //     [
// //         [ 1, 2, 3 ],
// //         [ 8, 9, 4 ],
// //         [ 7, 6, 5 ]
// //     ]
//矩阵螺旋读取的反向，螺旋排列
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if(n===1) return [[1]]
    const nextPoint=(direction,point=[])=>{
        switch (direction){
            case "right":point[1]+=1;break;
            case "down":point[0]+=1;break;
            case "left":point[1]-=1;break;
            case "up":point[0]-=1;
        }
        return point
    }
    let result = []
    for(let i=0;i<n;i++){
        result[i] = []
        for(let j=0;j<n;j++){
            result[i][j] = false
        }
    }
    let direction = ["right","down","left","up"]
    let row =0,col=0;
    let dir =0;
    for(let i=1;i<=n*n;i++){
        result[row][col] = i;
        let tempPoint = nextPoint(direction[dir],[row,col])
        let tempRow = tempPoint[0]
        let tempCol = tempPoint[1]
        if((col===n-1&&(row===0||row===n-1))||(col===0&&row===n-1)||result[tempRow][tempCol]!==false) {
            dir = (dir+1)%4
        }
        let point = nextPoint(direction[dir],[row,col])
        row = point[0]
        col = point[1]
    }
    return result
};
console.log(generateMatrix(5))
