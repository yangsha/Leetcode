// Given an array of non-negative integers, you are initially positioned at the first index of the array.
//
//     Each element in the array represents your maximum jump length at that position.
//
//     Determine if you are able to reach the last index.
//
//     Example 1:
//
// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
//     Example 2:
//
// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
// jump length is 0, which makes it impossible to reach the last index.
/**
 * @param {number[]} nums
 * @return {boolean}
 */
    //贪心算法,每次不管对应的最长步长是多少，都只一步一步走，并保存剩余的最长步长，直至走到最后，如果走着走着
    //没有剩余步长可以走了，那么结束，返回false,但是由于中间的每一个点都涉及，所以可能时间较长
var canJump = function(nums) {
        if(nums.length===1) return true
        let len = nums.length;
        let step = nums[0]
        for(let i=1;i<nums.length;i++){
            step--;
            if(step<0) return false
            step = Math.max(step,nums[i])
        }
        return true
    };
console.log(canJump([3,2,1,0,4]))
