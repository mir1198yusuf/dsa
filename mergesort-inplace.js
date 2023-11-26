// this is optimisation over previous as it uses array only for merge and not in between
// time ologn,  space see image

const array = [3, 2, 4, 1, 3, 2, 0];

function mergesortInPlace(array, left, right) {
    if (left === right) return

    const mid =parseInt(( left + right) / 2)
    mergesortInPlace(array, left, mid);
    mergesortInPlace(array, mid+1, right);

    let i=left, j = mid+1
    const tempLeft = []
    const tempRight = []
    while (i<=mid) {
        tempLeft.push(array[i]);
        i++
    }
    while (j<=right) {
        tempRight.push(array[j])
        j++
    }
    
    i = 0, j=0;
    let k=left
    while (i<tempLeft.length && j<tempRight.length) {
        if (tempLeft[i] > tempRight[j]) {
            array[k] = tempRight[j]
            k++
            j++
        }
        else if (tempLeft[i] <= tempRight[j]) { // equal means stable sorting
            array[k] = tempLeft[i]
            k++
            i++
        }
    }
    while (i<tempLeft.length) {
        array[k] = tempLeft[i]
        k++
        i++
    }
    while (j<tempRight.length) {
        array[k] = tempRight[j]
        k++
        j++
    }
}


console.log(mergesortInPlace(array, 0, array.length-1), array);

