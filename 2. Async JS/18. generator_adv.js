function* fetchNextElement() {
    console.log("Inside generator");
    const x = 10;
    console.log(yield 11);
    console.log("Entering after a yield");
    const y = x + (yield 30);
    console.log("Value of y is", y);
}

console.log("Start");
const iter = fetchNextElement();
console.log("Called generator");

console.log("First", iter.next());
console.log("Second", iter.next(50));
// Value will be passed to the last yield position
console.log("Third", iter.next(30));