const reverseWords = function(s) {
    let result = []
    s = s.trim().split(" ")

    for (let i = s.length - 1; i >= 0; i--){
        if (s[i] !== ""){
            result.push(s[i])
        }
    }

    return result.join(" ")
};

console.log(reverseWords("the sky is blue"))
console.log(reverseWords("  hello world  "))
console.log(reverseWords("a good   example"))