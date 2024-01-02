// // js concepts and Interview Question

// console.log("Hii the value of Aditya's Age is" + age);

// var age = 34;

// console.log("Hii the actual value of Aditya's age is " + age);

// // Functions in Js

// function printHello() {
//   console.log("Hii my name is shubham ");
//   console.log("I am in Cse department");
//   console.log("I have stuff like Vs code, Replit, and Github");
//   console.log("I am passinate about code ");
// }

// printHello();

// function iLoveU() {
//   console.log("Hii i have something for you");
//   console.log("Can i deliver to you ");
//   console.log("Are u comfortable ?");
//   console.log("Ok Listen >>>>>");
// }
// iLoveU();

// function addTwoNumber(number1, number2) {
//   let result = number1 + number2;
//   return result;
// }

// const result = addTwoNumber(3, 2);
// console.log("Result is " + result);

// // Function for multiply two numbers

// function multiplyTwoNum(number1, number2) {
//   let mtn = number1 * number2;
//   return mtn;
// }
// const mtn = multiplyTwoNum(4, 5);
// console.log("Result is " + mtn);

// // Functio for subtracting two numbers
// function subTwoNum(number1, number2) {
//   let subtract = number1 - number2;
//   return subtract;
// }
// const subtract = subTwoNum(3, 2);
// console.log("Result is " + subtract);

// // Function for adding the numbers (sum of two number using function)
// function addTwoNum(number1, number2) {
//   let sum = number1 + number2;
//   return sum;
// }
// const sum = addTwoNum(4, 4);
// console.log(sum);

// // let made a function for modulo in js
// function findMudlo(number1, number2) {
//   let remainder = number1 / number2;
//   console.log("Build Yourself");
//   return remainder;
// }
// const remainder = findMudlo(10, 8);
// console.log(remainder);

// // Let made a function for division
// function divTwoNum(number1, number2) {
//   let shubh = number1 / number2;
//   console.log("This is a function of divison");
//   return shubh;
// }

// const shubh = divTwoNum(190, 4);
// console.log("The divided number is " + shubh);

// // Let make a function for reverse the number
// function reverseTheNumb(n) {
//   //Change the number into string
//   n = n + " ";

//   // Split the string into an array of charcter, Reverse the String and join the string
//   return n.split("").reverse().join("");
// }
// //     Change the string into Numbers and the Console it
// console.log(Number(reverseTheNumb(234567)));

//  Write a function that checks a string is Palindrome or not ?
//  A Palindrome is a word, sentence, sequence or phrase that can written same as forward and backward
//  Write a function which shows the string, phrse and sentence same form backward and forward  // Write a JavaScript function that checks whether a passed string is palindrome or not?

function check_Palindrome(str_entry) {
  // Change the string into lower case and remove  all non-alphanumeric characters
  var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
  var ccount = 0;


  // Check whether the string is empty or not
  if (cstr === "") {
    console.log("Nothing found!");
    return false;
  }


  // Check if the length of the string is even or odd
  if (cstr.length % 2 === 0) {
    ccount = cstr.length / 2;
  } 
  else {
    // If the length of the string is 1 then it becomes a palindrome
    if (cstr.length === 1) {
      console.log("Entry is a palindrome.");
      return true;
    }
     else {
      // If the length of the string is odd ignore middle character
      ccount = (cstr.length - 1) / 2;
    }
  }


  // Loop through to check the first character to the last character and then move next
  for (var x = 0; x < ccount; x++) {
    // Compare characters and drop them if they do not match
    if (cstr[x] != cstr.slice(-1 - x)[0]) {
      console.log("Entry is not a palindrome.");
      return false;
    }
  }

  console.log("The entry is a palindrome.");
  return true;
}

check_Palindrome("madam");
check_Palindrome("nursesrun");
check_Palindrome("fox");
