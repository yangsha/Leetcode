
//在一条环路上有 N 个加油站，其中第 i 个加油站有汽油 gas[i] 升。
//
// 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。
//
// 如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1。

//解法1：暴力解法
var canCompleteCircuit = function(gas, cost) {

   for(let i=0;i<gas.length;i++){
       let flag = true;
       let start = i;
       let current = 0;
       for(let j=0;j<gas.length;j++){
           current+=gas[start]-cost[start];

           if(current<0){
               flag = false;
               break
           }else{
               start =(start+1)%(gas.length)
           }
       }
       if(flag){
           return i
       }
   }
   return -1;
};

//解法2 当由i只能到达j时 那么i与j之间所有的点都是只能达到j 不让矛盾 所以此时可以直接让i = j，如果此时j小于i 那么由于i
//之前所有的点都已经检查过 之后的点都不可能达到一圈  所以此时直接返回-1
var canCompleteCircuit2 = function(gas, cost) {

    for(let i=0;i<gas.length;i++){
        let flag = true;
        let start = i;
        let current = 0;
        let end = i;
        for(let j=0;j<gas.length;j++){
            current+=gas[start]-cost[start];
            if(current<0){
                flag = false;
                end = start;
                break
            }else{
                start =(start+1)%(gas.length)
            }
        }
        if(flag){
            return i
        }
        if(end<i){
            return -1
        }else{
            i = end;
        }
    }
    return -1;
};

console.log(canCompleteCircuit2([2,3,4],[3,4,3]))
