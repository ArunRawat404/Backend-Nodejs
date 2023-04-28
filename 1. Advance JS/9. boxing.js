// Boxing is wrapping a primitive value in an Object. When you treat a primitive type like if it were an object. E.g calling to the toLowerCase function


const a = new Boolean(true)
if (a) console.log("it's true")// it's true
const b = new Boolean(false)
if (!b) console.log("never runs");// objects are “truthy.“
const c = Object(false)
if (!c) console.log("never runs"); // objects are “truthy.“


// The problem here is that you are creating an object wrapper around a false value, but objects are “truthy.” So, if you want to box a primitive value manually, be careful.

const b2 = Boolean(false)
if (!b2.valueOf()) console.log("its false"); // its false