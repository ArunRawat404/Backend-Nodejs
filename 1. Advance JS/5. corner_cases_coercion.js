// ToString -> "" + value

console.log("" + 0);   // 0 -> "0" -> 0
console.log("" + -0);  // -0 -> "0" -> 0

console.log("" + []);  // [] -> "" -> "" + "" -> empty string

console.log("" + {});  // [object Object]

console.log("" + [1, 2, 3]);  // 1,2,3

// null and undefined are always eradicated
console.log("" + [null, undefined]);  // ,

console.log("" + [1, 2, null, 4]);  // 1,2,,4


// ToNumber()

console.log(0 - "010");  // -10, when we have 010 inside string it was treated as decimal number
console.log(0 - "O10");  // NaN
console.log(0 - 010);  // -8, treated as octal number
console.log(0 - "0xb"); // -11, treated as hexadecimal number
console.log(0 - 0xb); // -11, treated as hexadecimal number

console.log(1 - []);  // 1, empty array([]) become 0
console.log(1 - [""]);  // 1, empty array with string ([""]) become 0
console.log(1 - ["0"]);  // 1, empty array with string 0(["0"]) become 0

console.log([6] - 1);  // 5
console.log([5, 6] - 1);  // NaN


