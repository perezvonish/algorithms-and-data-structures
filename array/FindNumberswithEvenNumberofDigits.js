const nums = [12,345,2,6,7896]

const findNumbers = function(nums) {
    let res = 0;

    for (let i = 0; i < nums.length; i++){
        nums[i].toString().split("").length % 2 === 0 ? res++ : false;
    }

    return res
};

findNumbers(nums)