// - Reverse a String - Input: "hello" Output: "olleh"

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));


function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log (reverseString("hello"));




// - Check Palindrome - Input: "madam" Output: true

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed
}
console.log(isPalindrome("madam"));


function isPalindrome(str) {
    let reversed ="";
    for (i = str.length - 1; i>=0; i--) {
        reversed += str[i];
    }
    return str === reversed;
}
console.log (isPalindrome("madam"));


// - Count Vowels - Write a function to count the number of vowels in a string.

function countvowels(str) {
    let count = 0
    for (const char of str) {
        if (
            char === "a" || char === "e" || char ==="i" || char ==="o" || char ==="u" ) {
            count++
        };
    };
    return count;
}
console.log(countvowels("javascript"));




//  Capitalize First Letter - Input: "hello world" Output: "Hello World"

function Capitalize(word) {
    let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    return capitalized;
}
console.log(Capitalize("hello world"));