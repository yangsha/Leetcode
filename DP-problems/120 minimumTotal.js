//动态规划 不开辟额外的空间 原地修改
var minimumTotal = function(triangle) {
    if(triangle.length===0||triangle[0].length===0){
        return 0
    }
    if(triangle.length===1&&triangle[0].length===1){
        return triangle[0][0]
    }
    let row = triangle.length;
    for(let i=1;i<row;i++){
        triangle[i][0] += triangle[i-1][0]
        triangle[i][i] += triangle[i-1][i-1]
        for(let j=1;j<i;j++){
            triangle[i][j] += Math.min(triangle[i-1][j],triangle[i-1][j-1])
        }
    }
    let result = triangle[row-1][0];
    for(let i=0;i<row;i++){
        if(triangle[row-1][i]<result){
            result = triangle[row-1][i]
        }
    }
    return result
};

console.log(minimumTotal(
    [
        [2],
        [3,4],
        [6,5,7],
        [4,1,8,3]
    ]
))
