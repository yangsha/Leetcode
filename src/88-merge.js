// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
//     Note:
// The number of elements initialized in nums1 and nums2 are m and n respectively.
//     You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
//     Example:
// Input:
//     nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
//
// Output: [1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
//方法：第一思路，不断遍历两个数组中的较大数，然后顺序填入nums1，但是会造成覆盖；
//那么倒序遍历所有的数，较大的数填入较后的位置，因为事先知道最终数组的长度，所以不会造成覆盖
var merge = function(nums1, m, nums2, n) {

     let k = m+n-1
     while(n>=1&&m>=1){
         if(nums1[m-1]>nums2[n-1]){
             nums1[k--]=nums1[m-1]
             m--
         }else{
             nums1[k--]=nums2[n-1]
             n--
         }
     }
     while(n>=1){
         nums1[k--] = nums2[n-1]
         n--
     }
     console.log(nums1)
    // let k = m+n-1;
    // while(m>=1&&n>=1){
    //     if(nums1[m-1]>=nums2[n-1]){
    //         nums1[k--] = nums1[m-1]
    //         m--
    //     }else{
    //         nums1[k--] = nums2[n-1]
    //         n--
    //     }
    // }
    // //nums1或者nums2有一个已经遍历完，如果是nums2遍历完，此时不做任何处理，nums1剩下的数本就在应该在的位置上
    // //如果是nums1遍历完，nums2没有遍历完，则需要把nums2剩下的数放到nums1应该在的位置上去
    // while(n>=1){
    //     nums1[k--] = nums2[n-1]
    //     n--
    // }
    // return nums1
};
console.log(merge([0],0,[1],1))
