function timeConsumingByLoop() {
    console.log("Loop starts");
    for (let i = 0; i < 10000000000; i++) {
        // some task
    }
    console.log("Loop ends");
}


function timeConsumingByRunTimeFeature() {
    console.log("Starting timer");
    setTimeout(function exec() {
        console.log("Completed the timer");
    }, 5000);

}

console.log("Hi");

timeConsumingByLoop();
timeConsumingByRunTimeFeature();
timeConsumingByLoop();

console.log("Bye");