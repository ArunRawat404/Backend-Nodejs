/*
In NodeJS, require() is a built-in function to include  external modules that exist in separate files. require() statement basically reads a JavaScript file, executes it, and then proceeds to return the export object. require() statement not only allows to add built-in core NodeJS 
modules but also community-based and local modules.
*/

/* Syntax 1 */
// const searchFunction = require('./searching');
// console.log(searchFunction.linearSearch([3, 6, 1, 8, 11, 15], 15));

/* Syntax 2 */
// Object Destructing, alias 
const { linearSearch, binarySearch: bs } = require("./searching");  // named export

const quicksort = require('./quick_sort')  // default export     


console.log(linearSearch([3, 2, 1, 5, 4, 23, 6], 23));

let arr = [3, 2, 1, 5, 4, 23, 6]
ans = quicksort(arr);
console.log(arr);
