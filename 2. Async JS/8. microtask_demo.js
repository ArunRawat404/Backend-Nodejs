function createPromise() {
    return new Promise(function executor(resolve, reject) {
        console.log("Resolving the promise");
        resolve("Done");
    });
}

setTimeout(function process() {
    console.log("Timer Completed");
}, 0);

let p = createPromise();

p
    .then(
        function fulfillHandler(value) {
            console.log("We fulfilled with a value ", value);
        },
        function rejectionHandler() { });

console.log("Ended")