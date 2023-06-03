const maxProfit = function(prices) {
    let left = 0
    let right = 1

    let result = 0

    while(right < prices.length){
        if (prices[left] < prices[right]){
            result = Math.max(prices[right] - prices[left], result)
        } else {
            left = right
        }

        right++
    }

    return result
};

console.log(maxProfit([7,1,5,3,6,4]))