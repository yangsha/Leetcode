// Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.
//     Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
//
//     Note: You are not suppose to use the library's sort function for this problem.
//
// Example:
//
//     Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Follow up:
//
//     A rather straight forward solution is a two-pass algorithm using counting sort.
//     First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
//     Could you come up with a one-pass algorithm using only constant space?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

    let n0=-1,n1=-1,n2=-1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            n2+=1
            nums[n2]=2
            n1+=1
            nums[n1]=1
            n0+=1
            nums[n0]=0
        }else if(nums[i]===1){
            n2+=1
            nums[n2]=2
            n1+=1
            nums[n1]=1
        }else{
            n2+=1
            nums[n2]=2
        }
    }
    console.log("nums: ")
    console.log(nums)

    // let red=0, white=0, blue =0
    // for(let i=0;i<nums.length;i++){
    //     if(nums[i]===0){
    //         red++
    //     }else if(nums[i]===1){
    //         white++
    //     }else{
    //         blue++
    //     }
    // }
    // let i=0;
    // while(red>0){
    //     nums[i++]=0
    //     red--
    // }
    // while(white>0){
    //     nums[i++]=1
    //     white--
    // }
    // while(blue>0){
    //     nums[i++]=2
    //     blue--
    // }

};
console.log(sortColors([2,0,2,1,1,0]))
