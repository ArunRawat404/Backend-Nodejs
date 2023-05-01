// to generate random integer between 1 to max num
function getRandomInt(max) {
    return Math.ceil(Math.random() * max);
}

function createPromiseWithTimeout() {
    console.log("Entering the executor callback in the promise constructor");
    return new Promise(function executor(resolve, reject) {
        let num = getRandomInt(10);
        setTimeout(function () {
            if (num % 2 == 0) {
                // if num is even we fulfill 
                resolve(num);
            } else {
                // if num is odd we reject
                reject(num);
            }
        }, 5000)
        console.log("Entering the executor callback in the promise constructor");
    });
}

console.log("Starting ...")
let p = createPromiseWithTimeout();
console.log("Waiting for the promise to complete");
console.log("Currently my promise object is like ... ", p);
console.log("Going to register my 1st set of handlers");

p
    .then(
        function fulfillHandler1(value) {
            console.log("Inside fulfill handler 1 with value ", value);
            console.log("Promise after fulfillment is ", p);
            setTimeout(function timer() { console.log("Ended 0s timer"); }, 0)
            console.log("Exiting the 1st fulfillment handler");
        },
        function rejectionHandler1(value) {
            console.log("Inside rejection handler 1 with value", value);
            console.log("Promise after rejection is ", p);
            setTimeout(function timer() { console.log("Ended 0s timer"); }, 0)
            console.log("Exiting the 1st fulfillment handler");
        }
    );

console.log("Going to register my 2nd set of handlers");

p
    .then(
        function fulfillHandler2(value) {
            console.log("Inside fulfill handler 2 with value ", value);
            console.log("Promise after fulfillment is ", p);
        },
        function rejectionHandler2(value) {
            console.log("Inside rejection handler 2 with value", value);
            console.log("Promise after rejection is ", p);
        }
    );


console.log("Ending ...");
setTimeout(function () { console.log("Global timer executed"); }, 1000);