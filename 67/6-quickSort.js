//快速排序

//解法1  开辟额外空间存储每次选择的比基准值小或者大的数 简单容易理解
var quickSort = function(arr) {
    if(arr.length<=1){
        return arr
    }
    let left = [];
    let right = [];
    let  point = arr[0];//每次基准值都选择第一个值
    for(let i=1;i<arr.length;i++){
        if(arr[i]<point){
            left.push(arr[i])
        }else if(arr[i]>=point){
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([point],quickSort(right))
};

//解法2  原地修改
var quickSort2 = function(arr) {
    if(arr.length<=1){
        return arr
    }
    let start = 0;
    let end = arr.length-1;
    let point = arr[start];
    while(start<end){
      while(start<end&&arr[end]>point){
          end--;
      }
      if(start<end){
          arr[start] = arr[end];
          start++;
      }
      while(start<end&&arr[start]<point){
            start++
        }
      if(start<end){
          arr[end] = arr[start];
          end--;
      }
    }
    arr[start] = point;
    return quickSort(arr.slice(0,start)).concat(quickSort(arr.slice(start,arr.length)))
};

// console.log(quickSort2([47,29,71,99,78,19,24,47]))
// console.log(quickSort2([1,2,3,4,5]))
// console.log(quickSort2([5,4,3,2,1]))
//归并排序
const mergeSort = function(arr){

    if(arr.length<=1){
        return arr;
    }
    let mid  = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid,arr.length));
    let result = [];
    let leftIndex= 0 ,rightIndex = 0;
    while(leftIndex<left.length&&rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            result.push(left[leftIndex++]);
        }else{
            result.push(right[rightIndex++]);
        }
    }
    if(leftIndex<left.length){
        result = result.concat(left.slice(leftIndex))
    }else if(rightIndex<right.length){
        result = result.concat(right.slice(rightIndex))
    }
    return result;
};
console.log(mergeSort([4,3,2,1]))
console.log(mergeSort([47,29,71,99,78,19,24,47]))
//堆排序

