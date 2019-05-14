// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
//
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
//
//     Example 1:
//
// Given nums = [1,1,2],
//
//     Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
//
//     It doesn't matter what you leave beyond the returned length.
// Example 2:
//
//Given nums = [0,0,1,1,1,2,2,3,3,4],
/**
 * @param {number[]} nums
 * @return {number}
 */
//双指针，实现单词遍历
var removeDuplicates = function(nums) {
    let j=0;
    for(let i=0;i<nums.length;i++){
        if(i===0||nums[i]!==nums[i-1]){
            nums[j++]=nums[i];
        }
    }
    return j;
}
console.log(removeDuplicates([1,1,2]))
