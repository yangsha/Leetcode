//给你一根长度为n的绳子，请把绳子剪成整数长的m段（m、n都是整数，n>1并且m>1），每段绳子的长度记为k[0],k[1],...,k[m]。
// 请问k[0]xk[1]x...xk[m]可能的最大乘积是多少
//解法1：动态规划
const maxCount = function (number){
    if(number<=1){
        return 0
    }
    if(number===2){
        return 1
    }
    if(number===3){
        return 2
    }
    let result = [];
    result[0] = 0;
    result[1] = 1;
    result[2] = 2;
    result[3] = 3;
    for(let i=4;i<=number;i++){
        let max = 0;
        for(let j=1;j<=Math.floor(i/2);j++){
            let current = result[j]*result[i-j]
            if(current>max){
                max = current
            }
        }
        result[i] = max;
    }
    return result[number];
};
//解法2 贪婪算法  尽可能剪长度为3的绳子
const maxCount2 = function (number){
    if(number<=1){
        return 0
    }
    if(number===2){
        return 1
    }
    if(number===3){
        return 2
    }
    let timesOf3 = Math.floor(number/3);
    if(number-3*timesOf3===1){
        timesOf3-=1;
    }
    let timesOf2 = Math.floor((number-3*timesOf3)/2) ;
    return ((Math.pow(3,timesOf3))*(Math.pow(2,timesOf2)));

};
console.log(maxCount2(8))
