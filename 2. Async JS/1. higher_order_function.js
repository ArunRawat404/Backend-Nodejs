// higher order functions are functions which take another function as arguments

// function fn is passed as argument to function fun
function fun(x, fn) {
    console.log(x);
    console.log(fn);
    fn();
}

fun(10, function fn() {
    console.log("I am an expression passed to higher order function");
});

let array = [1, 5, 11, 22, 7, 9, 500, 100];  // unsorted array

// it sort an array but default implementation of sort() is going to sort array in lexicographical order (dictionary like)
array.sort();

console.log(array);

let array2 = [1, 5, 11, 22, 7, 9, 500, 100];  // unsorted array

// to sort array in increasing order based on value

// sort is a higher order function, it takes a comparator function as argument 
// the function which we pass inside HOF as an argument is known as callback function
array2.sort(function cmp(a, b) {
    // If a < b -> a - b will be negative -> if cmp function gives negative then a is placed before b (a < b)
    // If a > b -> a - b will be positive -> if cmp function gives positive then b is placed before a (a > b)
    return a - b;
});

console.log(array2);