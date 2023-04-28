// The abstract operation ToPrimitive takes an input argument and an optional argument PreferredType. The abstract operation ToPrimitive converts its input argument to a non-Object type. If an object is capable of converting to more than one primitive type, it may use the optional hint PreferredType to favour that type.

/* let obj = {
    toString() {
        // by default it returns [object Object] which is typeof string
        // Overriding the toString function
        return "100";
    },

    valueOf(){
        // by default returns the same object which is typeof object
    }
};

*/

let obj = {};

console.log(10 - obj); // obj.valueOf -> object, toString -> [object Object] is string which will be converted to invalid number i.e. NaN -> 10 - NaN -> NaN


let obj1 = {
    x: 10,
    y: 11
};

console.log(10 - obj1); // NaN, same as above case as it depends on toString and valueOf


let obj2 = {
    x: 7,
    valueOf() {
        return 10;
    }
};

console.log(100 - obj2); // 90, as valueOf will return 90 which is non-object


let obj3 = {
    x: 7,
    toString() {
        return "20";
    }
};

console.log(100 - obj3); // 80, as valueOf will return "80" which will be converted to number


let obj4 = {
    x: 7,
    toString() {
        return {};
    }
};

// As toString will return object which will lead to TypeError Exception
// console.log(100 - obj4) // TypeError: Cannot convert object to primitive value


// Addition Operation

let object = {};

console.log("18" + obj); // "18" + [object Object] -> 18[object Object]    

console.log(18 + obj); // 18 + [object Object] -> "18" + [object Object] -> 18[object Object]    

// as there are no hint default will be used which will converted to number -> valueOf will be called which will return 5 -> "10" + 5 -> "10" + "5" -> "105"
console.log("10" + { x: 10, toString() { return "holo"; }, valueOf() { return 5; } });  // "105"