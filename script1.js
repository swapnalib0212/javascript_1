//- Add Two Numbers - Write a function add(a, b) that returns the sum of two number//
function add (a,b) {
    return a + b 
}
console.log(add (2,3));



// - Even or Odd - Write a function isEven(num) that returns true if the number is even, false otherwise.
function isEven(num) {
return num % 2 === 0;
}
console.log (isEven(4));



// - Maximum of Two Numbers - Write a function max(a, b) that returns the larger of two numbers.
function max(a, b) {
    return a > b ? a : b;
}
console.log (max(8,9));


// - Simple Calculator - Create a function that takes two numbers and an operator (+, -, *, /) and returns the
// result.
 
function calculate(a, b, operator) {
    switch (operator) {
    case '+':
        return a + b;
    case '-':
        return a - b;
    case '*':
        return a * b;
    case '/':
        return b !== 0 ? a / b : 'Cannot divide by zero';
    default:
        return 'Invalid operator';

    }
}
console.log (calculate(3, 5, '+'));
console.log(calculate(8, 9, '*'));