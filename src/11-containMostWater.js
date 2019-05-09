// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at
// (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
//
//     Example:
//
// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49

/**
 * @param {number[]} height
 * @return {number}
 */
//方法1：暴力搜索，时间复杂度O（n^2)
    //方法2：双指针，时间复杂度O(n),即两边同时搜索，根据装的水的数量取决于短边而不是长边这一事实，
    //每次都改变短边的索引，因为改变长边的索引。
let maxArea = function(height) {
        let maxArea = 0;
        let head=0,tail=height.length-1;
        while(head<tail){
            maxArea = Math.max(maxArea,Math.min(height[head],height[tail])*(tail-head))
            height[head]>head[tail]? tail--:head++;
        }
        return maxArea
    }
console.log(maxArea([1,8,6,2,5,4,8,3,7]))
