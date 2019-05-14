// Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.
//
//     Return the quotient after dividing dividend by divisor.
//
//     The integer division should truncate toward zero.
//
//     Example 1:
//
// Input: dividend = 10, divisor = 3
// Output: 3
// Example 2:
//
// Input: dividend = 7, divisor = -3
// Output: -2
//因为不能用惩罚、除法，只能加减，所以考虑完边界条件后，采用位运算；
var divide = function(dividend, divisor) {
    if(dividend===0) return 0;
    if(divisor===0) return 0;
    if(dividend===-Math.pow(2,31)&&divisor===-1) return Math.pow(2,31)-1
    let isPositive = true;
    if (dividend > 0 !== divisor > 0) isPositive = false;
    divisor = Math.abs(divisor);
    dividend = Math.abs(dividend)
    let result =0;
    while(dividend>=divisor){
        let count = 1;
        let base = divisor;
        if(base<=dividend>>1){
            base = base<<1;
            count = count<<1;
        }
        result+=count;
        dividend-=base;
    }
    if(!isPositive) result = -result;
    return result;
}
console.log(divide(100,29))