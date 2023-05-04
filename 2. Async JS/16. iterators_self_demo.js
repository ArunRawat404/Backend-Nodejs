// In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.


// custom implementation of iterator
function fetchNextElement(array) {
    let index = 0;
    function next() {
        if (index == array.length) {
            return { value: undefined, done: true };
        }
        const nextElement = array[index];
        index++;
        return { value: nextElement, done: false };
    }
    return { next };
}

// inside automaticFetcher variable we store next() function
const automaticFetcher = fetchNextElement([99, 11, 15, 20, 7, 21, 5])

console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());