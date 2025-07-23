function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}   

function multiply(x, y) {
    return x * y;
}  

function divide(x, y) {
    if (y === 0) {
        throw new Error("Cannot divide by zero");
    }
    return x / y;
}    

// Exporting the items using CommonJS syntax
// module.exports = {
//     add,
//     subtract,
//     multiply,
//     divide
// };

// Exporting the items using ES6 syntax
export { add, subtract, multiply, divide };