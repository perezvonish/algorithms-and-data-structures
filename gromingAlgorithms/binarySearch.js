const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const target = 0

const findNumber = (nums, target) => {
    let start = 0
    let end = nums.length - 1

    while(start <= end) {
        let middle = Math.round((start + end) / 2)
        let number = nums[middle]

        if (number == target){
            return middle
        } else if (number < target){ // less
            start = middle + 1
        } else if (number > target){
            end = middle - 1
        } else {
            return undefined
        }
    }
}

console.log(findNumber(nums, target))