
//给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
//保证base和exponent不同时为0

/**
 * @return {number}
 */
function Power(base, exponent)
{
    // write code here
    if(base===0){
        return 0;
    }else if(exponent===0){
        return 1;
    }
    let minus = false;
    let result = 1;
    if(exponent<0){
       exponent = exponent*(-1);
       minus=true;
   }
   for(let i=1;i<=exponent;i++){
       result = result*base;
   }
   if(minus){
       result = 1/result;
   }
   return result
}
console.log(Power(2.5,3))
