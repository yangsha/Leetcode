// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target.
// Return the sum of the three integers. You may assume that each input would have exactly one solution.
// Example:
// Given array nums = [-1, 2, 1, -4], and target = 1.
// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//双指针方法。相对于之前的三个数相加的情况，简单一些，不用考虑很多边界情况以及重复情况
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a, b) => a - b);
    let result = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length - 2; i++) {
        let point1 = i + 1, point2 = nums.length - 1;
        while (point1 < point2) {
            let sum = nums[i] + nums[point1] + nums[point2]
            if (sum === target) {
                return sum
            } else {
                result = Math.abs(sum - target) < Math.abs(result - target) ? sum : result;
                sum > target ? point2-- : point1++;
            }
        }
    }
    return result;
}
console.log(threeSumClosest([1,2,3,-1,-2],1))