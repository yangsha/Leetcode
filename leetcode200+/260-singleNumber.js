
//给定一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。

//解法1：用一个map ,存储每个元素出现的次数，但是是线性的额外空间复杂度
var singleNumber = function(nums) {
   let map = new Map();
   let result = []
   for(let i=0;i<nums.length;i++){
      if(!map.has(nums[i])){
          map.set(nums[i],1)
      }else{
          map.set(nums[i],2)
      }
   }
   for(const [key,value] of map){
       if(value===1){
           result.push(key)
       }
   }
   return result
};

//解法2：用一个map,如果遇到已经出现过的元素，移除key,那么map中最终剩下的都是只出现一次的元素
var singleNumber2 = function(nums) {
    let map = new Map();
    let result = []
    for(let i=0;i<nums.length;i++){
        if(!map.has(nums[i])){
            map.set(nums[i],1)
        }else{
            map.delete(nums[i])
        }
    }
    for(const key of map.keys()){
       result.push(key)
    }
    return result
};

console.log(singleNumber2([1,2,1,3,2,5]))
