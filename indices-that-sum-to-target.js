const array = [3,2,4,2,5,6,8,45]
const target = 53

function magic(a,t) {
    const obj = {}
    for (let i=0; i<a.length; i++) {
        obj[a[i]] = i
    }

    for (let i=0; i<a.length; i++) {
        const x = t - a[i];
        if (obj[x]) return [i, obj[x]];
    }
}

console.log(magic(array, target))

// space - o(n)
// time - o(n)