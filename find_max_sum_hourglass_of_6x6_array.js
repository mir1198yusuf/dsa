// since here array is fixed 6x6, so we dont have to run n^2 loop like in find_hourglass_count_and_centers.js to get centers, we can hard-code it
// but if it is not fixed, find centers and then in single loop find the sum by using formula of finding other elements of same hourglass

// SC = TC = no of centers = less than n but increases depending on n so o(n)
const array1 = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];
const array2 = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];
const array3 = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];
const array4 = [
    [-1, 1, -1, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [-1, -1, -1, 0, 0, 0],
    [0, -9, 2, -4, -4, 0],
    [-7, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0]
];

function findMaxSumHourglassOf6x6Array(a) {
    const centers = [
        [1, 1],
        [1, 2],
        [1, 3],
        [1, 4],
        [2, 1],
        [2, 2],
        [2, 3],
        [2, 4],
        [3, 1],
        [3, 2],
        [3, 3],
        [3, 4],
        [4, 1],
        [4, 2],
        [4, 3],
        [4, 4]
    ];

    /*
    x y 
    x-1 y
    x-1 y-1
    x-1 y+1
    x+1 y-1
    x+1 y
    x+1 y+1
    */
    let max;
    for (let i = 0; i < centers.length; i++) {
        const sum =
            a[centers[i][0]][centers[i][1]] +
            a[centers[i][0] - 1][centers[i][1]] +
            a[centers[i][0] - 1][centers[i][1] - 1] +
            a[centers[i][0] - 1][centers[i][1] + 1] +
            a[centers[i][0] + 1][centers[i][1] - 1] +
            a[centers[i][0] + 1][centers[i][1]] +
            a[centers[i][0] + 1][centers[i][1] + 1];

        if (max == null) {
            // not using !max here as max can be 0 and greater than negative numbers
            // for setting 1st max as 1st sum obtained
            max = sum;
        } else if (max < sum) {
            max = sum;
        }
    }
    console.log(max);
}

findMaxSumHourglassOf6x6Array(array1);
findMaxSumHourglassOf6x6Array(array2);
findMaxSumHourglassOf6x6Array(array3);
findMaxSumHourglassOf6x6Array(array4);
