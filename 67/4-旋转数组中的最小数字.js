
//求出旋转数组中的最小数字
//方法1：顺序查找，时间复杂度O(N)
//方法2：二分查找 ，时间复杂度O(logN)
//下面是按照剑指offer写法，但是不知道问题出在哪里
function minNumberInRotateArray(rotateArray)
{
    // write code here
    if(rotateArray.length===0){
        return 0;
    }

    function orderSearch(numbers){
        let min = numbers[0]
        for(let i=1;i<numbers.length;i++){
            if(numbers[i]<min){
                min = numbers[i];
            }
        }
        return min;
    }

    let start=0,end = rotateArray.length-1;
    let resultIndex = start;
    while(rotateArray[start]>=rotateArray[end]){
        if(end-start===1){
            resultIndex = end;
            break;
        }
        let mid = Math.floor((start+end)/2);
        if(rotateArray[start]===rotateArray[mid]&&rotateArray[mid]===rotateArray[end]){
            return orderSearch(rotateArray)
        }
        if(rotateArray[start]>=rotateArray[mid]){
            end = mid
        }
        else if(rotateArray[mid]>=rotateArray[end]){
            start = mid
        }
    }
   return rotateArray[resultIndex]
}
console.log(minNumberInRotateArray2([3,4,5,2]))

//下面是简单的思路的解法，通过
function minNumberInRotateArray2(rotateArray){

    if(rotateArray.length===0){
        return 0;
    }
    let start = 0,end =rotateArray.length-1;
    while(start<end){
       let mid  = Math.floor((start+end)/2);
       if(rotateArray[start]>rotateArray[mid]){
           end = mid
       }else if(rotateArray[start]===rotateArray[mid]){   //防止数组中存在重复元素
           start++
       }else{
           start = mid
       }
    }
    return rotateArray[start]
}

