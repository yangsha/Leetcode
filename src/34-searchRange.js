// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
// Your algorithm's runtime complexity must be in the order of O(log n).
// If the target is not found in the array, return [-1, -1].
// Example 1:
//
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:
//
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//二分查找
var searchRange = function(nums, target) {
    let result =[-1,-1];
    let left=0,right = nums.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]===target){
            let p1=mid;
            let p2=mid;
            while(nums[p1]===target&&p1>=0)p1--;
            while(nums[p2]===target&&p2<=nums.length-1) p2++;
            result[0] = p1+1;
            result[1] = p2-1;
            break;
        }else if(target>nums[mid]&&target<=nums[right]){
            left = mid+1;
        }else{
            right = mid-1;
        }
    }
    return result
}
console.log(searchRange([5,7,7,8,8,10],7))