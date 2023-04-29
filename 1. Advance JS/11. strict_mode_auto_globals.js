// JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode"

// to use strict mode 
"use strict";

var teacher = "Sanket";

function fun() {
    var teacher = "Raj";
    // without strict mode when variable without formal declaration are created, during execution phase they become auto-globals like content here
    content = "JS";
    console.log(teacher);
    console.log(content);
}

function gun() {
    var student = "Arun";
    console.log(student);
}

fun();
gun();
console.log(teacher);
console.log(content); // Error, as strict mode will restrict auto-globals creation


// strict mode in block will allow function to have scope only inside block not global scope

{
    function fun2() {
        return "Arun";
    }
}

console.log(fun2());  // Error