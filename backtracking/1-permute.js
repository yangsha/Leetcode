// Given a collection of distinct integers, return all possible permutations.
//
//     Example:
//
// Input: [1,2,3]
// Output:
//     [
//         [1,2,3],
//         [1,3,2],
//         [2,1,3],
//         [2,3,1],
//         [3,1,2],
//         [3,2,1]
//     ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//递归回溯
var permute = function(nums) {
    const search = function (current,remaining) {
        if (remaining.length===0) {
            result.push(current.slice())
        }
        else{
            for(let i=0;i<remaining.length;i++){
                current.push(remaining[i]);
                search(current,remaining.slice(0,i).concat(remaining.slice(i+1)));
                current.pop();//回溯
            }
        }
    }
    let result =[];
    search([],nums);
    return result;
};
console.log(permute([1,2]))
