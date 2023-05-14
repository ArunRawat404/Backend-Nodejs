// we use '.mjs' extension for ES6 Modules

// Here we have to mention the extension like `.js` while importing the package.
// named export should always be referred as destructed way.
// alias in ES6 Module with as
import { insertionSort as is } from './sorting.mjs';  // Named Export
import bubbleSort from './sorting.mjs';  // default export 

let arr = [3, 2, 1, 5, 4, 23, 6];
is(arr);
console.log(arr);

let arr2 = [31, 2, 11, 5, 14, 23, 6];
bubbleSort(arr2);
console.log(arr2);

// to import all the named exports and club them inside an object here it is sorting
// import * as sorting from './sorting.mjs';