const a1 = [1, 2, 3, 4, 5, 6]; // even length
const a2 = [1, 2, 3, 4, 5]; // odd length

function reverseArray(a) {
    console.log('before : ', a);
    let i = 0,
        j = a.length - 1;
    while (i < j) {
        let t = a[i];
        a[i] = a[j];
        a[j] = t;
        i++;
        j--;
    }
    console.log('after : ', a);
}

reverseArray(a1);
reverseArray(a2);

// TC = n/2 ~ n
// SC = 1