const prices = [7,1,5,3,6,4]

const maxProfit = function(prices) {
    let profit = 0;
    let index = 0;

    for(let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++){

            let temp = (prices[j] - prices[i])

            if (temp > 0 && temp > profit){
                profit = temp
                index = j
            }
        }
    }

    return index
};

console.log(maxProfit(prices))