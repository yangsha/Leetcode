
//给定一个只包含数字的非空字符串，解码
//方法1 经典递归
var numDecodings = function(s) {

    function getAns(string,start){
        if(start === string.length){
            return 1
        }
        if(string[start]==='0'){
            return 0
        }
        let ans1 = getAns(string,start+1)
        let ans2 = 0;
        if(start<string.length-1){
            if((string[start]-'0')*10+(string[start+1]-'0')<=26){
                ans2 = getAns(string,start+2)
            }
        }

        return ans1+ans2
    }
    return getAns(s,0)
};
console.log(numDecodings("10"))
