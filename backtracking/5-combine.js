// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
//     Example:
// Input: n = 4, k = 2
// Output:
//     [
//         [2,4],
//         [3,4],
//         [2,3],
//         [1,2],
//         [1,3],
//         [1,4],
//     ]
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if(n===1) return [[1]]
    let result =[]
    let used =[]
    let current = []
    // n表示一共有多少个整数
    // m表示当前数组的长度
    const search = (n,m)=> {
        if(m===k) {
            result.push(current.slice())
        } else{
            for(let i=1;i<=n;i++){
                if(used[i]) {continue}
                if(m>0&&current[m-1]>i){continue}
                used[i] = true
                current[m] = i
                search(n,m+1)
                used[i] = false
            }
        }
    }
    search(n,0)
    return result
};
