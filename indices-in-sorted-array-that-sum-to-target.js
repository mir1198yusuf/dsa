// SC = 1, TC = n

/*
since num i + j will equal target
start with i & j as extreme pointers : start and end
if their sum is less than target, we want to increase the sum
else, we want to decrease sum of i & j 
but since array is in asc order, when i moves from left to right & j remains as it is, sum increases 
because for [1,2,3,4] 1+4=5 but 2+4=6 3+4=7 and so on
and when i remains same but j moves from right to left, sum decreases
taking this logic keep increasing i or decreasing accordingly & soon i & j = target will be obtained 
*/
function indicesInSortedArrayThatSumToTarget(numbers, target) {
    let i = 0,
        j = numbers.length - 1;
    while (i < j) {
        if (numbers[i] + numbers[j] === target) {
            return [i + 1, j + 1]; // +1 is only for printing logic as in question, it was asked to consider 1 as 1st element
        } else if (numbers[i] + numbers[j] > target) {
            j--;
        } else if (numbers[i] + numbers[j] < target) {
            i++;
        }
    }
}

const numbers1 = [2, 7, 11, 15],
    target1 = 9;
console.log(indicesInSortedArrayThatSumToTarget(numbers1, target1));
const numbers2 = [2, 3, 4],
    target2 = 6;
console.log(indicesInSortedArrayThatSumToTarget(numbers2, target2));
const numbers3 = [-1, 0],
    target3 = -1;
console.log(indicesInSortedArrayThatSumToTarget(numbers3, target3));
