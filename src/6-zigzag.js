// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string s, int numRows);
// Example 1:
//
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:
//
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
//     P     I    N
// A   L S  I G
// Y A   H R
// P     I
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
    //方法1:简单顺序搜索
let convert = function(s, numRows) {
        if(numRows===1) return s;
        let nums = new Array(numRows).fill('')
        let direction = 'down';
        let result = '';
        for(let i=0,row=0;i<s.length;i++){
            nums[row]+=s[i];
            console.log(s[i],row)
            if(row+1===numRows) {
                direction='up';
                row--;
            }
            else if(row===0){
                direction='down';
                row++;
            }
            else{
                row = direction==='down'? row+1: row-1;
            }
        }
        for(const item of nums){
            result+=item
        }
        return result;
    };
console.log(convert('AB',1))
