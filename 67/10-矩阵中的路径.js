//请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
//解答：回溯
function hasPath(matrix, rows, cols, path)
{
    // write code here
    if(rows<=0||cols<=0||path===''){
        return false
    }
    let visited = [];
    for(let i=0;i<rows;i++){
        visited[i] = new Array(cols);
        for(let j=0;j<cols;j++){
            visited[i][j] = false
        }
    }

    function hasPathHelper(row,col,strLength){
        if(strLength>=path.length){
            return true
        }
        let hasPath = false;
        if(row>=0&&row<rows&&col>=0&&col<cols&&!visited[row][col]&&matrix[row*cols+col]===path[strLength]){
            visited[row][col] = true;
            strLength++;
            hasPath = hasPathHelper(row+1,col,strLength)||hasPathHelper(row,col+1,strLength)||hasPathHelper(row-1,col,strLength)||hasPathHelper(row,col-1,strLength);
            if(!hasPath){
                visited[row][col] = false;
            }
        }
        return hasPath;
    }

    let stringLength = 0;
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(hasPathHelper(i,j,stringLength)){
                return true
            }
        }
    }
     return false
}
console.log(hasPath("ABCESFCSADEE",3,4,"ABCCED"))
