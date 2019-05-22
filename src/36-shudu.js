// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
//     Each row must contain the digits 1-9 without repetition.
//     Each column must contain the digits 1-9 without repetition.
//     Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.
//     A partially filled sudoku which is valid.
//     The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
//     Example 1:
// Input:
//     [
//         ["5","3",".",".","7",".",".",".","."],
//         ["6",".",".","1","9","5",".",".","."],
//         [".","9","8",".",".",".",".","6","."],
//         ["8",".",".",".","6",".",".",".","3"],
//         ["4",".",".","8",".","3",".",".","1"],
//         ["7",".",".",".","2",".",".",".","6"],
//         [".","6",".",".",".",".","2","8","."],
//         [".",".",".","4","1","9",".",".","5"],
//         [".",".",".",".","8",".",".","7","9"]
//     ]
// Output: true
// Example 2:
// Input:
//     [
//         ["8","3",".",".","7",".",".",".","."],
//         ["6",".",".","1","9","5",".",".","."],
//         [".","9","8",".",".",".",".","6","."],
//         ["8",".",".",".","6",".",".",".","3"],
//         ["4",".",".","8",".","3",".",".","1"],
//         ["7",".",".",".","2",".",".",".","6"],
//         [".","6",".",".",".",".","2","8","."],
//         [".",".",".","4","1","9",".",".","5"],
//         [".",".",".",".","8",".",".","7","9"]
//     ]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being
// modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
// Note:
//     A Sudoku board (partially filled) could be valid but is not necessarily solvable.
//     Only the filled cells need to be validated according to the mentioned rules.
//     The given board contain only digits 1-9 and the character '.'.
//     The given board size is always 9x9.
/**
 * @param {character[][]} board
 * @return {boolean}
 */
//方法1：暴力检查
// 用到了类似于正则表达式的写法，例如4 in row 7,表示第4在第7行，而4 in col 7则表示4在第7列，4-02表示4在9个小方块中的右上方
var isValidSudoku = function (board) {
    let hashTable = [];
    for(let i = 0;i<9;i++){
        for(let j =0;j<9;j++){
            if(board[i][j]!=='.') {
                if (hashTable.includes(board[i][j]+'in row' + i) || hashTable.includes(board[i][j] + 'in col'+j) || hashTable.includes(board[i][j] + '-' + Math.floor(i/3) + Math.floor(j/3))) {
                    return false
                } else {
                    hashTable.push(board[i][j]+'in row' + i);
                    hashTable.push(board[i][j] + 'in col'+j);
                    hashTable.push(board[i][j] + '-' + Math.floor(i/3) + Math.floor(j/3));
                }
            }
        }
    }
    return true;
}
console.log(isValidSudoku([
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]))
