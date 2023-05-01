// Promise is a special object that acts as a placeholder for the data we can hope to get in future

// to generate random integer between 1 to max num
function getRandomInt(max) {
    return Math.ceil(Math.random() * max);
}

function createPromiseWithLoop() {
    // syntax to create a Promise Object
    // promise works as synchronous code
    // resolve and reject are function which when called fulfill or reject the promise respectively
    return new Promise(function executor(resolve, reject) {
        for (let i = 0; i < 100000; i++) { }
        let num = getRandomInt(10);
        if (num % 2 == 0) {
            // if num is even we fulfill 
            resolve(num);
        } else {
            // if num is odd we reject
            reject(num);
        }
    });
}

let x = createPromiseWithLoop();
console.log(x);


function createPromiseWithTimeout() {
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
    });
}

let y = createPromiseWithTimeout();
console.log(y);