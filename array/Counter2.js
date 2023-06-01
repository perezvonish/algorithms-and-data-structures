const createCounter = function(init) {
    const count = init

    increment = () => {
        return ++init
    }

    reset = () => {
        init = count

        return init
    }

    decrement = () => {
        return --init
    }

    return {
        increment,
        reset,
        decrement
    }
};

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4