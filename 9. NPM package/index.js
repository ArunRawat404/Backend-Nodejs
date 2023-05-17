/*
In CommonJS module, if u don't add the `index` over here:

- const DataStructures = require('./dataStructures/index');
- const Algorithms = require('./algorithms/index');

It still works/runs fine. Because in the CommonJS module if u want to import the index.js file of some particular folder u don't have to mention explicitly `/index` it is  automatically assumed that the index file is only imported.
*/

const dataStructures = require('./dataStructures/index');
const algorithms = require('./algorithms/index')

module.exports = {
    dataStructures,
    algorithms
}