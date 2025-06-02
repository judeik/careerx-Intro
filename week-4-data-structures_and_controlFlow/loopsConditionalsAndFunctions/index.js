// For loop

const simple = [ "Joy", "Abigail", "Ken"]
// console.log(simple)

for( let a = 0; a < 3; a++){
    // console.log(simple)

    // To print out item in an array
    console.log(simple[1])
}

// How of make a request to bank API that has 1000 data or more

const bankApi = [ " Jude", "Matthew", "Vincent", "Mabel"]

for(let a = 0; a < bankApi.length; a++){
    console.log(bankApi[a])
}

// Conditionals

const a = 10 //It can also be numbers or string

// if(){}
if( a < 50 ){
    console.log("Welcome")
}

// It will not run
const x = "David"
if ( x.includes("g")){
    console.log("It will not run") 
}

// It will run
const y = "David"
if ( y.includes("d")){
    console.log("It will run")
}

// Compairism 
const b = 15

if( a == 14 ){
    console.log("It will not run")
}

const c = 15

if( c == 15 ){
    console.log("It will run beacuse c is equal to 15")
}

// If the condition that was not meant e.g. no payment, no credit to wallet

const d = 5
if(d > 10){
    console.log("Good morning")
} else {
    console.log("Hemm! Afternoon")
}

// Two conditions with a fallback
const g = 10

if(g < 10){
    console.log("first")

} else if(g == 10){
    console.log("second")

} else {
    console.log("Third")
}

// Logical AND && and Logical OR ||
// && AND
// || OR
// Two conditions have to be true. e.g. As a student, for you to seat for an exam (GSP 101) you must have to pay your school fees and must have to register your course GSP 101. The two conditions must be meet before you can write an exam.

const m = 2
const n = 3

if(m < 5 && n > 2){  // logical && m must be equal to n
    console.log("First")

} else {
    console.log("Second")
}

// Using OR ||
const e = 2
const f = 3

if(e < 5 && f > 2){  // logical || only one condition must meet
    console.log("Yes")

} else {
    console.log("No")
}

const aa = 1
const bb = 2
const cc = 3

if(aa > 2 || bb > 1 && cc == 3){
    console.log("First Checked")

} else if (aa < 3 || bb == 5 && cc > 10 ){
    console.log("Second Checked")
} else {
    console.log("Third Checked")
}

// Exam Scores
const score = 70

if(score < 50){
    console.log("Failed")

} else if(score >= 50 && score < 60){
    console.log("Pass")

} else if (score >= 60 && score < 70){
    console.log("Very Good")

} else if (score > 70){
    console.log("Excellent")

} else {
    console.log("Please check next time! You did not seat for the exam")
}

// Ternary Operators: This is the short hand for writting else if statement

const ggg = 10
let ccc 

ggg < 10 ? "Do something" : "Do another thing"

ggg < 10 ? ccc = 5 : ccc = 20
console.log(ccc)

// Second Method

const xy = 10
let ab

xy > 10 ? console.log("Red") : console.log("Green")

// Functions
// It is one of very important in JavaScript
// Function is like robot that works as programmed

function nameOfFunction (){
    console.log("First")
}

nameOfFunction()
nameOfFunction()

// Function that sum 

function sumUp (){
    const jb = 10 + 40 + 50
    console.log(jb)
}

sumUp()

function logMessage (){
    const message = `My name is Ojobor Jude Ikechukwu`
    console.log(message)
}

logMessage()

// Function that accepts two numbers
function sum (number1, number2){

    const result = number1 + number2
    console.log(result)
}

sum(2, 5)
sum(70, 90)  // Not Secure, because a user might input one number which will lead to system crash, when he input 3 numbers the system will accept only the first 2 numbers and ignore the rest.

// Secured: By implementing a default value

function sub (number1 = 1, number2 = 2){

    const result = number1 + number2
    console.log(result)
}

sub()
sub(2)
sub(4, 6)
sub(5, 5, 6)

// Concatination
function greetMe (name = "User", score = 0){
    const message = `Hi, my name is ${name}, my score is ${score}`

    console.log(message)
}

greetMe()
greetMe("Jude", 80)
greetMe("Ojobor Jude Ikechukwu", 280)

// Hoisting: It placed your functions above the code. Reading the code from the top to the bottom

// Arrow Function is an EJS 6
const variableName = ()=>{} // This an Arrow function but the 3 of them must be together

const variableNames = ()=>{
    console.log("Testing First")
}

variableNames()

// Accepting variables
const acceptVariable = (num = 0)=>{
    console.log(num + 10)
}

acceptVariable()
acceptVariable(45)

// NOTE: Arrow functions are not Hoisted. Variables decleared with const and let are not Hoisted but variables decleared by var are Hoisted.

function canVote(age) {
  return age >= 18 ? "You are eligible to vote" : "Not eligible";
}

// Example test
const age = 20;
console.log(canVote(age)); // Output: You are eligible to vote

