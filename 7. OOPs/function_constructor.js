//  this is known as function constructor

function Product(n, p, d) {
    this.name = n;
    this.product = p;
    this.description = d;

    this.display = function () {
        console.log(this);
    }

    // When you don't return anything from a function it technically returns undefined. But since it is technically used as a constructor with a `new` keyword that's why if you don't return anything it is equivalent to saying`return this`.
    // return 10; // Nothing will happen same answer will come out.
    // return {}; // Answer will come out as {} because constructors are meant to return an object and here function works as a constructor.
}

const p = new Product("bag", 200, "cool bag");
console.log(p); // We are getting the same output that we are getting in the Product class.
// Whatever you are doing with a class you can achieve with a function. Classes are just a wrap-over function.
p.display();