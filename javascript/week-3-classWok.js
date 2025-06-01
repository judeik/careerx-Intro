// alert ("Welcome to Javascript");

// console on the browser

// Data
// Data Type
// Data Methods

// Variable
// Naming Covention

// String is anything you write inside a quote either signle or double quotes

// Variables: Any thing that can hold a value but the value can be changed.

// var firstName = "Jude"

// var lastName = "Ojobor"

// String, Numbers, Booleans

// var isComingHome = "true"
// var todaysDate = "2025-01-06"

// Null and Undefined
// var todaysGoals = null

// const let 

// ECMAScript ES ES5, ES6, ES7, ES 2014, ES 2015 referes to JAVASCRIPT

// Scope

// const isComingHome = 56

// let arr = 5

// arr = 60
// console.log(arr)

const firstName = "J u de"

const lastName = "Ojobor"

const age = 50

const isMarried = true

const payment = null

let successful 

// successful = true

// successful = null
console.log( firstName.toLocaleUpperCase())

console.log( firstName.includes("D") )

console.log( firstName.length )

console.log( firstName.trim() )

// Numbers + - / * ** %

const a = 4
const b = 2
const c = 3

const answer = a + b + c
const answers = a * b + c ** a
const answer1 = ( a / b) * ( c ** 4 + c ) - 3
const ddd = Math.PI * 3 ** 2

console.log(answer)
console.log(answers)
console.log(answer1)
console.log(ddd)

// Concatenation

const surName = "Ojobor"
const secondName = "Jude"
const myAge = 32

const message = "My name is " + surName + " " + secondName + ", " + " I am " + myAge + " years old."  // For EJS 5 or Newer Version

const message2 = `My name is ${surName} ${secondName}, I am ${myAge} years old. ` // For EJS 6 or Newer Version

console.log(message)
console.log(message2)


// Arrays

const jssOne = [ "Jude", "Chika", "John", "Victor", "Jasmine" ] // String Array
const yy = [4, 30, 20, 0.5, 50, 0.85]  // Numbers Arrays
const tt = [ true, false, "yyyy", "45", "money" ]    // Mixed Array

// Array Methods and Properties
console.log( jssOne.length )
console.log( jssOne.includes("John") )
console.log( jssOne.concat(tt) )

// Add a new element to the end of the array and return the new array
jssOne.push("Sampson") 
jssOne.push("Martins") 

// Add a new element to the beginning of the array and return the new array
jssOne.unshift("Faith")

// Pop removes the last element in the array
jssOne.pop()
console.log(jssOne)

// Empty Array
const pp = [  ]
console.log(pp)

// Push to the empty array
pp.push("Michael")
pp.push("Jude", "Charles")
console.log(pp)

// Printing out a particular name from the list
console.log(jssOne[1])