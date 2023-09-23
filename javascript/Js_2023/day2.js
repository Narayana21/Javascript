// console.log will display the array or object as usual, 
// but console.table will tabularize the index and values for you.

const myArr = ['Kolade', 'Chelsea', 10, true];

console.log(myArr);
console.table(myArr);
console.log('-------------------------------------------')

// It works with objects the same way it works with arrays:

const myObj = {
    name: 'Kolade',
    luckyNum: 10,
    lovesFootball: true,
  };
  
  console.log(myObj);
  console.table(myObj);
  console.log('-------------------------------------------')

// Template string format
let n='Narayana'
let age=22
let str=`my name is ${n} and i am ${age} years old`
console.log(str)
console.log('-------------------------------------------')

// Convert Strings to Numbers
// The unary plus operator (+) 
// and number constructor (Number()) help you convert strings to numbers.
// To convert the string to a number with unary, all you need to do is prepend the string with a plus sign. 
// And to do it with the number constructor, wrap the number in Number()

const myNum = '5';

convertNum1 = +myNum;
convertNum2 = Number(myNum);

console.log(convertNum1, typeof convertNum1); // 5 'number'
console.log(convertNum2, typeof convertNum2); // 5 'number'

// console.group()

// When you have multiple related items like username, bio, and so on 
// and you want to log them to the console, you should use console.group() 
// and console.groupEnd() to close the group.
// This will give you a drop down list of all the items:
console.log('-------------------------------------------')

console.group('Bio:');

console.log('My name is Kolade');
console.warn("I don't like to be late");
console.error('You came late');

console.groupEnd();
console.log('-------------------------------------------')

// Math.floor(Math.random() * n1 + n2) Generates a Random Number Between n1 and n2

// For example, Math.floor(Math.random() * 100 + 1) would generate a random number between 100 and 1, 
// after it follows these processes:

//  *  Math.random() generates a random floating point number between 0 and 1 – 0 inclusive but 1 exclusive
//  * With Math.random() * 100, the random number is now between 0 and 99 but still has long floating points
//  * Math.floor(Math.random() * 100) rounds the floating point number to the nearest integer between 0 and 99
//  * Math.floor(Math.random() * 100 + 1) adds 1 to the result and shifts the range to 1 - 100.



// Methods of the Math Object

let x,x1;

// Get the square root of a number
x = Math.sqrt(9);

// convert a number to absolute value
x = Math.abs(-5); // 5

// Round up a number to the nearest whole number
x = Math.round(4.6);

// Round up a number
x = Math.ceil(4.2); // 5

// Round down a number
x = Math.floor(4.9); // 4

// Exponent of a number
x = Math.pow(2, 3); // 8

// Get the minimum number
x = Math.min(4, 5, 3); // 3

// Get the maximum number
x = Math.max(4, 5, 3); // 5

// Get a random number/decimal between 0 and 1
x1 = Math.random();
console.log(x1)

// Get a random number between 1 and 200
x = Math.floor(Math.random() * 200 + 1); // any number between and 200

console.log(x);

console.log('-------------------------------------------')

// Capitalize the First Letter of Any Word
// You can capitalize the first letter of any word by combining the chartAt(), toUpperCase(), and slice() methods.
// With chartAt(0), you can get the first letter of the word and use the toUpperCase() method with it,
//  then concatenate the rest of the letters with slice(1).

const str2 = 'john';
const capitalizedStr = str2 => str2.charAt(0).toUpperCase() + str2.slice(1);

console.log(capitalizedStr(str2)); // John
console.log(capitalizedStr('doe')); // Doe
console.log('-------------------------------------------')


// Use the startsWith() and endsWith() String Methods to Get the Start and End of a String

// The startsWith() and endsWith() methods help you determine if a string begins or ends with a specific substring. 
// Since they both return true or false, they are handy for various string manipulations and conditional checks.

// Here's their basic usage:

const message = 'Hello world';

console.log(message.startsWith('H')); // true
console.log(message.startsWith('h')); // false
console.log(message.endsWith('d')); // true
console.log(message.endsWith('D')); // false
console.log('-------------------------------------------')

// Both the startsWith() and endsWith() methods also support optional start and end positions
//  to limit the range of the string where the check is performed:
const text = 'Welcome to freeCodeCamp';

console.log(text.startsWith('W', 0)); // true
console.log('-------------------------------------------')

console.log(text.startsWith('freeCodeCamp', 11)); // true
// Actually p index value is 22 but we need to give index pos + 1 = 23

console.log('-------------------------------------------')

console.log(text.endsWith('p', 23)); // true

console.log('-------------------------------------------')


// Use the trim(), trimStart(), and trimEnd() to Handle White Spaces

// The trim() method gets rid of white spaces at both ends of the string.
//  The trimStart() gets rid of white spaces at the start of the string. 
// And trimEnd() removes white spaces at the end of the string.

const greet = '   Hello world!   ';
console.log(greet.trim());
// Hello world!
console.log('-------------------------------------------')

const greet2 = '   Hello world!   ';
console.log(greet2.trimStart());
// Output: 'Hello, world!   '
console.log('-------------------------------------------')

const text1 = '   Hello world!   ';
console.log(text.trimEnd());
// Output: '   Hello world!'
console.log('-------------------------------------------')

const input = '   ';
if (input.trim() === '') {
  console.log('The input is empty but has whitespace characters.');
} else {
  console.log('The input contains non-whitespace characters.');
}
// Output: The input is empty but has whitespace characters


// To convert first letter of each word to upper case

function initCap(s) {
    var result = '';
    if ((typeof (s) === 'undefined') || (s == null)) {
      return result;
    }
  
    s = s.toLowerCase();
    var words = s.split(' ');
    console.log('-------------------------------------------')
    console.log(words)
    console.log('-------------------------------------------')

    for (var i = 0; i < words.length; ++i) {
      result += (i > 0 ? ' ' : '') + 
        words[i].charAt(0).toUpperCase()+words[i].slice(1)
        // words[i].substring(0, 1).toUpperCase() +
        // words[i].slice(1);
    }
    return result;
  }
console.log(initCap('nimmaLapudi lakshmi narayana'))
