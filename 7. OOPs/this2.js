const iphone = {
    name: "Iphone",
    category: "Electronics",
    price: "100000",
    rating: 4.8,

    // Inside arrow functions `this` keyword does not refers to the calling context. By default, inside an arrow function `this` is resolved lexically. In the global scope of node runtime, you have a global `this` object which is an empty object {}
    display: () => {
        console.log(this);
    }
}

const macbook = {
    name: "Macbook",
    category: "Electronics",
    price: "200000",
    rating: 4.9,

    display: function () {
        console.log(this);
    }
}

console.log(iphone.display());  // {}
console.log(macbook.display()); // { name: 'Macbook', category: 'Electronics', price: '200000', rating: 4.9, display: [Function:display]}
