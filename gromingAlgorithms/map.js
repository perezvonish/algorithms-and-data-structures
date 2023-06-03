Map.prototype.findInMap = function (index) {
    return this.get(index)
}

const phoneBook = new Map()

phoneBook.set("jenny", 8675309)
phoneBook.set("emergency", 911)


console.log(phoneBook.findInMap("zxc"))