// var allow re-declaration of variable but let not allow it

let a = 10;
// let a = 11;  // Error

var b = 10;
var b = 11;  // re-declaration 

// let 

function fun() {
    for (let i = 0; i < 10; i++) {
        // do something
    }

    // console.log(i);  // Error as it will be not accessible outside it's block
}

function process() {
    if (x > y) {
        let temp = x;
        x = y;
        y = temp;
    }
    return y - x;
}


fun();


// var 

function gun(x) {
    let i;
    if (x % 2 == 0) {
        i = 0;
    } else {
        i = 1;
    }

    console.log(i)
}


function gun(x) {
    if (x % 2 == 0) {
        var i = 0;
    } else {
        var i = 1;
    }

    console.log(i)
}

gun(5)