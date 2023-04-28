let obj = { x: 10, y: 10 };
let num = 10;
console.log("My object is " + obj);  // toString default returns [object Object] -> My object is[object Object]
console.log(`My object is ${obj}`);  // My object is [object Object]


console.log(1 < 2 < 3);  // (1 < 2) < 3 -> true < 3 -> 1 < 3 -> true
console.log(3 > 2 > 1);  // (3 > 2) > 1 -> true > 1 -> 1 > 1 -> false


// explicit type conversion

console.log(Boolean(""));  // false
console.log(String(123));  // "123"