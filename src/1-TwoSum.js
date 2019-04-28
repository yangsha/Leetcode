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
//解题思路：除暴力搜索外的哈希表映射，暴力搜索复杂度过高，哈希映射可以达到0(N)的时间复杂度；
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
//遇到的问题：当有两个相同的数时，而这两个数的和恰好为target时，map{}会用第二个数的索引代替第一个数的索引，这样就无法得到正确的答案；
//解决方案：如果遇到 出现的数已经出现过一次 这种情况时，不将其和其索引放入map。