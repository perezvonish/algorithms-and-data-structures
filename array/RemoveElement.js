const nums = [0,1,2,2,3,0,4,2]
const val = 2

const removeElement = function(nums, val) {
    let counter = 0;

    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== val){
            nums[counter++] = nums[i]
        }
    }

    return counter
};

removeElement(nums, val)