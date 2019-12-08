// 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，在字符串中增加空格来构建一个句子，
// 使得句子中所有的单词都在词典中。返回所有这些可能的句子。

//顺接上一题；递归；只不过每次不是存储true或者false;而是存储所以可能的字符串分割方法；
var wordBreak = function(s, wordDict) {
    let map = {};
    function wordBreakHelper(s){
        if(s === ''){
            return []
        }
        if(Object.keys(map).includes(s)){
            return map[s]
        }
        let result = []
        for(let i = 0;i<s.length;i++){
            if(wordDict.includes(s.slice(i,s.length))){
                if(i === 0){
                    result.push(s.slice(i,s.length))
                }else{
                    let preResult = wordBreakHelper(s.slice(0,i))
                    for(let j = 0;j<preResult.length;j++){
                        result.push(preResult[j]+" "+s.slice(i,s.length))
                    }
                }
            }
        }
        map[s] = result;
        return result
    }
   return wordBreakHelper(s)
};

console.log(wordBreak("catanddog", ["cat", "cats", "and", "sand", "dog"]))
