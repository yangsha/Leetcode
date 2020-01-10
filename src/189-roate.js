
//给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
// 要求使用至少三种不同的方法
//方法1：循环k次 每次都是把最后一个元素移动到第一个，拿时间换空间，保证空间复杂度是O（1）
var rotate = function(nums, k) {
     let len = nums.length;
     k = k%len;
     for(let i=0;i<k;i++){
         let temp = nums[len-1];
         for(let i=len-1;i>0;i--){
             nums[i] = nums[i-1]
         }
         nums[0] = temp;
     }
     console.log(nums)
};

//方法2 空间换时间 复杂度还是很高
var rotate2 = function(nums, k) {
    let len = nums.length;
    k = k%len;
    let temp = [];
    for(let i=nums.length-k;i<nums.length;i++){
        temp.push(nums[i])
    }
    for(let i=nums.length-k-1;i>=0;i--){
        nums[i+k] = nums[i]
    }
    for(let i=0;i<k;i++){
        nums[i] = temp[i]
    }
    console.log(nums)
};
//方法3  整体逆序，前k个逆序，后len-k个逆序

var rotate3 = function(nums, k) {
    let len = nums.length;
    k = k%len;
    reverse(0,len-1);
    reverse(0,k-1);
    reverse(k,len-1)
    function reverse(start,end){
        while(start<=end){
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
    console.log(nums)
};


console.log(rotate3([1,2,3,4,5],3))


//方法2：空间换时间
