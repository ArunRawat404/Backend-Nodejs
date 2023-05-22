class Product {
    // to make a private variable we use '#' in front of variable name and refers it like #variable_name
    #name;
    #price;
    description;

    constructor(n, p, d) {
        this.#name = n;
        this.#price = p;
        this.description = d;
    }

    // setter, setter methods are used to change the values of an object

    setName(n) {
        if (typeof (n) != "string") {
            console.log("Invalid name passed");
            return;
        }
        this.#name = n;
    }

    setPrice(p) {
        if (typeof (p) != "number") {
            console.log("Invalid price passed");
            return;
        };
        this.#price = p;
    }

    // getter, getter methods are used to access the properties of an object.

    getName() {
        return this.#name;
    }

    getPrice() {
        return this.#price;
    }

    display() {
        console.log(this.#name, this.#price, this.description);
    }
}

const p = new Product("bag", 200, "Cool bag");
p.setName("Iphone");
p.setPrice(100000)
console.log(p);
console.log(p.getName());
p.display();
