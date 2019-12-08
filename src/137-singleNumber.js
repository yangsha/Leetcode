//一、对于某个给定的数组，出来某一个元素只出现一次外，剩余每个元素都出现两次；
//二、对于某个给定的数组，出来某一个元素只出现一次外，剩余每个元素都出现三次；
//解法1：用一个集合存储所有出现过的元素，然后相加乘以2或者3，再减去数组所有元素之和，那么差就是只出现一次的那个数的二倍或者三倍；
//解法2：用异或；

var singleNumber = function(nums) {
    let set = new Set()
    let sum = 0;
    let result = 0
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        set.add(nums[i])
    }
    for(let number of set){
        result+=number
    }
    return (result*2-sum)
};
