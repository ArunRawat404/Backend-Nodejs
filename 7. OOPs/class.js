// class is blueprint

class Product {
    // properties are also known as data members
    // Here we don't need to use var, let & const
    name;
    price;
    discount;
    description;

    // behavior is known as member function 
    // Here no need to use function keyword
    display() { }
    buy() { }
    wishlist() { }
}

// syntax to create an object
const p = new Product();

