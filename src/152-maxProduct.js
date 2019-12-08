
//求一个数组的最大乘积子序列
//借鉴最大子序列和的方法 动态规划,但是不行，因为负数加上当前的数肯定会变小，但是乘以当前的数就不一定，有可能会变大。
//此时构造一个变量用来存放最小值就好
var maxProduct = function(nums) {
     if(nums.length===0){
         return 0
     }
     let Currentmin = nums[0];
     let Currentmax = nums[0];
     let max = nums[0];
     for(let i = 1;i<nums.length;i++){
         let preMax = Currentmax;
         Currentmax = Math.max(Currentmin*nums[i],Math.max(Currentmax*nums[i],nums[i]))
         Currentmin = Math.min(preMax*nums[i],Math.min(Currentmin*nums[i],nums[i]))
         max = Math.max(max,Currentmax)
     }
     return max;
};
console.log(maxProduct([-4,-3,-2]))
