const kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies)

    for (let i = 0; i < candies.length; i++){
        candies[i] = (candies[i] + extraCandies) >= max;
    }

    return candies
};

const candies = [2,3,5,1,3]
const extraCandies = 3

console.log(kidsWithCandies(candies, extraCandies))