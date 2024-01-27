// TC = nlogn (logn of sorting)
// SC = n

function groupAnagrams(strs) {
    const anagramGroupsObj = {};
    for (let i = 0; i < strs.length; i++) {
        const sortedString = strs[i].split('').sort().join('');
        if (anagramGroupsObj[sortedString]) {
            anagramGroupsObj[sortedString].push(strs[i]);
        } else {
            anagramGroupsObj[sortedString] = [strs[i]];
        }
    }

    return Object.values(anagramGroupsObj);
}

const strs1 = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
const strs2 = [''];
const strs3 = ['a'];

console.log(groupAnagrams(strs1));
console.log(groupAnagrams(strs2));
console.log(groupAnagrams(strs3));
