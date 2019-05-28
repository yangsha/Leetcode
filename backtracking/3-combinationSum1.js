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
    //方法：回溯,相比于全排列的回溯，递归函数中加入了一个目标值；
var combinationSum = function(candidates,target) {
        candidates.sort((a,b)=>(a-b))
        const search = (current,target,remaining)=>{
            if(target===0) {
                result.push(current.slice())
                return
            }
            if(remaining.length===0||target<0) {
                return
            }
            for(let i=0;i<remaining.length;i++){
                current.push(remaining[i]);
                search(current,target-remaining[i],remaining.slice(i))
                current.pop()
            }
        }
        let result = [];
        search([],target,candidates);
        return result;
    }
console.log(combinationSum([2,3,6,7],7))
