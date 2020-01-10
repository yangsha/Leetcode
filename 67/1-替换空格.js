function replaceSpace(str)
{
    // write code here
    let result =  ''
    for(let i=0;i<str.length;i++){
        if(str[i]!==' '){
            result += str[i]
        }else{
            result+='20%'
        }
    }
    str = result
    console.log(str)
}
console.log(replaceSpace("we are happy"))
