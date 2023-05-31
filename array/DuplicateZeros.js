const arr = [0,1,9,2,6,0,0,4,1,0]

const duplicateZeros = function(arr) {
    const arrLength = arr.length

    for(let i=0; i < arr.length-1; i++){
        if(arr[i] == 0){
            for(let j= arr.length-1; j > i; j--){
                arr[j] = arr[j-1];
            }
            i++;
        }

    }

    for (let i = arr.length; i > arrLength; i--){
        arr.pop()
    }

    return arr
};

console.log(duplicateZeros(arr))
