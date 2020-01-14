
//实现一个包含min函数的栈，并且时间复杂度为O(1);

function Stack(){
    let item = [];
    this.push = function(node){
        item.push(node)
    };
    this.pop = function(){
        return item.pop()
    };
    this.empty = function(){
        return item.length===0
    };
    this.top = function(){
        return item[item.length-1]
    }
}
const stack = new Stack();
const stackHelper = new Stack();//辅助栈
function push(node)
{
    // write code here
    stack.push(node);
    if(stack.empty()&&stackHelper.empty()){
        stackHelper.push(node)
    }else{
        let top = stackHelper.top();
        if(top<=node){
            stackHelper.push(top);
        }else{
            stackHelper.push(node)
        }
    }
}
function pop()
{
    // write code here
    stack.pop();
    stackHelper.pop()
}
function top()
{
    // write code here
    return stack.top();
}
function min()
{
    // write code here
    if(!stackHelper.empty()){
        return  stackHelper.top()
    }
}
