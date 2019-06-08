// Given a set of distinct integers, nums, return all possible subsets (the power set).
// Note: The solution set must not contain duplicate subsets.
//     Example:
// Input: nums = [1,2,3]
// Output:
//     [
//         [3],
//         [1],
//         [2],
//         [1,2,3],
//         [1,3],
//         [2,3],
//         [1,2],
//         []
//     ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result= [];
    let current = [];
    helper(nums,0);
    return result;
    function helper(nums,start) {
        result.push(current.slice(0))
        for(let i=start;i<nums.length;i++){
            current.push(nums[i])
            helper(nums,i+1)
            current.pop()
        }
    }
};
console.log(subsets([1,2,3]))
