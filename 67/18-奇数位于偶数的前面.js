
//输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，
// 所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变
//双指针法  会改变数的相对位置
function reOrderArray(array){
    if(array.length===0||array.length===1){
        return array
    }
    let point1 = 0,point2 = array.length-1;
    while(point1<point2){
        while(point1<point2&&array[point1]%2===1){
            point1++;
        }
        while(point1<point2&&array[point2]%2===0){
            point2--;
        }
        if(point1<point2){
            let temp = array[point1];
            array[point1] = array[point2];
            array[point2] = temp;
        }
    }
    return array
}

//方法2 保证相对位置不变 开辟额外的时间和空间
function reOrderArray2(array){

}
console.log(reOrderArray([1,2,3,4,5,6,7]))
