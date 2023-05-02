console.log("Starting of the file");

setTimeout(function timer1() {
    console.log("Timer1 is done");
}, 0);

for (let i = 0; i < 100000; i++) {
    // something.. 
}

// returns a already resolved promise
let x = Promise.resolve("Arun Rawat");

// OR

// function f() {
//     return new Promise(function exec(res, rej) {
//         res("Arun Rawat")
//     });
// }

x.then(function processPromise(value) {
    console.log("Whose promise", value);
});

setTimeout(function timer2() {
    console.log("Timer2 is done")
}, 0);

console.log("End of file");