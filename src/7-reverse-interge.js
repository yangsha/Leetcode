// Given a 32-bit signed integer, reverse digits of an integer.
// Example 1:
// Input: 123
// Output: 321
// Example 2:
//
// Input: -123
// Output: -321
// Example 3:
//
// Input: 120
// Output: 21
/**
 * @param {number} x
 * @return {number}
 */
let reverse = function(x) {
    if(x>=-9 && x<=9) return x;
    let minus = x<0? -1 : 1;
    let result = 0
    x = Math.abs(x)
    while(x>0){
        let index = x%10;
        x = Math.floor(x/10);
        result = result*10+index;
    }
    result = result*minus;
    if(result>Math.pow(2,31)-1||result<-Math.pow(2,31)) result=0;
    return result;
};
console.log(reverse(1534236469))