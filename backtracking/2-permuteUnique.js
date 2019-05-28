// Given a collection of numbers that might contain duplicates, return all possible unique permutations.
// Example:
// Input: [1,1,2]
// Output:
//     [
//         [1,1,2],
//         [1,2,1],
//         [2,1,1]
//     ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//方法：相比于之前的全排列组合，该排列需加入一个判断机制，避免产生重复的三元组
var permuteUnique = function(nums) {
    nums.sort((a,b)=>(a-b));
    const search = (current,remaining)=>{
        if(remaining.length === 0) result.push(current.slice())
        for(let i=0;i<remaining.length;i++){
            while((i<remaining.length-1)&&(remaining[i]===remaining[i+1])) i++;
            current.push(remaining[i]);
            search(current,remaining.slice(0,i).concat(remaining.slice(i+1)))
            current.pop()
        }
    }
    let result = [];
    search([],nums);
    return result;
};
console.log(permuteUnique([1,1,2]))
