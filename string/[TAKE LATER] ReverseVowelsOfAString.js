const reverseVowels = function(s) {
    const vowels = ["a", "e", "i", "o", "u"]

    if (!Array.isArray(s)){
        s = s.split(" ,")
    }

    if (s.length == 0){
        return ""
    }

    let result = s[0].split("")

    if (result.length == 1){
        return result[0]
    }

    s.shift()

    for (let i = 0; i < result.length; i++){
        if(vowels.includes(result[i].toLowerCase())){
            for (let j = i + 1; j < result.length; j++){
                if (vowels.includes(result[j].toLowerCase())){
                    let temp = result[j]
                    result[j] = result[i]
                    result[i] = temp
                }
            }
        }
    }

    return result.join("") + reverseVowels(s)
};

console.log(reverseVowels("hello"))
console.log(reverseVowels("leetcode"))
console.log(reverseVowels("aA"))
console.log(reverseVowels("A man, a plan, a cameo, Zena, Bird, Mocha, Prowel, a rave, "))


const test = reverseVowels(" ")
console.log(`-${test}-`)