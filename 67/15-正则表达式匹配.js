
//请实现一个函数用来匹配包括'.'和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）
//s, pattern都是字符串
function match(s, pattern)
{
    // write code here
    function matchHelper(s,pattern){
        if(s===''&&pattern===''){
            return true
        }
        if(s!==''&&pattern===''){
            return false
        }
        if(pattern[1]==='*'){
            if(pattern[0]===s[0]||pattern[0]==='.'&&s!==''){
                return matchHelper(s.slice(1),pattern.slice(2))||matchHelper(s.slice(1),pattern)||matchHelper(s,pattern.slice(2))
            }else{
                return matchHelper(s,pattern.slice(2))
            }
        }
        if(s[0]===pattern[0]||pattern[0]==='.'&&s!==''){
            return matchHelper(s.slice(1),pattern.slice(1))
        }
        return false
    }

   return matchHelper(s,pattern)

}
console.log(match('','*'))
