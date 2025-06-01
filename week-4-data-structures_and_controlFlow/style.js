const jssOne = [ "Jude", "Peter", "Favour", "James" ]
console.log(`Printed the array index of 1:`, jssOne[1])

// Data

const variableNames = [  ]  // array

// Object Key Value Pair
const variableName = { 
    firstName: "Jude",
    lastName: "Ojobor",
    score: 80,
    location: "Enugu"
 }  //  object

const dog = {
    name: "Bingo",
    gender: "Male",
    color: "White",
    height: "2.6ft",
    numberOfLegs: 4,
    avaiableForSale: true
}

const car = {
    model: "Toyota",
    chaselNumber: 4569874225,
    color: "Brown",
    costPrice: "NGN5m"
}

console.log(variableName)

// Printing a particular key
console.log(variableName.location)

const family = {
    father: "John",
    mother: "Sussan",
    uncle: "James",
    children: [ "Chika", "Maryann", "Vincent" ],

    exam: {
        level100: {
            courses: {
                MATH101: 100,
                GSP102: 70,
                GSP101: 80
            }
        },
        level200: {
            courses: {
                VTE122: 89,
                COS202: null,
                GSP207: 90
            }
        }
    }
}

console.log(family.uncle)
console.log(family.exam.level100.courses.MATH101)

// Pickin only Maryann
console.log(family.children[1])

// Object inside an array
const task = [
    {
        firstName: "Charles",
        score: 90
    },
        
    {
        firstName: "Victor",
        score: 70
    },

    {
        firstName: "Faith",
        score: 80,
        location: [
            {
                city: "Nsukka",
                state: "Enugu"
            },
            {
                city: "Asaba",
                state: "Delta"
            }
        ],
        hobbies: ["Football", "Browsing", "Music"]
    }
]

console.log(task[1].firstName)

console.log(task[2].location[1].state) // Delta
console.log(task[2].hobbies[0]) // Football


// Control Flow, => Loops

// While loop
// For loop

// let a = 2

// a++
// a++

// a--
// console.log(a)

// NOTE: ++ will add 1 to the variable 2 (i.e. the original value)
// NOTE: -- will substract 1 from the variable 2 (i.e. the original value)

// Every loop have 3 things in common and they are:
// 1. When to start
// 2. When to stop
// 3. Increment or Decrement the variable used.

// While loop

let x = 0 // When to start

// while(){}

while( x < 10 ){
    console.log("We are trying")

    x++
}

let y = 8
while(y < 15 ){
    console.log("It will run into 7 times")

    y++ // If you miss this type, it might crash your system unless you shut down your system
}

// For Loop

// It will print 1, 2, 3, 4, 5

for(let a = 0; a < 5; a++){
    console.log(a)
    console.log('$(contactinating g)') // Concatinating the value of g
}

// NOTE: While loop and For loop are for beginners. You may not use in your advanced course.