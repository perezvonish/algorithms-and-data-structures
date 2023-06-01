const arr = [7,1,14,11]
const checkIfExist = function(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (i !== j && j < arr.length && arr[i] == 2 * arr[j]){
                return true
            }
        }
    }

    return false
};

console.log(checkIfExist(arr))

    // [10,2,5,3]
    // [7,1,14,11]