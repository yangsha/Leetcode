/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//解法1：暴力搜索。时间复杂度n^2;
    //哈希表,但是要注意哈希的时候，重复出现的数字怎么处理。
var findPairs = function(nums, k) {
    if(k<0){
        return 0;
    }
    let numsMap = {};
    let count = 0;
    for(let i=0;i<nums.length;i++){
        if(numsMap.hasOwnProperty(nums[i])){
             if(numsMap[nums[i]]===1&&k===0){
                 count+=1;
             }
             numsMap[nums[i]]+=1;
        }else{
            if(numsMap.hasOwnProperty(k+nums[i])){
                count+=1
            }
            if(numsMap.hasOwnProperty(nums[i]-k)){
                count+=1
            }
            numsMap[nums[i]]=1
        }
    }
    return count;
};
console.log(findPairs([3,1,2,1,4,5],2))
