let x = -0;
console.log(x == 0);  // true

// to check if something is equal to -0

console.log(Object.is(x, +0));  // false
console.log(Object.is(x, -0));  // true


console.log(Math.sign(-3));  // -1
console.log(Math.sign(4));  // 1
console.log(Math.sign(-0));  // -0
console.log(Math.sign(0));  // 0

// custom function to give sign of a number

let num = -0;

if (Math.sign(num) === -1 || Math.sign(num) === -0) {
    console.log("Negative Sign");
} else {
    console.log("Positive Sign")
}


