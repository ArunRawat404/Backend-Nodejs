// the function which we pass inside higher order function as an argument is known as callback function

// setTimeout is a higher order function and exec() is a callback function
setTimeout(function exec() {
    console.log("I am running after sometime");
}, 4000);