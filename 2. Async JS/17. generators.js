// generator function defines with function* 

function* fetchNextElement() {  // generator function 
    console.log("I am inside generator function");
    // the moment generator function see a yield it temporarily stop the execution and return the yield value as return value of iterator, when we again call next() will resume from last yield till next yield 
    yield 1;
    yield 2;
    console.log("Somewhere in the middle");

    // it will act as final yield and make the done true
    return 10;
    yield 3;
    yield 4;
}

// the execution of generator function doesn't starts at the time of calling the function
// it returns a iterator when you call a generator function 
const iter = fetchNextElement();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
