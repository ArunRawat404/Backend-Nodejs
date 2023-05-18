const iphone = {
    name: "Iphone",
    price: 100000,
    rating: 4.8,

    display: function () {

        let iphoneRed = {
            name: "Iphone Red",
            price: 125000,

            /*  Inside arrow functions `this` keyword does not refers to the calling context.
                By default, inside an arrow function `this` is resolved lexically.
                Through lexical scoping, the 'this' keyword will be resolved.
                print() function does not know about `this` keyword. We'll go one step outside.
                Is this display() function actually having any idea about the `this` keyword? Yes
                display() function is the normal function not a arrow function so here you have an idea about `this` keyword that here `this`  actually points to the calling context and here the calling context is the iPhone object.
           */
            print: () => {
                console.log(this);
            }
        };
        iphoneRed.print();

    }

}

iphone.display();
