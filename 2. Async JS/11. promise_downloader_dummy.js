// Resolved Inversion of control problem of callbacks using promises

function download(url) {
    console.log("Started downloading from url", url);
    return new Promise(function exec(res, rej) {
        setTimeout(function p() {
            console.log("Completed downloading");
            const content = "ABCDE";
            res(content);
        }, 3000);
    });
}

let p = download("www.xyz");

p
    // .then immediately returns a new promise object
    .then(
        function fulfillHandler(value) {
            console.log("Downloaded data is", value);
            // the return value from first .then will be value for second .then 
            // if we don't return anything it by default return undefined  
            return "New promise value";
        },
        function reject(value) {
            console.log("Rejected with", value);
        })
    .then(function newFulfillHandler(value) {
        console.log("Value from chained then promise is", value);
    })