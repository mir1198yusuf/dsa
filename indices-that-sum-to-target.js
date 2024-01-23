const array1 = [3, 2, 4, 2, 5, 6, 8, 45];
const target1 = 53;

const array2 = [3, 2, 4];
const target2 = 6;

function magic(a, t) {
    const obj = {};
    for (let i = 0; i < a.length; i++) {
        obj[a[i]] = i;
    }

    for (let i = 0; i < a.length; i++) {
        const x = t - a[i];
        if (obj[x] != null && obj[x] !== i) return [i, obj[x]];
    }
}

console.log(magic(array1, target1));
console.log(magic(array2, target2));

// space - o(n)
// time - o(n)
