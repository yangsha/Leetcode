
// 编写一个程序，找出第 n 个丑数。
//
// 丑数就是只包含质因数 2, 3, 5 的正整数。

var nthUglyNumber = function(n) {

};

// 三枚石子放置在数轴上，位置分别为 a，b，c。
//
// 每一回合，我们假设这三枚石子当前分别位于位置 x, y, z 且 x < y < z。从位置 x 或者是位置 z 拿起一枚石子，并将该石子移动到某一整数位置 k 处，其中 x < k < z 且 k != y。
//
// 当你无法进行任何移动时，即，这些石子的位置连续时，游戏结束。


var numMovesStones = function(a, b, c) {

    if(a>b) [a,b] = [b,a];
    if(a>c) [a,c] = [c,a]
    if(b>c) [b,c] = [c,b]

    if((b-a)===1&&(c-b)===1){
        return [0,0]
    }else if((b-a)<=2||(c-b)<=2){
        return [1,c-a-2]
    }else{
        return [2,c-a-2]
    }
};
console.log(numMovesStones(4,3,2))
