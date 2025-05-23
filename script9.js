// Days Between Two Dates - Input: ('2022-01-01', '2022-01-31') -> Output: 30
function calculateDays (startDateStr, endDateStr) {

const startDate = new Date(startDateStr); //converted str to  date object
const endDate = new Date(endDateStr);

const timeDiff = endDate - startDate; //calculated the diff in milliseconds

const daysDiff = timeDiff / (1000 * 60 * 60 * 24);//converted milliseconds to days

return daysDiff;
}

console.log(calculateDays('2022-01-01', '2022-01-31'));







// - Deep Equality Checker - Write a function deepEqual(obj1, obj2) that compares two values or objects
// recursively


function deepEqual(a, b) {
    if (a === b) return true;

 if (a == null  || typeof a !== 'object' ||
     b == null  || typeof b !== 'object') {
        return false;
     }
  
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;


  for (let key of keysA) {
    if(!keysB.includes(key) || !deepEqual(a[key], b[key])) {
        return false;
    }
  }
   return true;

}
const obj1 = {a: 1, b: {c: 2}};
const obj2 = {a: 1, b: {c: 2}};
const obj3 = {a: 1, b: {c: 3}};

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
  

  

  