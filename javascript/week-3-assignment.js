// Assignment by Ojobor Jude Ikechukwu
// JavaScript Best Practice: Prefer `const` for variables that won't be reassigned.
// Use `let` only when reassignment is necessary.

// 1. Introduction with name, age, and nationality
const name = "Ojobor Jude Ikechukwu";
const age = 25;
const nationality = "Nigerian";

const introduction = `My name is ${name}, I am ${age} years old and I am a ${nationality}.`;
console.log(introduction);

// 2. Favorite quote - display in uppercase and lowercase
const favoriteQuote = "Success is not final, failure is not fatal.";
const quoteUpper = favoriteQuote.toUpperCase(); // Convert to uppercase
const quoteLower = favoriteQuote.toLowerCase(); // Convert to lowercase

console.log("Uppercase Quote:", quoteUpper);
console.log("Lowercase Quote:", quoteLower);

// 3. Reverse a word
const word = "Developer";
const reversedWord = word.split("").reverse().join(""); // Reverse the word
console.log(`Original: ${word}, Reversed: ${reversedWord}`);

// 4. Price of 3 items and calculate total
const item1 = 450;
const item2 = 1200;
const item3 = 350;

const total = item1 + item2 + item3;
console.log(`The total price of the 3 items is ₦${total}`);

// 5. Average of 5 test scores
const score1 = 75;
const score2 = 88;
const score3 = 92;
const score4 = 69;
const score5 = 85;

const totalScore = score1 + score2 + score3 + score4 + score5;
const averageScore = totalScore / 5;
console.log(`The average test score is ${averageScore}`);

// 6. Array of 5 favorite foods
const favoriteFoods = ["Jollof Rice", "Pizza", "Pounded Yam", "Fried Plantain", "Grilled Fish"];

const firstFood = favoriteFoods[0]; // Access first item
const lastFood = favoriteFoods[favoriteFoods.length - 1]; // Access last item
console.log(`First food: ${firstFood}, Last food: ${lastFood}`);

// 7. Add one food to beginning and end, then display updated list
favoriteFoods.unshift("Shawarma"); // Add to beginning
favoriteFoods.push("Chicken Suya"); // Add to end

console.log("Updated list of favorite foods:", favoriteFoods);

// 8. Create array for JSS1 students
const jssOne = [
  "Adaobi", "Chidera", "Michael", "Amaka", "Ifeanyi",
  "Precious", "Samuel", "Blessing", "Victor", "Emeka"
];

// 9. Create array for JSS2 students
const jssTwo = [
  "Gloria", "David", "Uche", "Sarah", "Kingsley",
  "Peace", "Joseph", "Chiamaka", "Daniel", "Ngozi"
];

// 10. Create array for JSS3 students
const jssThree = [
  "Jane", "Peter", "Rita", "Tunde", "Esther",
  "Collins", "Favour", "John", "Grace", "Kelvin"
];

console.log("JSS1 Students:", jssOne);
console.log("JSS2 Students:", jssTwo);
console.log("JSS3 Students:", jssThree);
