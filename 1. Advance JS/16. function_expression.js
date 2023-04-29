function fun() {  // function declaration
    console.log("Hi")
};

// IIFE (Immediately Invoked Function Expression)

(function sayHi(name) {
    console.log("Hi", name);
})("Arun");


// function expression, they gets the scope of their corresponding variable in which they are assigned    

let f = function gun() {  // name function expression
    // some implementation
};

let a = function () {  // anonymous function expression
    // some implementation
};

(function x() {
    // some implementation

});

(function () {
    // some implementation

});

// arrow function
let y = () => {

};