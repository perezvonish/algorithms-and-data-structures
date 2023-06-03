var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length - 1

    let result;

    while(start <= end){
        let middle = Math.floor((start + end) / 2)

        if (nums[middle] == target){
            return middle
        }

        if (nums[middle] > target){
            end = middle - 1
            result = start + 1
            continue
        }

        start = middle + 1
        result = end + 1
    }

    return result
};

console.log(searchInsert([1,3,5,6], 6))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 7))