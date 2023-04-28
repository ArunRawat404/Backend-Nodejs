// to check if a number is NaN or not

let x = NaN;
console.log(isNaN(x));  // true

console.log(isNaN("Arun"));  // true, isNaN converts the incoming input to a number, use ToNumber conversion

console.log(Number.isNaN("Arun"));  // false, it doesn't apply coercion 

// mimicking Number.isNaN 
if (typeof (x) == "number" && x !== x) {
    console.log(true);
} else {
    console.log(false);
}


// OR

console.log(x !== x);