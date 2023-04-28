// == is known as abstract equality and === as strict equality 

// If types are not same == do type conversion and if they are same it calls === while === returns false if types are different 


// Abstract equality

console.log(null == undefined); // true

console.log(10 == "10"); // "10" is converted to 10 -> true 

console.log(false == "0"); // false will be converted to 0 and then "0" to 0 -> true 

let obj = { x: 10, valueOf() { return 100; } };

console.log(obj == 100); // obj -> valueOf() -> return 100 -> 100 == 100 -> true

// Strict equality 

console.log(10 === "10") // false
console.log(false === 0) // false

console.log(NaN === 0) // false, if anyone value is NaN return false
console.log(NaN === NaN); // false , only value which is not equal to itself

console.log(+10 === -10); // false
console.log(+0 === -0) // true
console.log(-Infinity === +Infinity); // false


let obj1 = { x: 10 };
let obj2 = { x: 10 };
let obj3 = { y: 10 };

// in case of objects it returns true only if same Object value(same memory object) are compared
console.log(obj1 === obj2); // false
console.log(obj1 === obj3); // false
console.log(obj1 === obj1) // true
console.log({ x: 10 } === { x: 10 }); // false, as they are not same object value

console.log([] == {}, "hi");