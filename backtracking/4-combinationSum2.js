// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
//   Each number in candidates may only be used once in the combination.
//     Note:
//
// All numbers (including target) will be positive integers.
//     The solution set must not contain duplicate combinations.
//     Example 1:
//
// Input: candidates = [10,1,2,7,6,1,5], target = 8,
//     A solution set is:
//     [
//         [1, 7],
//         [1, 2, 5],
//         [2, 6],
//         [1, 1, 6]
//     ]
// Example 2:
// Input: candidates = [2,5,2,1,2], target = 5,
//     A solution set is:
//     [
//         [1,2,2],
//         [5]
//     ]
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
            if(remaining[i]===remaining[i-1]) continue
            current.push(remaining[i]);
            search(current,target-remaining[i],remaining.slice(i+1))
            current.pop()
        }
    }
    let result = [];
    search([],target,candidates);
    return result;
}
console.log(combinationSum([10,1,2,7,6,1,5],8))