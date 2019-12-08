
//验证带空格标点的字符串是否回文字符串
//左右两边同时遍历

var isPalindrome = function(s) {
    let i=0,j=s.length-1;
    s=s.toLowerCase();
    while(i<=j){
        while(!isValidChar(s[i])){
            if(i===s.length){
                return true
            }
            i++;
        }
        while(!isValidChar(s[j])){
            j--
        }
        if(s[i]!==s[j]){
            return false
        }
        i++;
        j--;
    }
    return true
};
function isValidChar(c) {
    return 'a' <= c && c <= 'z' || 'A' <= c && c <= 'Z' || '0' <= c && c <= '9';
}
