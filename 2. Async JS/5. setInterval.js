let count = 0;

// setInterval() will call the callback function after a set interval of time
let y = setInterval(function exec() {
    count++;
    console.log("hi", count)
    if (count >= 15) {
        // to stop the setInterval function
        clearInterval(y);
    }
}, 500);