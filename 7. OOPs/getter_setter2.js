class Product {
    // private variable
    #name;
    #price;
    description;

    constructor(n, p, d) {
        this.#name = n;
        this.#price = p;
        this.description = d;
    }

    // JS provides keywords for setters i.e. `set` -> to define a setter method to set the property value.

    set name(n) {
        if (typeof (n) != "string") {
            console.log("Invalid name passed");
            return;
        }
        this.#name = n;
    }

    set price(p) {
        if (typeof (p) != "number") {
            console.log("Invalid price passed");
            return;
        };
        this.#price = p;
    }

    // JS provides keywords for getters i.e. `get` -> to define a getter method to get the property value.

    get name() {
        return this.#name;
    }

    get price() {
        return this.#price;
    }

    display() {
        console.log(this.#name, this.#price, this.description);
    }
}

const p = new Product("bag", 200, "Cool bag");

p.display();

// Now instead of calling this name as a function we can use it or access it as a property.
p.name = "Iphone";
p.price = 100000;

console.log(p);
console.log(p.name);
p.display();
