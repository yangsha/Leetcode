
//开关按钮2
//只需要关注前三个灯就行，而且当m>=4s时，所有的可能性都存在，那么此时可能情况就是固定的
var flipLights = function(n, m) {
    n = Math.min(n,3)
    if(m===0){
        return 1
    }else if(m===1){
        return [2,3,4][n-1]
    }else if(m===2){
        return [2,4,7][n-1]
    }else{
        return [2,4,8][n-1]
    }
 };
console.log(flipLights(3,1))
