const arr = [1,0,2,3,0,4,5,0]

const duplicateZeros = function(arr) {
    const arrLength = arr.length

    for (let i = 0; i < 8; i++){
        if (arr[i] == 0){
            for (let j = arr.length; j > i; j--){
                arr[j+1] = arr[j]
            }

            arr[i+1] = 0
            i++
        }
    }

    for (let i = arr.length; i > arrLength; i--){
        arr.pop()
    }

    return arr
};

duplicateZeros(arr)