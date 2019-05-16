// implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
// The replacement must be in-place and use only constant extra memory.
// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//方法：不存在下一个字典序的排列，说明已经是最大排列，即所有数字的降序排列，即从右往左数的话，每个数字都比前面的数字要小；
//加入存在下一个降序排列，那么从右往左数的话，肯定存在后一个数字比前一个大的情况，那么找到这个点，该点后面的数字都是降序排列的
//找出后面所有点中的比转折点大的最小的值，交换一下，并且该点后面所有降序排列的值都改成升序排列，则得到下一个字典序；
var nextPermutation = function(nums) {
    if(nums.length<=1) return;
    for(let i=nums.length-1;i>0;i--){
        if(nums[i]>nums[i-1]){
            for(let j=nums.length-1;j>=i;j--){
                if(nums[j]>nums[i-1]){
                    exchange(nums,i-1,j);
                    reverse(nums,i,nums.length-1)
                    return
                }
            }
        }
    }
    function exchange(nums,a,b) {
        let temp = nums[a]
        nums[a] = nums[b];
        nums[b] = temp;
    }
    function reverse(nums,i,j){
        while(i<=j){
            exchange(nums,i,j);
            i++;
            j--;
        }
    }
    reverse(nums,0,nums.length-1);
}
let nums = [1,2,3,4,6]
nextPermutation(nums);
console.log(nums)


