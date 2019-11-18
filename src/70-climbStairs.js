// You are climbing a stair case. It takes n steps to reach to the top.
//
//     Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
//
//     Note: Given n will be a positive integer.
//
//     Example 1:
//
// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:
//
// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
// /**
//  * @param {number} n
//  * @return {number}
//  */
// //方法1：递归,明显该方法时间复杂度很高
// let climbStairs = function(n) {
//     if(n===1) return 1;
//     if(n===2) return 2;
//     return (climbStairs(n-1)+climbStairs(n-2))
// };
//方法2：迭代，用空间换时间
let climbStairs2 = function(n) {
    if(n<=0) return 0;
    let list=[];
    list[0]=1,list[1]=2;
    for(let i=2;i<n;i++){
        list[i]=list[i-1]+list[i-2];
    }
    return list[n-1];
};
var climbStairs = function(n) {
    if(n===1) return 1
    if(n===2) return 2
    return (climbStairs(n-1)+climbStairs(n-2))
};
console.log(climbStairs(45))

