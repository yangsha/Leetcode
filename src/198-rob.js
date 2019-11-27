
//打家劫舍1：动态规划
const rob = function(nums) {
    if (nums.length <= 0) {
        return 0
    }
    if (nums.length === 1) {
        return nums[0]
    }
    let pre = nums[0];
    let curr = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        let temp = curr;
        curr = Math.max(pre + nums[i], curr);
        pre = temp;
    }
    return curr
}
