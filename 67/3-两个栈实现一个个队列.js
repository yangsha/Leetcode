//用两个栈实现一个队列
//首先定义栈的数据结构
function Stack(){
    let item = [];
    this.push = function (node) {
        item.push(node)
    };
    this.pop = function (){
        return item.pop()
    };
    this.isEmpty = function () {
        return item.length===0
    };
}
const stack1 = new Stack();
const stack2 = new Stack();
function push(node)
{
    // write code here
    stack1.push(node)
}
function pop()
{
    // write code here
    if(stack1.isEmpty()&&stack2.isEmpty()){
        throw new Error("Queue is empty")
    }
    if(stack2.isEmpty()){
        while(!stack1.isEmpty()){
            stack2.push(stack1.pop())
        }
    }
    return stack2.pop()
}
