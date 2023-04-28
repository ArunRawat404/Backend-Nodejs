// Implicit typecasting is known as Coercion 

// ** Abstract operations works internally in javascript , these are operation which developers cannot use directly as they are for internal working of javascript language like ToNumber(), ToString() etc. 

// * Subtraction operator(-) calls Abstract operation ToNumber() on both operands

// coercion ToNumber()

console.log(9 - 2); // 7
console.log(10 - null); // null will be converted to 0 -> 10 - 0 -> 10
console.log(10 - undefined); // undefined will be converted to NaN -> 10 - NaN -> NaN

console.log(1 - "150"); // "150" is converted to 150 -> 1 - 150 -> -149

// if we try to convert something to number but it cannot be converted it will be converted to NaN (invalid number )
console.log(1 - "1abc23"); // 1 - NaN -> NaN

// 0x is prefix for hexadecimal notation 0xa is A in hexadecimal which is 10 in decimal notation
console.log(1 - "0xa"); // 1 - 10 -> -9
