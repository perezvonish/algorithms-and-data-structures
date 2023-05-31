const nums = [-4,-1,0,3,10]

const sortedSquares = function(nums) {
    return (nums.map((elem) => {
        return Math.pow(elem, 2);
    })).sort((a, b) => {
        return a - b
    })
};

sortedSquares(nums)