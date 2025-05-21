// - Fibonacci Sequence - Return the first n numbers of the Fibonacci sequence

function fibonacci (n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice (0, n);
}
console.log(fibonacci(7));

// - Factorial - Input: 5 Output: 12

function factorial(n) {
    let result = 1;
    for (i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log (factorial(5));

// - Check Prime Number - Write a function that returns true if a number is prime

function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
 console.log (isPrime(7));



//  - Sum of Digits - Input: 123 Output: 6

function sumOfDigits (num) {
    let sum = 0;
    let str = num.toString();

    for (let i = 0; i < str.length; i++) {
        sum += parseInt (str[i]);
    }
    return sum;
}
console.log (sumOfDigits(123));