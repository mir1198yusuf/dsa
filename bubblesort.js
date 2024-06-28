function bubbleSort(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = i; j < a.length; j++) {
            if (a[i] > a[j]) {
                let t = a[i];
                a[i] = a[j];
                a[j] = t;
            }
        }
    }
    return a;
}

const a1 = [2, 3, 4, 5, 6, 7];
const a2 = [3, 2, 5, 4, 3, 1, 7, 5, 8, 9, 0, 3, 4, 1];

console.log(bubbleSort(a1));
console.log(bubbleSort(a2));
