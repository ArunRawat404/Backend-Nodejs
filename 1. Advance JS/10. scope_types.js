// The var statement declares a function-scoped or globally-scoped variable whereas let and const declares a block-scoped local variable.

// block scope

{
    // using let to create block scope
    let a = 10;
}

// console.log(x);  // Error

// global scope

if (true) {
    // will act as global scope as var declares function or global scope only
    var b = 10;
}

console.log(b);  // 10

// function scope 

function fun() {
    console.log(c);  // undefined, c is accessible before initialization
    var c = 10;
}

fun();

// console.log(c);  // Error as c is only accessible inside function


function fun2() {
    console.log(d);  // d is not accessible before initialization
    let d = 10;
}

// fun2();

// console.log(d);  // Error as d is only accessible inside function