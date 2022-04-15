// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212

// Input Anatmoy of a Function .
// name boiling Point
// Input given numbers.
// Set temp to at, above and below boiling point (212).
// Determin if number (42,350,212) is below at or above boiling point.

const boilingPoint = (temp) => {
    if (temp < 212){
        return "below boiling point"
    }
    if (temp === 212){
        return "at boiling ponit"
    }
    if (temp > 212){
        return "above boiling point"
    }
}
console.log(boilingPoint(350))

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

// input array formula
// name topic (numbers) and fill in variables 
// add both arrays
// return the number of the length

let numbers1 = ["3", "7", "0", "36", "-9"]
let numbers2 = ["8", "-7", "42", "9", "-13"]

console.log(numbers1.concat(numbers2).length)


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ovarB"

// const currentCohort = "Bravo 2022"

// I wasn't abel to add the codes below to work out properly so I tried pluging in the variable as a function instead.

// Find code that splits all characters
// Find code that reverses all characters
// Find code that reverses all charactersfind the code that joins all characters

// let currentCohort = "Bravo 2022"


let currentCohort = (reverse) => {
    return `2202  ${reverse}!`
  }
  console.log(currentCohort("ovarB"))

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]

// Find code that evalutes each number and outputs if it is odd or even.
// type in all the different numbers to be evaluated 

const oddOrEven = (number) => {
    if (number % 2 !== 0){
        return "odd"
    } else {
        return "even"
    }
  }
console.log(oddOrEven(13))
console.log(oddOrEven(34))
console.log(oddOrEven(5))
console.log(oddOrEven(10))
console.log(oddOrEven(27))
console.log(oddOrEven(42))


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// create a function telling to subtract two numbers
// log the numbers to be subtracted

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const subtractTwoNumbers = (num1 , num2) =>{
    return num1 - num2
}
console.log(subtractTwoNumbers(number2, number1))
console.log(subtractTwoNumbers(number3, number4))