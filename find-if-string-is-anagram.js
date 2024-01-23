// TC = n
// SC = n

function isAnagram(s, t) {
    const occurenceCountObj = {};
    for (let i = 0; i < s.length; i++) {
        occurenceCountObj[s[i]] = (occurenceCountObj[s[i]] ?? 0) + 1;
    }
    for (let i = 0; i < t.length; i++) {
        if (occurenceCountObj[t[i]]) {
            occurenceCountObj[t[i]] = occurenceCountObj[t[i]] - 1;
        } else return false;
    }

    const temp = Object.keys(occurenceCountObj); // extra used just for readability purpose
    for (let i = 0; i < temp.length; i++) {
        if (occurenceCountObj[temp[i]]) return false;
    }
    return true;
}

const s1 = 'car',
    t1 = 'rac';
console.log(isAnagram(s1, t1));

const s2 = 'car',
    t2 = 'rat';
console.log(isAnagram(s2, t2));

const s3 = 'car',
    t3 = 'racr';
console.log(isAnagram(s3, t3));
