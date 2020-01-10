//把只包含质因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含质因子7。
// 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。


function GetUglyNumber_Solution(index)
{
    // write code here
   if(index<7){
       return index
   }
   let result=  [];
   result[0] = 1;
   let pos2=0,pos3=0,pos5=0;
   for(let i=1;i<index;i++){
       result[i] = Math.min(Math.min(result[pos2]*2,result[pos3]*3),result[pos5]*5);
       if(result[i]===result[pos2]*2){
           pos2++;
       }
       if(result[i]===result[pos3]*3){
           pos3++;
       }
       if(result[i]===result[pos5]*5){
           pos5++;
       }
   }
   return result[index-1]
}
console.log(GetUglyNumber_Solution(7))
