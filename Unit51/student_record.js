// PART 1 — Declaring Student's Personal Details
 
// 1. Declare variables
const studentName = "Lwandle Sitshi";
const studentID = 'SD-2026-032';
const age = 18;
let gradeLevel = 12;
const isEnrolled = true;
let homeTown = "Manchester";
const guardianName = "Sir Alex Ferguson";
let previousSchool;
 
// 2. Print every variable on its own line
console.log(studentName);
console.log(studentID);
console.log(age);
console.log(gradeLevel);
console.log(isEnrolled);
console.log(homeTown);
console.log(guardianName);
console.log(previousSchool);
 
// 3. Check data types using typeof
console.log('--- DATA TYPES ---');
console.log(typeof studentName);
console.log(typeof studentID);
console.log(typeof age);
console.log(typeof gradeLevel);
console.log(typeof isEnrolled);
console.log(typeof previousSchool);
 
// PART 2 — Subject Marks and Arithmetic Operations
 
// 1. Declare marks for five subjects
let marksMaths = 85;
let marksEnglish = 78;
let marksScience = 92;
let marksHistory = 65;
let marksCoding = 95;
 
// 2. Perform calculations
const totalMarks = marksMaths + marksEnglish + marksScience + marksHistory + marksCoding;
const averageMark = totalMarks / 5;
const highestMark = Math.max(marksMaths, marksEnglish, marksScience, marksHistory, marksCoding);
const lowestMark = Math.min(marksMaths, marksEnglish, marksScience, marksHistory, marksCoding);
const markRange = highestMark - lowestMark;
const roundedAverage = Math.round(averageMark);
 
// 3. Print the results using labels and template literals
console.log('Total marks: ' + totalMarks);
console.log(`Average: ${averageMark}`);
console.log(`Highest Mark: ${highestMark}`);
console.log(`Lowest Mark: ${lowestMark}`);
console.log(`Mark Range: ${markRange}`);
console.log(`Rounded Average: ${roundedAverage}`);
 
// 4. Simulate a mark update using assignment operators
console.log('Maths before rewrite: ' + marksMaths);
marksMaths += 8;
console.log('Maths after rewrite: ' + marksMaths);
 
// Recalculate manually into new let variables
let newTotal = marksMaths + marksEnglish + marksScience + marksHistory + marksCoding;
let newAverage = newTotal / 5;
console.log(`New Total: ${newTotal}`);
console.log(`New Average: ${newAverage}`);
 
// PART 3 — Comparisons and Decisions
 
// 1. Create boolean validation variables
const isPassing = averageMark >= 50;
const isDux = averageMark >= 80;
const needsSupport = averageMark < 50;
const hasPerfectScore = highestMark === 100;
const isOfAge = age >= 18;
const isHighSchool = gradeLevel >= 10 && gradeLevel <= 12;
 
// 3. Print the comparison booleans
console.log('--- COMPARISONS ---');
console.log(`Is Passing: ${isPassing}`);
console.log(`Is Dux: ${isDux}`);
console.log(`Needs Support: ${needsSupport}`);
console.log(`Has Perfect Score: ${hasPerfectScore}`);
console.log(`Is Of Age: ${isOfAge}`);
console.log(`Is High School: ${isHighSchool}`);
 
// 4. Logical operator expressions
const canGetPrize = isPassing && isDux;
const needsIntervene = needsSupport || lowestMark < 40;
const notPassing = !isPassing;
const fullEligibility = isEnrolled && isHighSchool && isPassing;
 
console.log('--- LOGICAL OPERATORS ---');
console.log(`Can Get Prize: ${canGetPrize}`);
console.log(`Needs Intervention: ${needsIntervene}`);
console.log(`Not Passing: ${notPassing}`);
console.log(`Full Eligibility: ${fullEligibility}`);
 
 // 1. Build a complete formatted report using template literals

console.log('================================================');
console.log(`STUDENT: ${studentName.toUpperCase()} (${studentID})`);
console.log('================================================');
console.log(`Age: ${age}`);
console.log(`Grade: ${gradeLevel}`);
console.log(`Hometown: ${homeTown}`);
console.log(`Enrolled Status: ${isEnrolled}`);
console.log('------------------------------------------------');
console.log(`Maths: ${marksMaths}`);
console.log(`English: ${marksEnglish}`);
console.log(`Science: ${marksScience}`);
console.log(`History: ${marksHistory}`);
console.log(`Coding: ${marksCoding}`);
console.log('------------------------------------------------');
console.log(`Total Marks: ${totalMarks}`);
console.log(`Original Average: ${averageMark}`);
console.log(`Rounded Average: ${roundedAverage}`);
console.log(`Highest Mark: ${highestMark}`);
console.log(`Lowest Mark: ${lowestMark}`);
console.log(`Mark Range: ${markRange}`);
console.log('------------------------------------------------');
console.log(`Passing Status: ${isPassing}`);
console.log(`Dux Status: ${isDux}`);
console.log(`Needs Support: ${needsSupport}`);
console.log(`Full Eligibility: ${fullEligibility}`);
console.log('------------------------------------------------');
console.log(`DATA TYPES: Name=${typeof studentName} | Age=${typeof age} | Enrolled=${typeof isEnrolled}`);
console.log('================================================');