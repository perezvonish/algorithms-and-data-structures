const arr = [0,10,20,30]
function greaterThan10(n) { return n > 10; }

const filter = function(arr, fn) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (!fn(arr[i], i)){
            for (let j = i; j < arr.length; j++){
                arr[j] = arr[j+1]
            }
            arr.length--
        }
    }

    return arr;
};

console.log(filter(arr, greaterThan10))