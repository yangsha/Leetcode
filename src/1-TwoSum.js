/**
 * Created by Cuitingting on 2019/4/28.
 */
//题目描述
/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    let maps = {};
    let result=[];
    for(let i=0;i<nums.length;i++){
        if(!(maps.hasOwnProperty(nums[i]))) maps[nums[i]]=i;
        let another = target-nums[i];
        if(maps.hasOwnProperty(another)&&maps[another]!==i){
            result.push(maps[another]);
            result.push(i)
            break;
        }
    }
    return result;
};
console.log(twoSum([3,2,3],6))