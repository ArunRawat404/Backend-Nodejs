// `new` keyword will create brand new plain empty javascript object.

class Product {
    name;
    price;
    description;

    display() {
        // print the product
    }
}

/* 
Product() -> it is calling constructor of the class. Whenever we create an object of a class constructor is the first function that actually gets called.
# Use case of constructor?
- initialize the property of the object with some values.
- set up some connections.
Constructor is a special function. If you don't write the constructor
of yourself, JS takes the default constructor by default. In 
default constructor there is no logic.
*/
const p = new Product();
console.log(p);


class ProductWithConstructor {
    /* 
    Once you have assigned these values inside the constructor you don't need to mention these values name, price and description inside the class.When you do 
        this.name = n;
        this.price = p;
        this.description = d;
    a new key-value pair is getting assigned inside the object.
    `this` keyword is actually pointing to the `brand new plain empty object`.
    
    name;           
    price;
    description;

    If you don't have the constructor() and you only have just the properties
    then these properties get automatically assigned with the value undefined.
    */

    // In JS constructors are created using syntax constructor(){} Here `this` keyword will point to the same `brand new plain empty object`.
    constructor(n, p, d) {
        this.name = n;
        this.price = p;
        this.description = d;

        // Constructor is a function and in a function, we generally return something and here we are not returning anything.
        // return 10; // Nothing will happen same answer will come out.

        // Inside a constructor if you use a return keyword with a primitive then there is no effect it will just avoid it because a constructor is meant to do something with an object.

        // return {}; // Answer will come out as {} because constructors are meant to return an object. So if you manually return an object it will think that this is the object that you want to return.
        // return { x: 10 }; // Answer will come out as { x: 10 }

        return this; // If you don't return anything it is returning `this` by default or it is equivalent to saying `return this`.

    }

    display() {

    }
}

// Here the calling context is the `brand new plain empty object` that is created by the `new` keyword.
const p2 = new ProductWithConstructor("bag", 200, "Cool bag");
console.log(p2)


// Qn.Can u do constructor overloading in JS?
// Ans: Overloading of a function means that you will be having same function name but signature will be different(parameters, no of parameters, return type..) No, constructor overloading is not possible in JS. 