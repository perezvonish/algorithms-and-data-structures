const nums = [1,2,3,1]

const containsDuplicate = function(nums) {

    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[j] == nums[i]){
                return true
            }
        }
    }

    return false
};

console.log(containsDuplicate(nums))