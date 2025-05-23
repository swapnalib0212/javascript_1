// - Custom map() Function - Create a function customMap(arr, callback) that mimics Array.prototype.map.
function customMap(arr, callback) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        let changed = callback(arr[i]);
        result.push(changed);
    }
    return result;
}


function double (num) {
    return num * 2;
}
let numbers = [1, 2, 3, 4]
let newArray  = customMap(numbers, double);
console.log (newArray);





// Longest Word in a Sentence - Input: 'The quick brown fox jumps over the lazy dog' -> Output: 'jumps';

function findLongestWord (sentence) {
    let words = sentence.split (" ");
    let longest = "";


for (let i = 0; i < words.length; i++) {
    if (words[i].length >= longest.length) {
        longest = words[i];
    }
}
    return longest;
    
}
let sentence2 = "The quick brown fox jumps over the lazy dog";
console.log (findLongestWord(sentence2));


// - Flatten an Array - Input: [1, [2, [3, 4]], 5] -> Output: [1, 2, 3, 4, 5]

// let arr = [1, [2, [3, 4]], 5];
// let flatArr = arr.flat(2);
// console.log (flatarr);


 function flattenArray (arr) {
let result = [];

for (i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
        result = result.concat(flattenArray(arr[i]));
    } else {
         result.push(arr[i]);
    }
}
   return result;
 }
 let arr = [1,[2, [3, 4]],5];
 console.log (flattenArray(arr));