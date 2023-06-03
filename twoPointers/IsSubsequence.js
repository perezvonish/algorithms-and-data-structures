const isSubsequence = function(s, t) {
    let first = 0
    let second = 0

    while(first < s.length){
        if (second > t.length){
            return false
        }

        if (t[second] == s[first]){
            first++
            second++
        } else {
            second++
        }
    }

    return true
};

console.log(isSubsequence("abc", "ahbgdc"))
console.log(isSubsequence("axc", "ahbgdc"))