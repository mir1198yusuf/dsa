// SC = 1 (temp array is also used as output array) or n (if counting that too)
// TC = n

function findArrayProductWithoutSelf(nums) {
    const productWithoutSelfArray = [];

    // if at item i, we could have product of all its left items except it but problem is if we want to get product of right items, it will run in n^2
    // so in one iteration, we store product of left elements
    // and in next reverse iteration, we find product of right elements
    // and then multiple left-product and right-product

    let tempProductWithoutSelf;
    for (let i = 0; i < nums.length; i++) {
        tempProductWithoutSelf =
            nums[i - 1] != null ? tempProductWithoutSelf * nums[i - 1] : 1;

        productWithoutSelfArray[i] = tempProductWithoutSelf;

        if (productWithoutSelfArray[i] === -0) productWithoutSelfArray[i] = 0; // just for js handling as 0*-1 = -0 in js
    }

    tempProductWithoutSelf = undefined;
    for (let i = nums.length - 1; i >= 0; i--) {
        tempProductWithoutSelf =
            nums[i + 1] != null ? tempProductWithoutSelf * nums[i + 1] : 1;

        productWithoutSelfArray[i] =
            productWithoutSelfArray[i] * tempProductWithoutSelf;

        if (productWithoutSelfArray[i] === -0) productWithoutSelfArray[i] = 0; // just for js handling as 0*-1 = -0 in js
    }

    return productWithoutSelfArray;
}

const nums1 = [1, 2, 3, 4];
console.log(findArrayProductWithoutSelf(nums1));

const nums2 = [-1, 1, 0, -3, 3];
console.log(findArrayProductWithoutSelf(nums2));
