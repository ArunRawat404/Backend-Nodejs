// this always refers to the calling site/context except arrow functions in which this is resolved lexically


let iphone = {
    name: "Iphone 13 pro",
    price: 100000,
    description: "The new apple iphone 13 pro.",
    rating: 4.8,

    display() {
        console.log("First display", this);
    }
}


let macbook = {
    name: "Macbook pro",
    price: 200000,
    description: "The new apple macbook pro.",
    rating: 4.7,

    display() {
        console.log("Second display", this);
    }
}

console.log(iphone.display()); // Calling display() function in the context of iPhone so this is referring to the calling context.
console.log(macbook.display()); // Calling display() function in the context of MacBook so this is referring to the calling context.
console.log(this);
