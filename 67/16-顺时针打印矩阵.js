
//输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字

function printMatrix(matrix)
{
    // write code here
    if(matrix.length===0){
        return []
    }
    let row= matrix.length;
    let col = matrix[0].length;
    let result = [];
    let x=0,y=0;
    let direction = 0;
    let topBorder = 0,rightBorder = col-1,bottomBorder = row-1,leftBorder = 0;
    for(let i = 0;i<row*col;i++){
        result.push(matrix[x][y]);
        switch (direction) {
            case 0:
                if((y+1)>rightBorder){
                    x+=1;
                    direction = (direction+1)%4;
                    topBorder+=1;
                }else{
                    y+=1
                }
                break;
            case 1:
                if((x+1)>bottomBorder){
                    y-=1;
                    direction = (direction+1)%4;
                    rightBorder-=1;
                }else{
                    x+=1
                }
                break;
            case 2:
                if((y-1)<leftBorder){
                    x-=1;
                    direction = (direction+1)%4;
                    bottomBorder-=1;
                }else{
                    y-=1
                }
                break;
            case 3:
                if((x-1)<topBorder){
                    y+=1;
                    direction = (direction+1)%4;
                    leftBorder+=1;
                }else{
                    x-=1
                }
        }
    }
    return result
}
console.log(printMatrix([
    [1,2,3,10],
    [4,5,6,11],
    [7,8,9,12]]
))
