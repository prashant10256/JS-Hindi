console.log("String methods...");

let str = "abcdefghijklmnopqrstuvwxyz";
let length = str.length;
console.log(length);
console.log(str.charAt(0));
console.log(str.charCodeAt(0));
console.log(str.charAt(2));
console.log(str[25]);
console.log(str.slice(0,5)); // It returns extracted part in new string end will not include
let str2 = "mango, apple, orange"
console.log(str2.substring(5,12)); // It will return given range of charecters with inculdeing space if there is space in charecters
console.log(str2.substr(7,5)); // It will strat from given range and end with original strings index values

let str3 = "Hello World"
let str4  = " How Are You !"
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());

console.log(str3 +  str4);

let strTrim = "      dhkodjdjikdkdndll  "
console.log(strTrim.trim()); // The trim() method removes whitespace from both sides of a string
console.log(strTrim.trimStart()); // The trimStart() method works like trim(), but removes whitespace only from the start of a string.
console.log(strTrim.trimEnd());// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
console.log(strTrim.length);

let padStart = "5"
console.log(padStart.padStart(5,"*"));
/* The padStart() method pads a string from the start.
It pads a string with another string (multiple times) until it reaches a given length.*/

let padEnd = "8";
console.log(padEnd.padEnd(4,"0000"));
/* The padEnd() method pads a string from the end.
It pads a string with another string (multiple times) until it reaches a given length */

let myStr = "Hello World! "
console.log(myStr.repeat(2));
/* 
The repeat() method returns a string with a number of copies of a string.
The repeat() method returns a new string.
The repeat() method does not change the original string.
*/

console.log(myStr.replace("World!","everyone"));
/*
The replace() method replaces a specified value with another value in a string.
The replace() method does not change the string it is called on.
The replace() method returns a new string.
The replace() method replaces only the first match.
*/

let myStr1 = "I love cats. Cats are very easy to love. Cats are very popular."
console.log(myStr1.replaceAll("cats", "Dogs"));// The replaceAll() method allows you to specify a regular expression instead of a string to be replaced

let myStr2 = "Hello World"
console.log(myStr2.split(""));// A string can be converted to an array with the split() method:
let myStr3 = "Hello World How are you"
console.log(myStr2.split(""));// A string can be converted to an array with the split() method: