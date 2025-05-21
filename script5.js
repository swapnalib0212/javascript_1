// - FizzBuzz - For numbers 1100: print "Fizz" for multiples of 3, "Buzz" for 5, and "FizzBuzz" for both.
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("Fizzbuzz");
    } else if (i % 3 ===0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// - Count Down Timer - Create a loop that counts down from a number to 0.

for (let i = 10; i >= 0; i--) {
    console.log(i);
}



// - Multiplication Table - Print the multiplication table for a given number (e.g., 5).
let number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}