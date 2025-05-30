// Assignment by Ojobor Jude Ikechukwu

// 1. Create variables to store your name, age, and nationality.
let name = "Ojobor Jude Ikechukwu";
let age = 25;
let nationality = "Nigerian";

// Combine them into a sentence that introduces you
let introduction = `My name is ${name}, I am ${age} years old and I am a ${nationality}.`;
console.log(introduction);

// 2. Favorite quote or lyric - change to uppercase and lowercase
let favoriteQuote = "Success is not final, failure is not fatal.";
console.log(favoriteQuote.toUpperCase()); // Convert to UPPERCASE
console.log(favoriteQuote.toLowerCase()); // Convert to lowercase

// 3. Reverse a word
let word = "Developer";
let reversedWord = word.split("").reverse().join(""); // Split, reverse, and join
console.log(`Original: ${word}, Reversed: ${reversedWord}`);

// 4. Price of 3 items and calculate total
let item1 = 450;
let item2 = 1200;
let item3 = 350;
let total = item1 + item2 + item3;
console.log(`The total price of the 3 items is ₦${total}`);

// 5. Find average of 5 test scores
let score1 = 75;
let score2 = 88;
let score3 = 92;
let score4 = 69;
let score5 = 85;
let averageScore = (score1 + score2 + score3 + score4 + score5) / 5;
console.log(`The average test score is ${averageScore}`);

// 6. Array of 5 favorite foods
let favoriteFoods = ["Jollof Rice", "Pizza", "Pounded Yam", "Fried Plantain", "Grilled Fish"];
console.log(`First food: ${favoriteFoods[0]}, Last food: ${favoriteFoods[favoriteFoods.length - 1]}`);

// 7. Add one food at beginning and end, then display new list
favoriteFoods.unshift("Shawarma"); // Add at beginning
favoriteFoods.push("Chicken Suya"); // Add at end
console.log("Updated list of favorite foods:", favoriteFoods);

// 8. Create JSS1 array with 10 student names
let jssOne = [
  "Adaobi", "Chidera", "Michael", "Amaka", "Ifeanyi",
  "Precious", "Samuel", "Blessing", "Victor", "Emeka"
];

// 9. Create JSS2 array with 10 student names
let jssTwo = [
  "Gloria", "David", "Uche", "Sarah", "Kingsley",
  "Peace", "Joseph", "Chiamaka", "Daniel", "Ngozi"
];

// 10. Create JSS3 array with 10 student names
let jssThree = [
  "Jane", "Peter", "Rita", "Tunde", "Esther",
  "Collins", "Favour", "John", "Grace", "Kelvin"
];

console.log("JSS1 Students:", jssOne);
console.log("JSS2 Students:", jssTwo);
console.log("JSS3 Students:", jssThree);
