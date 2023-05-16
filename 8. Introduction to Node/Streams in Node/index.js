// ES6 module

import { readFile, writeFile } from 'fs/promises';

// In ES6 module, import.meta.url give the current file path
const filePath = new URL('./index.html', import.meta.url);

// to read content of the file
// We can use await here without async since it is a top-level module
let contents = await readFile(filePath, { encoding: 'utf-8' });

const data = {
    name: "Arun Rawat",
    age: 20,
}

// Object.entries(data)) will convert given object as nested array 
// E.g = [[ 'name', 'Arun Rawat' ], [ 'age', 20 ]]

for (const [key, value] of Object.entries(data)) {
    // if we find a string like {key} then replace it with corresponding value
    contents = contents.replace(`{${key}}`, value);
}

console.log(contents);

// write in file new_index.html with content as contents, if file is not present will create one
// await writeFile(new URL('./new_index.html', import.meta.url), contents);

// to write something on terminal/console(console.log internally use process.stdout)
process.stdout.write("hello");