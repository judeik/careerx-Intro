// 1. Check if student passed based on score (JAMB-style)

function checkPass(score) {
  if (score >= 180) {
    console.log("Passed");
  } else {
    console.log("Failed");
  }
}

// Example test
const jambScore = 185;
checkPass(jambScore); // Output: Passed

// 2. Check if user is eligible to vote based on age

function canVote(age) {
  return age >= 18 ? "You are eligible to vote" : "Not eligible";
}

// Example test
const age = 20;
console.log(canVote(age)); // Output: You are eligible to vote


// 3. Grade student based on score

function gradeStudent(name, score) {
  if (score >= 90) {
    return "Excellent";
  } else if (score >= 75) {
    return "Good";
  } else if (score >= 50) {
    return "Average";
  } else {
    return "Fail";
  }
}

// Example test
const studentName = "Jude";
const studentScore = 78;
console.log(`${studentName}: ${gradeStudent(studentName, studentScore)}`); // Output: Jude: Good


// 4. Grant access only if user has ID and is above 18

function checkAccess(hasID, isAbove18) {
  return hasID && isAbove18 ? "Access granted" : "Access denied";
}

// Example test
const hasID = true;
const isAbove18 = true;
console.log(checkAccess(hasID, isAbove18)); // Output: Access granted


//  5. Loop through scores and print Pass/Fail

function checkScores(scores) {
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 50) {
      console.log(`Score ${scores[i]}: Pass`);
    } else {
      console.log(`Score ${scores[i]}: Fail`);
    }
  }
}

// Example test
const studentScores = [30, 55, 80, 45, 60];
checkScores(studentScores);
// Output:
// Score 30: Fail
// Score 55: Pass
// Score 80: Pass
// Score 45: Fail
// Score 60: Pass


// 6. Arrow function to check if student passed Math and English

const passedBoth = (math, english) => (math >= 50 && english >= 50) ? "Yes" : "No";

// Example test
const mathScore = 60;
const englishScore = 45;
console.log(passedBoth(mathScore, englishScore)); // Output: No


//  7. Check if user has either email or phone before signing up

function canSignUp(email, phone) {
  return email || phone ? "Ready to sign up" : "Email or phone number is required";
}

// Example test
const userEmail = "";
const userPhone = "08123456789";
console.log(canSignUp(userEmail, userPhone)); // Output: Ready to sign up


// 8. Check if username or password is empty
function validateLogin(username, password) {
  return !username || !password ? "Invalid input" : "Login successful";
}

// Example test
const username = "admin";
const password = "";
console.log(validateLogin(username, password)); // Output: Invalid input


// 9. Determine if worker is full-time or part-time

function workType(hours) {
  return hours >= 40 ? "Full-time" : "Part-time";
}

// Example test
const hoursWorked = 35;
console.log(workType(hoursWorked)); // Output: Part-time


// 10. Arrow function to return larger of two numbers
const getLarger = (num1, num2) => num1 > num2 ? num1 : num2;

// Example test
const number1 = 45;
const number2 = 100;
console.log(`Larger number: ${getLarger(number1, number2)}`); // Output: Larger number: 100
