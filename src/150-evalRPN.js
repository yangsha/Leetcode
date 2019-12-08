
//求逆波兰表达式的值
//注意细节
var evalRPN = function(tokens) {

     let compute = ['+','-','*','/'];
     let temp = 0;
     let first = 0;
     let second = 0;
     for(let i = 0;i<tokens.length;i++){
         if(compute.includes(tokens[i])) {
             temp = i - 1;
             while (tokens[temp] === null) {
                 temp--
             }
             second = temp;
             temp--;
             while (tokens[temp] === null) {
                 temp--
             }
             first = temp;
             let left = Number(tokens[first])
             let right = Number(tokens[second])
             switch (tokens[i]) {
                 case '+':
                     tokens[i] = left + right;
                     break;
                 case '-':
                     tokens[i] = left - right;
                     break;
                 case '*':
                     tokens[i] = left * right;
                     break;
                 case '/':
                     tokens[i] = Math.floor(Math.abs(left/right))*(left*right>=0?1:-1)
             }
             tokens[first] = null;
             tokens[second] = null;
         }
     }
     return tokens[tokens.length-1]
};
console.log(evalRPN(["4","-2","/","2","-3","-","-"]))
