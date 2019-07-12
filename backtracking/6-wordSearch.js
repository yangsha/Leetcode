// Given a 2D board and a word, find if the word exists in the grid.
//
//  The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.
//
//  Example:
//
// board =
//     [
//         ['A','B','C','E'],
//         ['S','F','C','S'],
//         ['A','D','E','E']
//     ]
//
// Given word = "ABCCED", return true.
//     Given word = "SEE", return true.
//     Given word = "ABCB", return false.


// var exist = function(board, word) {
//     for(let row = 0; row < board.length; row += 1){
//         for(let col = 0; col < board[row].length; col += 1){
//             /* Iterate through the whole array. */
//             if (helper(board, word, row, col)) return true
//             /* If solution found, return true */
//         }
//     }
//     return false
// };
//
// var helper = function (board, word, row, col){
//     if(word.length === 0) return true;
//     /* If all word was match, return true */
//     if(board[row][col] && board[row][col] === word[0]){
//         let record=board[row][col];
//         board[row][col]='1';
//         /* Most challenge part!! Record the current character! */
//         if(board[row-1]){
//             if(helper(board, word.slice(1), row-1, col)) return true;
//         }
//         if(board[row+1]){
//             if(helper(board, word.slice(1), row+1, col)) return true;
//         }
//         if(board[row]){
//             if(helper(board, word.slice(1), row, col+1)) return true;
//         }
//         if(board[row]){
//             if(helper(board, word.slice(1), row, col-1)) return true;
//         }
//
//         board[row][col]=record;
//         /* Recovery the current character! Make sure the board did not change after the recursion*/
//     }
//     return false
// }

var exist = function(board, word) {
    const search = (board,word,row,col)=>{
        if(word.length===0) return true
        if(board[row][col]&&board[row][col]===word[0]){
            //确保字符串不绕回来
            let record=board[row][col];
            board[row][col]='1';
            if(board[row-1]){
                if(search(board,word.slice(1),row-1,col)) return true
            }
            if(board[row+1]){
                if(search(board,word.slice(1),row+1,col)) return true
            }
            if(board[row]){
                if(search(board,word.slice(1),row,col+1)) return true
            }
            if(board[row]){
                if(search(board,word.slice(1),row,col-1)) return true
            }
            board[row][col] = record
        }
        return false
    }
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            if(search(board,word,i,j)) return true
        }
    }
    return false
};
console.log(exist(board =
    [
        ['A','B','C','E'],
        ['S','F','C','S'],
        ['A','D','E','E']
    ],'ABCD'))
