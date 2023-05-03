// Closure is property of a function when a function remembers is's lexical scope even when the function executed outside the lexical scope 

function process() {
    let i = 0;
    function innerProcess() {
        i += 1;
        return i;
    }

    return innerProcess;  // we are not calling the function, we are just returning
}

let res = process();

console.log(res);

console.log("First time calling res", res());  // 1
console.log("First time calling res", res());  // 2
console.log("First time calling res", res());  // 3