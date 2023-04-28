// Logical Not(!) operator and conditionals(if-else) use ToBoolean() abstract operator internally

// ToBoolean Abstract Operator      

let x = 10;
console.log(!x); // x will be true, !true -> false

let y = undefined;
console.log(!y); // y will be false, !false -> true

if (y) {
    console.log("It is truthy");
} else {
    console.log("It is falsy");
}