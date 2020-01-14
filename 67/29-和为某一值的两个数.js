//输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。
function FindNumbersWithSum(array, sum)
{
    // write code here
    if(array.length<2){
        return
    }
    let point1 = 0,point2=array.length-1;
    let result = [];
    while(point1<point2){
        if(array[point1]+array[point2]===sum){
            result.push(array[point1]);
            result.push(array[point2]);
            point1++;
            point2--;
            break;
        }else if(array[point1]+array[point2]<sum){
            point1++;
        }else{
            point2--;
        }
    }
    return result
}
console.log(FindNumbersWithSum([1,2,3,4,5],6))
