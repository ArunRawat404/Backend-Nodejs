// The const declaration creates block-scoped constants, the value of a constant can't be changed through reassignment 

const a = 10;
// a = 11;  // Error


// Cannot have uninitialized const
// const b;  // Error

const obj = { x: 10 };

// Updating and adding new properties to an constant object is fine
obj.x = 11;
obj.y = 20

console.log(obj)  // { x: 11, y: 20 }

// obj = {}  // Error

