//地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，
// 但是不能进入行坐标和列坐标的数位之和大于k的格子,请问该机器人能够达到多少个格子？

function movingCount(threshold, rows, cols)
{
    // write code here
     if(rows<=0||cols<=0){
         return 0;
     }
     let count = 0;
     let visited = [];
     for(let i=0;i<rows;i++){
         visited[i] = [];
         for(let j=0;j<cols;j++){
             visited[i][j] = false
         }
     }
     function isValid(row,col){
         let sum = 0;
         while(row!==0){
             sum+=row%10;
             row = Math.floor(row/10)
         }
         while(col!==0){
             sum+=col%10;
             col = Math.floor(col/10)
         }
         return sum<=threshold
     }
     function movingCountHelper(row,col){
         if(row>=0&&row<rows&&col>=0&&col<cols&&isValid(row,col)&&!visited[row][col]){
             count++;
             visited[row][col] = true;
             movingCountHelper(row-1,col);
             movingCountHelper(row+1,col);
             movingCountHelper(row,col-1);
             movingCountHelper(row,col+1)
         }
     }
     movingCountHelper(0,0)
     return count;
}
console.log(movingCount(2,3,3))
