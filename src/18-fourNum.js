// Given an array nums of n integers and an integer target, are there elements a, b, c, and d
// in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
// Note:
// The solution set must not contain duplicate quadruplets.
// Example:
// // Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
// //
// // A solution set is:
// //     [
// //         [-1,  0, 0, 1],
// //         [-2, -1, 1, 2],
// //         [-2,  0, 0, 2]
// //     ]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
    //方法1：双指针，时间复杂度，O(n^3)
var fourSum = function(nums, target) {
        let result = [];
        if(nums.length<4) return result;
        nums.sort((a,b)=>(a-b))
        for(let i=0;i<nums.length-3;i++){
            if(i>0&&nums[i]===nums[i-1]) continue
            for(let j=i+1;j<nums.length-2;j++){
                if(j>i+1&&nums[j]===nums[j-1]) continue
                let num = target-nums[i]-nums[j];
                let point1=j+1,point2=nums.length-1;
                while(point1<point2){
                    if(nums[point1]+nums[point2]===num){
                        result.push([nums[i],nums[j],nums[point1],nums[point2]])
                        while(point1<point2&&nums[point1]===nums[point1+1]) point1++;
                        while(point1<point2&&nums[point2]===nums[point2-1]) point2--;
                        point1++;
                        point2--;
                    }else if(nums[point1]+nums[point2]<num){
                        point1++
                    }else{
                        point2--
                    }
                }
            }
        }
        return result
    }
console.log(fourSum([1, 0, -1, 0, -2, 2],0))
