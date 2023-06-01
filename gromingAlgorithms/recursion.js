function recursion(arr) {
    if (arr[0] == undefined){
        return 0;
    }

    const number = arr[0]
    arr.shift()

    return number + recursion(arr)
}

const arr = [1, 2, 3, 4, 5, 6, 6, 6, 5, 4, 3, 2]
// console.log(recursion(arr))