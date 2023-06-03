const moveZeroes = (nums) => {
    let low = 0
    let high = low + 1

    while(high <= nums.length - 1){
        if (nums[low] !== 0){
            low++
            high++
        } else {
            if (nums[high] !== 0 ){
                [nums[low], nums[high]] = [nums[high], nums[low]]
                low++
            }
            high++
        }
    }

    return nums
};

console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0,0,1]))