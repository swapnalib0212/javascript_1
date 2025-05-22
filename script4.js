// Find Max in Array - Write a function to return the largest number in an array.

function findMax (arr) {
    return Math.max(...arr);
}
console.log (findMax([4, 8, 1, 7, 3]));


function findMax (arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
             max = arr[i];
        }
    }
    return max;
}
console.log (findMax([4, 8, 1, 7, 3]));

// Remove Duplicates - Input: [1,2,2,3] Output: [1,2,3]

function removeDuplicates (arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3]));


function removeDuplicates (arr) {
    let result = []
 for (i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
        result.push(arr[i])
    }
 }
 return result;
}
console.log(removeDuplicates([1, 2, 2, 3]));

// - Array Reversal - Input: [1,2,3] Output: [3,2,1]

function reverseArray(arr) {
    return arr.reverse();
}
console.log (reverseArray([1, 2, 3]));





// Sum of Array Elements - Return the total sum of elements in an array.
function sumArray (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log (sumArray([1, 2, 3, 4]));