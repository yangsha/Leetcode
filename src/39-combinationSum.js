// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
//     The same repeated number may be chosen from candidates unlimited number of times.
//     Note:
// All numbers (including target) will be positive integers.
//     The solution set must not contain duplicate combinations.
//     Example 1:
// Input: candidates = [2,3,6,7], target = 7,
//     A solution set is:
//     [
//         [7],
//         [2,2,3]
//     ]
// Example 2:
// Input: candidates = [2,3,5], target = 8,
//     A solution set is:
//     [
//         [2,2,2,2],
//         [2,3,3],
//         [3,5]
//     ]
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//方法：回溯
var combinationSum = function(candidates, target) {
    let result =[];
    let temp = [];
    search(0,target);
    return result;
    function search(start,target) {
        if(target<0) return;
        if(target===0) {
            result.push(temp.slice())
            return result
        }
        if(start===candidates.length) return;
        temp.push(candidates[start]);
        search(start,target-candidates[start])
        temp.pop();
        search(start+1,target)
    }
};
console.log(combinationSum2([2,3,6,7],7))
// function test(){
//     let temp = [1,2,3,4]
//     return temp
// }
// function test2(){
//     let temp = [1,2,3,4];
//     return temp.slice()
// }
// console.log(test())
// console.log(test2())

function combinationSum2(candidates, target) {
    //candidates.sort((a, b) => a - b);
    var length = candidates.length;
    var res = [];
    search(0, [], target);
    return res;

    function search(idx, prefix, target) {
        if (target === 0) {
            console.log(prefix)
            res.push(prefix.slice());
        }
        if (idx === length) return;
        if (target <= 0) return;

        prefix.push(candidates[idx]);
        search(idx, prefix, target - candidates[idx]);
        prefix.pop();
        search(idx + 1, prefix, target);
    }
};