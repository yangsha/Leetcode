//解法1：双指针
var maxProfit = function(prices) {
    let sell=0;
    let buy=0;
    let maxProfit = 0;
    for(;sell<prices.length;sell++){
        if(prices[sell]<=prices[buy]){
            buy=sell;
        }else{
            maxProfit=Math.max(maxProfit,prices[sell]-prices[buy])
        }
    }
    return maxProfit
};

console.log(maxProfit([7,1,5,3,6,4]))
//解法2：参照最大序列和的写法,即动态规划
var maxProfit2 = function(prices) {
    let maxProfit = 0;
    let sum=0;
    for(let i=1;i<prices.length;i++){
        sum = Math.max(prices[i]-prices[i-1],sum+prices[i]-prices[i-1])
        maxProfit=Math.max(maxProfit,sum)
    }
    return maxProfit
};
