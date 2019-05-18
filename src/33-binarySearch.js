// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index, otherwise return -1.
// You may assume no duplicate exists in the array.
// Your algorithm's runtime complexity must be in the order of O(log n).
// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//二分查找
var search = function(nums, target) {
    let result = -1;
    if(nums.length===0) return result;
    let left=0,right=nums.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]===target){
            result = mid;
            break;
        }else if(target>nums[mid]&&target<=nums[right]|| nums[mid]>nums[right]&&(target>nums[mid]||target<=nums[right])){
            left = mid+1
        }else{
            right = mid-1
        }
    }
    return result;
}
console.log(search([4,5,6,7,0,1,2],10))