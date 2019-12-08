//各位数字相加，直至数为1位数
//方法1：循环
var addDigits = function(num) {
   let current = num;
   let temp = 0;
   let number = 0;
   while(!(current>=0&&current<10)){
       temp=0;
       while(current!==0){
           number = current%10;
           temp+=number;
           current=Math.floor(current/10)
       }
      current = temp;
   }
   return current;
};
//方法2：O(1)的时间复杂度
var addDigits2 = function(num) {
    return (num-1)%9+1;
}
console.log(addDigits(19))
