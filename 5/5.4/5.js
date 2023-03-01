function getMaxSubSum(arr) {
    let maxSum = 0;
    let anySum = [];
    for (let item of arr) {
        maxSum += item;
        if (maxSum <= 0) {
            maxSum = 0;
        } else {
            anySum.push(maxSum);
        }
    }
    maxSum = 0;
    for (let sum of anySum) {
        if (maxSum < sum) maxSum = sum;
    }
    return maxSum;
}