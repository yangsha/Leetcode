
//请实现一个函数用来判断字符串是否表示数值（包括整数和小数）
//s字符串
//方法1  顺序构造条件 顺序遍历字符串 顺序检测
function isNumeric(s)
{
    // write code here
    if(s===''){
        return false
    }
    if(s[0]==='+'||s[0]==='-'){
        s = s.slice(1)
    }
    while(s!==''&&s[0]>='0'&&s[0]<='9'){
        s = s.slice(1)
    }
    if(s===''){
        return true
    }
    if(s[0]==='.'){
        s = s.slice(1)
    }
    while(s!==''&&s[0]>='0'&&s[0]<='9'){
        s = s.slice(1)
    }
    if(s===''){
        return true
    }
    if(s[0]==='e'||s[0]==='E'){
        s = s.slice(1)
        if(s===''){
            return false
        }
        if(s[0]==='+'||s[0]==='-'){
            s = s.slice(1)
        }
        while(s!==''&&s[0]>='0'&&s[0]<='9'){
            s = s.slice(1)
        }
        if(s===''){
            return true
        }
    }

    return false
}
//模块化
function isNumeric2(s){

    if(s===''){
        return false
    }
    if(s[0]==='+'||s[0]==='-'){
        s = s.slice(1)
    }
    function isNumber()
    {
        while(s!==''&&s[0]>='0'&&s[0]<='9'){
            s = s.slice(1)
        }
        return s===''
    }
    if(isNumber()){
        return true
    }else{
        if(s[0]==='.'){
            s = s.slice(1)
        }
        if(isNumber(s)){
            return true
        }
        if(s[0]==='e'||s[0]==='E'){
            s = s.slice(1)
            if(s[0]==='+'||s[0]==='-'){
                s = s.slice(1)
            }
           if(isNumber(s)){
               return true
           }
        }
    }
    return false
}

console.log(isNumeric2("1e23"))
//
