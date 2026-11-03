// function cubeNumber(n) {
//     const a = Number(prompt("Enter a number"));
//     alert(a*a*a);
// }

// cubeNumber(3);



//Cube of a number using function with parameter and return value
// function cubeNumber() {
//     let cube= n*n*n;
//     return cube;
// }
// let n = parseInt(prompt("Enter a number"));
// const cubeOfN = cubeNumber(n);
// alert(`cube of ${n} is ${cubeOfN}`)


// If a person is an adult or not..
// function isAdult(age) {
//     if (age >= 18) {
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let n = parseInt(prompt("Enter your age"));
// let isAllowed = isAdult(n);
// alert(`Your age is ${n}.\n You are an adult: ${isAllowed}`)
// alert(`Are you adult ${isAnAdult}`);


// function calculateBMI(weight, height) {
//     let k = weight/(height*height);
//     return k 
// }

// let w = parseInt(prompt("Enter your weight in kg."));
// let h = parseFloat(prompt("Enter your height."));
// let yourBMI = calculateBMI(w, h);
// alert(`Your BMI is ${yourBMI}`);


// Calculating Grade from marks...
// function gradeFromMarks(marks){
//     if (marks >= 90){
//         return "A"
//     } else if (marks >= 75 && marks < 90){
//         return "B"
//     } else if (marks >= 50 && marks < 75){
//         return "C"
//     } else{
//         return "F"
//     }

// }
// let m = parseInt(prompt("Enter your marks: "));
// let grade = gradeFromMarks(m);
// alert(`Your grade is ${grade}`);
// console.log(`YOur grade is ${grade}!`)


// function applyDiscount(price, isMember = false) {
//     if (isMember) {
//         return price - 0.1 * price;
//     } else {
//         return price;
//     }
// }
// console.log(applyDiscount(500, true));



//Counting Vowels in a word....
// function countVowels(word) {
//     let count = 0;
//     let i = 0;
//     while (i < word.length){
//         if (word[i] == "a" ||
//             word[i] == "e" || 
//             word[i] == "i" || 
//             word[i] == "o" || 
//             word[i] == "u"){
//                 count++;
//         }
//     i++
//     } 
//     return count;
// }
// let vowels = prompt("Enter a word");
// let vowelsCounted = countVowels(vowels);
// console.log(`Total number of vowels inn the given word is ${vowelsCounted}`);
