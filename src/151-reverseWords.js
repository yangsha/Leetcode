
//反转字符串中的单词
var reverseWords = function(s) {
    if(s.length===0){
        return s
    }
    s = s+' ';
    let result = '';
    let index = 0;
    while(s[index]===' '){
        index++
    }
    let start = index;
    for(let i=index;i<s.length;i++){
        if(s[i]===' '){
            let temp = s.slice(start,i)
            result = result.length===0?temp+result:temp+' '+result;
            while(s[i]===' '){
                i++
            }
            start = i
        }
    }
    return result
};
console.log(reverseWords("a good   example"))
