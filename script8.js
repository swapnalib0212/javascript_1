//  - Find Missing Number - Input: [1, 2, 3, 5] -> Output: 4. Assume the array contains numbers from 1 to n with
// one missing.

function findMissingNumber(arr) {
let n = arr.length + 1;
  for (let i = 1; i <= n; i++) {
    if (!arr.includes(i)) {
        return (i);
    }
  }
}
 let numbers2 = [1, 2, 3, 5];
  console.log (findMissingNumber(numbers2));


//   - Count Letter Frequency - Input: 'hello' -> Output: { h: 1, e: 1, l: 2, o: 1 }

const str = "hello";
const frequency = {};

for (const char of str) {
if (frequency[char]) {
    frequency[char] += 1;
}
else {
    frequency[char] = 1
}
}
console.log (frequency);


// Group Words by First Letter - Input: ['apple', 'banana', 'apricot', 'cherry', 'blueberry'] -> Output: { a: [...], b:
//     [...], c: [...] }

const words = ['apple', 'banana', 'apricot', 'cherry', 'blueberry'];
const grouped = {};

for (const word of words) {
    const firstLetter = word[0];

    if (grouped[firstLetter]) {
        grouped[firstLetter].push(word);
    } else {
        grouped[firstLetter] = [word];
    }
}
console.log (grouped);


// Anagram Checker - Input: 'listen' and 'silent' -> Output: true

function isAnagram (str1, str2) {
    const normalise = str => str.replace(/\s+/g, '').toLowerCase();

    const sortedstr1 = normalise(str1).split('').sort().join('');
    const sortedstr2 = normalise(str2).split('').sort().join('');

    return sortedstr1 === sortedstr2;
}
console.log (isAnagram('listen', 'silent'));


// - Debounce Function - Write a debounce function that delays executing a callback until after a delay (e.g.,
//     300ms) of inactivity.
    function debounce (callback, delay) {

        let timer;

    return function () {
    clearTimeout(timer);
    timer = setTimeout(callback, delay);
    };
    }
    function sayHello () {
        console.log ('Hello!');
    }
    const debouncedHello = debounce(sayHello, 300);
    debouncedHello();