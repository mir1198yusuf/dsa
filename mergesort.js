const array = [3,2,4,1,3,2,0]
function mergesort (a) {
    if (a.length === 1) {
        return a; 
    }
    const mid = Math.floor(a.length/2)
    const left = mergesort(a.slice(0,mid))
    const right = mergesort(a.slice(mid, a.length))
    const m = merge(left, right)
    return m
}

function merge (left,right) {
    const res = []
    let i = 0, j=0
    while (i < left.length && j < right.length) {
        if (left [i] < right[j]) {
            res.push(left[i])
            i++
        }
        else {
            res.push(right[j])
            j++
        }
    }
    while (i < left.length) {
        res.push(left[i])
        i++
    }
    while (j < right.length) {
        res.push(right[j])
        j++
    }
    return res;
   
}
console.log(mergesort (array))
