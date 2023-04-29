var teacher = "Sanket";  // teacher -> global

function fun() {  // fun -> global
    console.log(teacher);  // undefined, will not throw an error as it is having function scope
    // This concept is known as TDZ(Temporal dead zone),the region before declaration of a variable which is having a block scope made by let is known as TDZ  
    // console.log(content);  // throws an error
    var teacher = "Pulkit";  // teacher -> fun
    let content = "JS";  // let creates block scope, content will be access only post declaration
    if (content == "JS") {
        let hours = "200";
        console.log(hours);  // 200
    }

    console.log(teacher, content);  // Pulkit JS
}

fun();
console.log(teacher);  // Sanket
// console.log(content);