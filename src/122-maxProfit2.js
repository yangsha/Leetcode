//解法1 遇跌即收
var maxProfit = function(prices) {
    let maxProfit=0;
    let currentProfit=0;
    let buy=0;
    for(let sell=1;sell<prices.length;sell++){
        if(prices[sell]<=prices[sell-1]){
            buy=sell;
            maxProfit+=currentProfit;
            currentProfit=0;
        }else{
            currentProfit=prices[sell]-prices[buy]
        }
    }
    maxProfit+=currentProfit;
    return maxProfit
};

//解法2：其实相对于解法1，可以更简单点，其实不用考虑那么多，再直接点，只要当前天相对于前一天上涨了，我们就前一天买入，当前天卖出
//其实两种方法都是把上升的部分累加。
var maxProfit2 = function(prices) {
   let result=0;
   for(let i=1;i<prices.length;i++){
       if(prices[i]>prices[i-1]){
           result+=prices[i]-prices[i-1]
       }
   }
   return result;
};
console.log(maxProfit2([7,1,5,3,6,4]))
