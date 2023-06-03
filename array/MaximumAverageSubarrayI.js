const findMaxAverage = function(nums, k) {
    let sum = 0;

    for (let i = 0; i < k; i++){
        sum += nums[i]
    }

    let res = sum

    for (let i = k; i < nums.length; i++){
        sum += nums[i] - nums[i-k]
        res = Math.max(sum, res)
    }

    return res / k
};

const nums = [1,12,-5,-6,50,3]
const k = 4


console.log(findMaxAverage(nums, k))
console.assert(findMaxAverage(nums, k) === 12.75)