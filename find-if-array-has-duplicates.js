// TC = n
// SC = n

function doesArrayHasDuplicates(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) obj[arr[i]] = true;
        else return true;
    }
    return false;
}

const a1 = [1, 2, 3, 1];
console.log(doesArrayHasDuplicates(a1));

const a2 = [1, 2, 3, 4];
console.log(doesArrayHasDuplicates(a2));

const a3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(doesArrayHasDuplicates(a3));
