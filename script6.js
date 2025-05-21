// Guess the Number Game (Console Version) - Generate a random number and prompt the user to guess it.
let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess = parseInt(prompt("Guess a number between 1 and 10:"));
if (guess === randomNumber) {
    alert ("Correct! You guessed it.");
} else {
    alert ("Wrong! The number was " + randomNumber);
}

// - Leap Year Checker - Input: 2020 Output: true

function isLeapYear(year) {
    return(year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(isLeapYear(2020));


// * Simple To-Do List (Array-based) - Add, remove, and list items using an array

let todoList = ["buy groceries", "Learn JS","Practice js", "Read book"];

function addTask (task) {
    todoList.push(task);
    console.log(`Added: "${task}"`);
}

function removeTask(task) {
    const index = todoList.indexOf(task);
    if (index !== -1) {
        todoList.splice(index, 1);
        console.log(`Removed: "${task}"`);
    }
}

function listTasks () {
    console.log("To-Do List:");
if (todoList.length === 0) {
    console.log(" (No tasks)");
} else {
    todoList.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}
}
console.log(addTask("Learn Javascript"));
console.log(listTasks());
console.log(removeTask("Learn Javascript"));
console.log(addTask("Learn Javascript"));
console.log(addTask("Learn html"));
console.log(addTask("mini project"));
console.log(addTask("Attend workshop"));
console.log(listTasks());




