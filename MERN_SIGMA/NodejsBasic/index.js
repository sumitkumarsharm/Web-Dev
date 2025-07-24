// importing the math module
// Using CommonJS syntax
// const math = require('./math');
// console.log(math.add(5, 3));          // Output: 8
// console.log(math.subtract(10, 4));     // Output: 6
// console.log(math.multiply(7, 6));      // Output: 42
// console.log(math.divide(20, 4));       // Output: 5

// Using ES6 syntax
import { add, subtract, multiply, divide } from './math.js';
console.log(add(5, 3));          // Output: 8
console.log(subtract(10, 4));     // Output: 6
console.log(multiply(7, 6));      // Output: 42
console.log(divide(20, 4));       // Output: 5