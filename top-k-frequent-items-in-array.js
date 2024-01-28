// TC = n + nlogn + k = nlogn
// SC = n

function findTopKFrequentItemsInArray(arr, k) {
    const itemCountObj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!itemCountObj[arr[i]]) {
            itemCountObj[arr[i]] = { item: arr[i], count: 1 };
        } else {
            itemCountObj[arr[i]].count = itemCountObj[arr[i]].count + 1;
        }
    }
    const sortedItemCountArray = Object.values(itemCountObj).sort(
        (a, b) => b.count - a.count
    );
    return sortedItemCountArray.slice(0, k).map(i => i.item);
}

const a1 = [1, 1, 1, 2, 2, 3],
    k1 = 2;
console.log(findTopKFrequentItemsInArray(a1, k1));

const a2 = [1],
    k2 = 1;
console.log(findTopKFrequentItemsInArray(a2, k2));
