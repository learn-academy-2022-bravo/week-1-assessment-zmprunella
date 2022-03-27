// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: indigo will be added to the list of colors
// b) Verify and explain: the answer was 5 because there wasn't a second console.log added after the first one and apparently a regular consolelog just counts the number or variables.


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: correct adding .lenghth counts the number of characters in the "" to be logged.


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: l
// b) Verify and explain: Answer was o becuase i forgot to consider that zero is contained in the string list of characters


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer:"JavaScript
// b) Verify and explain: Ruby, because again, zero is to be considered.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY SUNDAY  
// b) Verify and explain: Wrong. toUpperCase is not a function.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer:3
// b) Verify and explain:The answer is number becuase the colsole.log is stating what type of data is being measured in lenght which is a number type of data.
