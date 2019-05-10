// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
//     Note:
//
// The solution set must not contain duplicate triplets.
//
//     Example:
//
// Given array nums = [-1, 0, 1, 2, -1, -4],
//
//     A solution set is:
//     [
//         [-1, 0, 1],
//         [-1, -1, 2]
//     ]
//方法1：暴力搜索 时间复杂度O(n^3)
//方法2：首先将所有数排序，然后固定第一个数，依次双指针搜索接下来的数是否满足条件；要注意边界条件。
//注意数组中有重复元素的时候应该怎么处理
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length<3) return [];
    let result = [];
    nums.sort((a,b)=>(a-b));
    for(let i=0;i<nums.length-2;i++){
        if(nums[i]>0) break;
        if(i>0&&nums[i]===nums[i-1]) continue;
        let target = 0-nums[i];
        let point1 = i+1,point2 = nums.length-1;
        while(point1<point2){
            let sum = nums[point1]+nums[point2];
            if(sum===target){
                result.push([nums[i],nums[point1],nums[point2]])
                while(point1<point2&&nums[point1]===nums[point1+1]) point1++;
                while(point1<point2&&nums[point2]===nums[point2-1]) point2--;
                point1++;
                point2--;
            }else if(sum<target){
                point1++
            }else{
                point2--
            }
        }
    }
    return result;
};
console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]))
