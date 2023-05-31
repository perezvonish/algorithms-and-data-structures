const nums = [1,1,0,1,1,1]

const findMaxConsecutiveOnes = function (nums) {
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        let count = 0;

        if (nums[i] == 1){
            for (let j = i; j < nums.length; j++){
                if (nums[j] == 0){
                    break
                }

                count++
            }
        }

        if (res < count){
            res = count
        }

        count = 0
    }

    return res
};

findMaxConsecutiveOnes(nums``)