var lengthOfLastWord = function(s) {
    return s.trim().split(" ").at(-1).length
};

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))

console.log(lengthOfLastWord("Today is a nice day"))