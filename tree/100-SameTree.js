var isSameTree = function(p, q) {
    if(p === null&&q === null){
        return true
    }
    if(p===null||q===null){
        return false
    }
    if(!isSameTree(p.left,q.left)||!isSameTree(p.right,q,right)){
        return false
    }
    return (p.val === q.val)
}
