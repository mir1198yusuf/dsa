// SC = n
// TC = n+2n & not n^2 because if you count for all 4 examples, it will never be more than 2n for second loop, so TC = n

function findLengthOfLongestConsecutiveSequence(nums) {
    const lookup = {};
    for (let i = 0; i < nums.length; i++) {
        lookup[nums[i]] = lookup[nums[i]] ? lookup[nums[i]] + 1 : 1;
    }

    let maxLengthOfSequence = 0;
    for (let i = 0; i < nums.length; i++) {
        if (lookup[nums[i]] > 1) {
            // if not last occurence, decrement count, we shall process logic for last occurence
            lookup[nums[i]] = lookup[nums[i]] - 1;
        } else {
            // process only if start of sequence
            if (!lookup[nums[i] - 1]) {
                let tempLength = 1,
                    num = nums[i] + 1;
                while (lookup[num]) {
                    tempLength = tempLength + 1;
                    num = num + 1;
                }
                if (tempLength > maxLengthOfSequence) {
                    maxLengthOfSequence = tempLength;
                }
            }
        }
    }
    return maxLengthOfSequence;
}

const nums1 = [100, 4, 200, 1, 3, 2];
const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
const nums3 = [0, 1, 2, 3, 4, 5, 6];
const nums4 = [6, 5, 4, 3, 2, 1, 0];

console.log(findLengthOfLongestConsecutiveSequence(nums1));
console.log(findLengthOfLongestConsecutiveSequence(nums2));
console.log(findLengthOfLongestConsecutiveSequence(nums3));
console.log(findLengthOfLongestConsecutiveSequence(nums4));
