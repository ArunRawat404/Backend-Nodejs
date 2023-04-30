/*
    1. Inversion of control (Promises can resolve this issue)
    The control of your function (which was your implementation) you have passed the control of how this function should be called to someone else 
    2. Callback hell -> Readability problem
    The phenomenon which happens when we nest multiple callbacks within a function is called a callback hell
*/


function doTask(fn, x) {
    // Implementation done by team A
    fn(x * x);  // calling the callback
}

// due to callbacks, I am passing control of how exec should be called to doTask, this is inversion of control
doTask(function exec(num) {
    console.log("Woh num is", num);
}, 9);

