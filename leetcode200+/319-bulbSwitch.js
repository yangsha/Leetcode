
//初始时有 n 个灯泡关闭。 第 1 轮，你打开所有的灯泡。 第 2 轮，每两个灯泡你关闭一次。
// 第 3 轮，每三个灯泡切换一次开关（如果关闭则开启，如果开启则关闭）。第 i 轮，每 i 
// 个灯泡切换一次开关。 对于第 n 轮，你只切换最后一个灯泡的开关。 找出 n 轮后有多少个亮着的灯泡。


//方法1：模拟开关过程，但是时间超出限制
var bulbSwitch = function(n) {

    let result = new Array(n).fill(0);
    /// 一共执行n轮
    for(let i=1;i<=n;i++){
        for(let j=i-1;j<n;j+=i){
            result[j] = result[j]===0?1:0;
        }
    }
    let count=0;
    for(let i=0;i<result.length;i++){
        if(result[i]===1){
            count++
        }
    }
    return count
};

//如果不是模拟时间不能通过，谁又会想到开方呢！！

// 然后去分析每个数的因子，看它们因子的个数，但是这里有一个可以优化的点就是对于一个数例如 a=b*c,b和c一定是在根号a的两端或者就等于根号a，
// 那么统计它们的因子的个数只需要让j从1到根号a，如果灯泡序号可以整除这个j，那么因子数加2,当然如果两个因子数一样（也就是这个数字可以开平方）
// 就加1，由此可以总结出来的一个规律是对于能开平方的数字，它的因子数一定是一个奇数，而对于不能开平方数字，它的因子数为一个偶数，
// 所以又将问题转化为找出1-n中可以开平方的数
// 对于1-n中的可以开平方的数字，例如36，它里面可以开平方的数字1*1，2*2...6*6，对于100，它里面可以开平方的数字，1*1,...10*10,
// 可以发现，对于一个数，它里面可以开平方的数字的个数就是它自己的开平方数，所以这道题的最终的解法就变为了直接求n的开平方数就是最后的结果
//巧妙

var bulbSwitch2 = function(n) {
    return Math.floor(Math.sqrt(n))
};

console.log(bulbSwitch2(99))
//
