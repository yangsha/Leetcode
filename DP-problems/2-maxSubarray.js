
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
//
//     Example:
//
// Input: [-2,1,-3,4,-1,2,1,-5,4],
//     Output: 6
//Explanation: [4,-1,2,1] has the largest sum = 6.
/**
 * @param {number[]} nums
 * @return {number}
 */
//方法1：暴力搜索，时间复杂度O(n^3)
    //方法2：动态规划
let maxSubArray = function(nums) {
        let sum = 0;
        let result = nums[0];
        for(let i=0;i<nums.length;i++){
            sum+=nums[i]
            result=sum>result?sum:result;
            if(sum<0) sum=0;
        }
        return result
    };
console.log(maxSubArray([-2,1]))




















