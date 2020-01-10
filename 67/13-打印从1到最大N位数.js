
const print1ToMaxOfn = function(n){
    if(n===0){
        return
    }
    function isEndNumber(nums){
        let flag =1;
        for(let i=0;i<nums.length;i++){
           if(nums[i]!==9){
               flag=0;
               break;
           }
        }
        return flag===1;
    }
    function print(num){
        let result = '';
        let i;
        for(i=0;i<num.length;i++){
            if(num[i]!==0){
                break;
            }
        }
        for(let j=i;j<num.length;j++){
            result+=num[j];
        }
        console.log(result)
    }
    let num = new Array(n).fill(0);
    while(!isEndNumber(num)){
        if(num[num.length-1]!==9){
            num[num.length-1] +=1;
        }else{
           for(let j=num.length-1;j>=0;j--){
                if(num[j]!==9){
                    num[j]+=1;
                    break;
                }else{
                    num[j] = 0;
                }
           }
        }
        print(num)
    }

}
print1ToMaxOfn(4)
