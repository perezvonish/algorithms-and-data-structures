const mergeAlternately = (word1, word2) => {
    if (!word1 && !word2){
        return ""
    }

    return word1.slice(0, 1) + word2.slice(0, 1) + mergeAlternately(word1.slice(1), word2.slice(1))
};

const w1 = "abcd"
const w2 = "pq"

console.log(mergeAlternately(w1, w2))